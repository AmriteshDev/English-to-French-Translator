import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Translator from './compoents/Translator';

function App() {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<Translator />} />
      </Routes>
    </Router>
  );
}

export default App;
