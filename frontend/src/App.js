import { Container, Row } from "react-bootstrap";
import Login from "./pages/Login";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Container fluid="md">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<p>Hello register</p>} />
      </Routes>
    </Container>
  );
};

export default App;
