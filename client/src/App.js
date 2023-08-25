import "./App.scss";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import Messagegreet from "./pages/Contact/Message_greet/Messagegreet";
import About from "./pages/About/About";
import Visa from "./pages/Visa/Visa";
import University from "./pages/University/University";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"; 

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/messagegreet" element={<Messagegreet />} />
          <Route path="/visa" element={<Visa />} />
          <Route path="/about" element={<About />} />
          <Route path="/University" element={<University />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
