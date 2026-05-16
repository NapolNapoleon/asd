import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import obraz from './aleksio.jpeg'
import { useState } from "react";
import './App.css';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/aleksio" element={<Welcome />} />
      </Routes>
    </Router>
  );
}

function Login() {
  const [login, setLogin] = useState("");
  const [haslo, setHaslo] = useState("");
  const navigate = useNavigate();

  const sprawdz = () => {
    if (login === "admin" && haslo === "admin") {
      navigate("/aleksio", { state: { login } });
    } else {
      alert("GG hasło to admin a login to też admin");
    }
  };

  return (
    <div className="strona">
      <div className="naglowek">
        <img src={obraz} alt="Aleksio" />
      </div>

      <div className="zawartosc">
        <h2>Logowanie</h2>
        <input 
          className="pole" 
          placeholder="login" 
          value={login} 
          onChange={e => setLogin(e.target.value)} 
        />
        <input 
          className="pole" 
          type="password" 
          placeholder="hasło" 
          value={haslo} 
          onChange={e => setHaslo(e.target.value)} 
        />
        <button className="przycisk" onClick={sprawdz}>
          Zaloguj się
        </button>
      </div>

      <div className="stopka">
        <p>2025</p>
      </div>
    </div>
  );
}

function Welcome() {
  const location = useLocation();
  const login = location.state?.login;

  return (
    <div className="strona">
      <div className="naglowek">
      <img src={obraz} alt="Aleksio" />
      </div>

      <div className="zawartosc">
          <h2>Cześć {login}!</h2>
          <p>No super strona, prawda?</p>
      </div>

      <div className="stopka">
        <p>2025</p>
      </div>
    </div>
  );
}