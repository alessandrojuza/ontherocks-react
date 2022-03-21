import "./App.scss";
import SearchIcon from "@mui/icons-material/Search";

function App() {
  return (
    <div className="App">
      <div className="main-container">
        <div className="search-bar-container">
          <div className="logo-container"></div>
          <div className="search-bar">
            <input type="text" className="search-bar-input" />
            <SearchIcon className="search-icon" />
          </div>
        </div>
        <div className="result-container"></div>
      </div>
    </div>
  );
}

export default App;
