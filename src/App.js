import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Sidebar />
        <div className="others">Other pages</div>
      </div>
    </div>
  );
}

export default App;
