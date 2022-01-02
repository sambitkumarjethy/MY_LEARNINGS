import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
function App() {
  return (
    <>
      <Navbar title="Text-Utils" about="About Text-Utils" />
      <div className="container my-3">
        <TextForm heading="Exter text to analyze bellow" />
      </div>
    </>
  );
}
export default App;
