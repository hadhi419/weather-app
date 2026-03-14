import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import SignUpDisabled from "./pages/SignUpDisabled";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/signup-disabled" element={<SignUpDisabled />} />
      </Routes>
    </Router>
  );
}

export default App;
