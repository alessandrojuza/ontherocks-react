import "./App.scss";
import CocktailResult from "./components/CocktailResult";
import SearchIcon from "@mui/icons-material/Search";
import Logo from "./img/logo.png";

function App() {
  return (
    <div className="App">
      <div className="main-container">
        <div className="search-bar-container">
          <div className="logo-container">
            <img src={Logo} alt="logo" className="logo" />
          </div>
          <div className="search-bar">
            <input
              type="text"
              className="search-bar-input"
              placeholder="Enter Your Favorite Cocktail:"
            />
            <SearchIcon className="search-icon" />
          </div>
        </div>
        <div className="result-container">
          <CocktailResult />
        </div>
      </div>
    </div>
  );
}

export default App;
