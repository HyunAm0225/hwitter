import React, { useState } from 'react';
import AppRouter from 'components/Router';
import  { authService } from 'fBase';
import Auth from '../routes/Auth';


function App() {
  console.log(authService.currentUser);
  // const auth = fbase.auth();
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return(
    <>
    <AppRouter isLoggedIn={isLoggedIn}/>;
    <Auth/>
    <footer>&copy;Hwitter{new Date().getFullYear}</footer>
    </>
  ) 
}

export default App;
