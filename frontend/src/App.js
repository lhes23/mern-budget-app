import { Container } from "react-bootstrap";
import Login from "./pages/Login";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";
import UserDetailsPage from "./pages/UserDetailsPage";

const App = () => {
  return (
    <Container fluid="md" className="mt-5">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
      </Routes>
    </Container>
  );
};

export default App;
