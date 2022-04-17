import { Container } from "react-bootstrap";
import Login from "./pages/Login";
import { Route, Routes } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <Container fluid="md" className="mt-5">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<p>Hello register</p>} />
      </Routes>
    </Container>
  );
};

export default App;
