import React, { useState } from "react";
import AppRouter from "components/Router";
import { authService } from "fBase";
import Auth from "../routes/Auth";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
  return (
    <>
      <AppRouter isLoggedIn={isLoggedIn} />
      <footer>&copy;Hwitter{new Date().getFullYear()}</footer>
    </>
  );
}

export default App;
