import "./App.css";
import SwipeableTemporaryDrawer from "./components/SideBar";
import Routes from "./Routes";

function App() {
  return (
    <div className="App">
      <SwipeableTemporaryDrawer />
      <header className="App-header">
        <Routes />
      </header>
    </div>
  );
}

export default App;
