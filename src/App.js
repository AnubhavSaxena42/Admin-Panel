import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserListPage from "./pages/UserListPage/UserListPage";
import UserPage from "./pages/UserPage/UserPage";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/users" element={<UserListPage />} />
          <Route path="/user/:userId" element={<UserPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
