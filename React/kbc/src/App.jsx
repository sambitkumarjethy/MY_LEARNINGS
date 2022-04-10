import "./app.css";
import React, { useState } from "react";
import Tivia from "./components/Tivia";

function App() {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [timeOut, setTimeOut] = useState(false);
  const data = [
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },
  ];
  const moneyPyramid = [
    { id: 1, ammount: "$ 100" },
    { id: 2, ammount: "$ 200" },
    { id: 3, ammount: "$ 300" },
    { id: 4, ammount: "$ 400" },
    { id: 5, ammount: "$ 500" },
    { id: 6, ammount: "$ 600" },
    { id: 7, ammount: "$ 700" },
    { id: 8, ammount: "$ 800" },
    { id: 8, ammount: "$ 900" },
    { id: 9, ammount: "$ 1000" },
    { id: 10, ammount: "$ 10000" },
  ].reverse();
  return (
    <div className="app">
      <div className="main">
        <div className="top">
          <div className="timmer">30</div>
        </div>

        <div className="bottom">
          {console.log({ questionNumber })}
          <Tivia
            data={data}
            setTimeOut={setTimeOut}
            questionNumber={questionNumber}
            setQuestionNumber={setQuestionNumber}
          />
        </div>
      </div>
      <div className="pyramid">
        <ul className="moneyList">
          {moneyPyramid.map((m) => (
            <li
              className={
                questionNumber === m.id
                  ? "moneyListItem active"
                  : "moneyListItem"
              }
            >
              <span className="moneyListNumber">{m.id}</span>
              <span className="moneyListAmount">{m.ammount}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default App;
