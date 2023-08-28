import "./App.scss";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"; 
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import Messagegreet from "./pages/Contact/Message_greet/Messagegreet";
import About from "./pages/About/About";
import Visa from "./pages/Visa/Visa";
import University from "./pages/University/University";
import Singleblog from "./components/Singleblog/Singleblog";
import Dashboard from "./pages/Dashboard/Dashboard";
import Createblog from "./components/Createblog/Createblog";
import Createuser from "./components/Createuser/Createuser";
import Admindashboard from "./pages/Dashboard/Admindashboard";
import Mobilenav from "./components/Mobilenav/Mobilenav";
import MyEditor from "./components/MyEditor/MyEditor";

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
          <Route path="/editor" element={<MyEditor />} />
          <Route path="/singleblog/:id" element={<Singleblog />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/createblog" element={<Createblog />} />
          <Route path="/createuser" element={<Createuser />} />
          <Route path="/admindashboard" element={<Admindashboard />} />
          <Route path="/mobilenav" element={<Mobilenav />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
