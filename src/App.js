
import './App.css';
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { app } from './Firebase';
import { useState } from 'react';
import { Home } from './Home';
import { Routes,Route } from 'react-router-dom';


function App() {
  const auth = getAuth(app); //exported form the fire base
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signUp =()=>{
   
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        alert("successfully created");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        //const errorMessage = error.message;
        alert(errorCode);
        // ..
      });
  
  }

  const signIn=()=>{
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    alert("succcessfully login")
   
  })
  .catch((error) => {
    const errorCode = error.code;
    //const errorMessage = error.message;
    alert(errorCode);
  });
  }
  
  const inputStyles = {
    padding: '10px',
    width: '250px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    marginBottom: '10px',
  };

  const buttonStyles = {
    padding: '10px 20px',
    backgroundColor: '#4caf50',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  const mainStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  };

  const appStyles = {
    backgroundColor: '#f5f5f5',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
    padding: '20px',
    textAlign: 'center',
  };

  return (
    <center>
      <div style={mainStyles}>
        <div style={appStyles}>
          <input
            type="email"
            placeholder="Your Email ID"
            style={inputStyles}
            onChange={(e) => setEmail(e.target.value)
            }
          /><br /><br />
          <input
            type="password"
            placeholder="Enter password"
            style={inputStyles}
            onChange={(e) => setPassword(e.target.value)}
          /><br /><br />
          <button style={buttonStyles} onClick={signUp}>Create Account</button><br />
          <button style={{buttonStyles,marginTop:'10px'}}  onClick={signIn}>Sign In</button>
        </div>
        <Routes>
          <Route exact path='/' element={<signIn/>}/>
        </Routes>
      </div>
    </center>
  );
};

export default App;