import "./App.css";
import { FaHome } from "react-icons/fa";

function App() {
  return (
    <>
      <h1 className="text-3xl font-roboto font-bold underline">Hello world!</h1>
      <h1 className="text-3xl font-poppins font-bold underline">
        Hello world! <FaHome />
      </h1>
    </>
  );
}

export default App;
