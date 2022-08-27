import "./App.css";
import Header from "./compnent/header";
import AddTask from "./compnent/addTask";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-10 col-xs-offset-1">
          <Header />
        </div>
      </div>
      <div className="row">
        <div className="col-xs-10 col-xs-offset-1">
          <AddTask />
        </div>
      </div>
    </div>
  );
}

export default App;
