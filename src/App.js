import React, {useState} from "react";
import "./styles.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Flights from "./pages/Flights";
import Blog from "./pages/Blog";
import CarRentals from "./pages/CarRentals";
import Hotels from "./pages/Hotels";
import Tours from "./pages/Tours";
import Trains from "./pages/Trains";
import UserComments from "./pages/UserComments";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import {Route, Routes} from "react-router-dom";



function App() {
  const [authenticated, setAuthenticated] = useState(false);

  const handleSignIn = () => {
    // Simulate successful authentication
    setAuthenticated(true);
  };

  const handleSignOut = () => {
    // Simulate signing out
    setAuthenticated(false);
  };


  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Flights" element={<Flights/>}/>
      <Route path="/Blog" element={<Blog/>}/>
      <Route path="/CarRentals" element={<CarRentals/>}/>
      <Route path="/Hotels" element={<Hotels/>}/>
      <Route path="/Tours" element={<Tours/>}/>
      <Route path="/Trains" element={<Trains/>}/>
      <Route path="/UserComments" element={<UserComments/>}/>
      <Route path="/SignIn" element={<SignIn />} onSignIn={handleSignIn} />
      <Route path="/SignUp" element={<SignUp />} onSignOut={handleSignOut}/>
      </Routes>
      <Navbar />
    </div>
  );
}

export default App;
