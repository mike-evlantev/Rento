import * as React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from './components/Home';
import { Payment } from './components/Payment';
import { SignIn } from './components/SignIn';
import { Error } from './components/Error';
import { AppContextProvider } from './context/AppContext';


function App() {
  return (
    <AppContextProvider>
      <div className="App">
        <header className="App-header">
          <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/payment" element={<Payment />} />
                <Route path="/error" element={<Error />} />
            </Routes>
          </Router>
        </header>
      </div>
    </AppContextProvider>
  );
}

export default App;
