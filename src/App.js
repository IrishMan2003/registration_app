
import React,{useState} from 'react';
import './App.css';

function App() {

  const [UName,setUName]=useState('');
  const [Email,setEmail]=useState('');

  const clickRegister=(e) =>
    {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value))
      {
        alert("You have entered an valid email address!")
        return (true)
      }
        alert("You have entered an invalid email address!")
        return (false)
    }
  const emailhandler=(e)=>{
    setEmail(e.target.value);
  }
  const namehandler=(e)=>{
    setUName(e.target.value);
  }
  return (
    <div className="App">
      <header className="App-Header">
        <div><h1><p>Registration Form</p></h1></div>
      </header>
      <div className="App-Body">
        <div>
          Username:<br></br>
          <input id="Name" type="text" onChange={namehandler} value={UName}></input>
        </div>
        <div>
          Email Id:<br></br>
          <input id="Email-Id" type="email" onChange={emailhandler} value={Email}></input>
          </div>
        <div>
          password:<br></br>
          <input id="Password" type="password"></input>
          </div>
      
        <div className="Register-Button">
          <button onClick={clickRegister} value={Email}>REGISTER</button>
        </div>
      </div>
    </div>
  );
}

export default App;
