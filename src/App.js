import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Sidebar />
        <HomePage />
      </div>
    </div>
  );
}

export default App;
