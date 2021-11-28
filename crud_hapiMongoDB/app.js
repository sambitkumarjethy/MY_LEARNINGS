const Hapi = require("hapi");
const { string } = require("joi");
const Joi = require("joi");
const Mongoose = require("mongoose");
const server = new Hapi.Server({ host: "localhost", port: 3000 });
Mongoose.connect("mongodb://localhost/hapi");

const PersonModel = Mongoose.model("person", {
  firstName: String,
  lastName: String,
});
server.route({
  method: "POST",
  path: "/person",
  options: {
    // validate: {
    //   payload: {
    //     // firstName: Joi.string().required(),
    //     // lastname: Joi.string().required(),
    //   },
    //   failAction: (request, h, error) => {
    //     return error.isJoi
    //       ? h.response(error.details[0]).takeover()
    //       : h.response(error).takeover();
    //   },
    // },
  },
  handler: async (request, h) => {
    try {
      console.log(request.payload);
      console.log(request.payload.firstName);
      // var person = new PersonModel(request.payload);

      const person = new PersonModel({
        firstName: request.payload.firstName,
        lastName: request.payload.lastname,
      });
      var result = await person.save();
      console.log(person);
      return result;
    } catch (err) {
      return h.response(error).code(500);
    }
  },
});

server.route({
  method: "GET",
  path: "/people",
  handler: async (request, h) => {
    try {
      var person = await PersonModel.find().exec();
      // console.log(person);
      return h.response(person);
    } catch (err) {
      return h.response(error).code(500);
    }
  },
});
server.start();
