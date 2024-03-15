import "./App.css";
import Banner from "./Components/Banner/Banner";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className="max-w-[1170px] mx-auto px-3 lg:px-0">
      <Navbar></Navbar>
      <Banner></Banner>
    </div>
  );
}

export default App;
