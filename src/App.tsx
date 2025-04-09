import { useState } from 'react';
import './App.css';
import SignIn from './sign-in/SignIn';
import Search from './search/Search';

function App() {

  const [userSignIn, setUserSignIn] = useState(false);

  function handleUserSignIn(signedIn: boolean) {
    setUserSignIn(signedIn);
  }

  return (
    <>
      {(!userSignIn) ? 
        (<SignIn onUserSignIn={handleUserSignIn}></SignIn>) :
        (<Search></Search>)
      }
    </>
  )
}

export default App
