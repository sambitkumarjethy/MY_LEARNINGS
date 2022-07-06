import axios from "axios";
export default axios.create({
  baseURL: "https://api.unsplash.com/search/photos",
  headers: {
    Authorization: "Client-ID mFEhpyG5U73dBaiWYFN544oeOdu0Iw0Hwta1YmUVt50",
  },
});
