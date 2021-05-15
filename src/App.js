import './App.css';
import { Kittens, LeftMenu } from "./components";
import { useSelector } from "react-redux";

function App() {
  const kitten = useSelector(state => state.kitten.data);

  return (
    <div className="App">
      <LeftMenu></LeftMenu>
      {
        (kitten.length > 0) ?
          <div id="main" className="App-header">
            <Kittens></Kittens>
          </div>
          :
          <header id="main" className="App-header">
            <h1>Welcome to the kitten world</h1>
            <h3>Please select a category from left menu</h3>
          </header>

      }


    </div>
  );
}

export default App