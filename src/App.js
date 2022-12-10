import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserListPage from "./pages/UserListPage/UserListPage";
import UserPage from "./pages/UserPage/UserPage";
import CreateUserPage from "./pages/CreateUserPage/CreateUserPage";
import ProductListPage from "./pages/ProductListPage/ProductListPage";

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
          <Route path="/new-user" element={<CreateUserPage />} />
          <Route path="/products" element={<ProductListPage />} />
          <Route path="/product/:productId" element={<ProductListPage />} />
          <Route path="/new-product" element={<ProductListPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
