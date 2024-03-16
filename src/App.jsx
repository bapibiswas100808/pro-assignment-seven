import "./App.css";
import Banner from "./Components/Banner/Banner";
import Navbar from "./Components/Navbar/Navbar";
import Recipe from "./Components/Recipe/Recipe";

function App() {
  return (
    <div className="max-w-[1170px] mx-auto px-3 lg:px-0">
      <Navbar></Navbar>
      <Banner></Banner>
      <Recipe></Recipe>
    </div>
  );
}

export default App;
