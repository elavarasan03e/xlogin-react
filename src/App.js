import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [username,setUserName] = useState('');
  const [password,setPassword] = useState('');

  const [isUser,setIsUser]=useState(false);
  const [message,setMessage]=useState('');

  const checkUser=(e)=>{
    e.preventDefault();
    if(username==='user' && password==='password'){
      setIsUser(true);
      setMessage('Welcome, user!');
    }else{
      setMessage('Invalid username or password')
    }
  }
  const handleUser = (e)=>{
    setUserName(e.target.value);
  }
  const handlePassword = (e)=>{
    setPassword(e.target.value);
  }
  return (
    <div className="App">
      <h1>Login page</h1>
      {isUser ? <p>{message}</p>:
      <><p>{message}</p><form onSubmit={checkUser}>
          <div>
            <label htmlFor='username'>UserName: </label>
            <input id='username' type='text' placeholder='username' value={username} onChange={handleUser} required />
          </div>
          <div>
            <label htmlFor='password'>Password: </label>
            <input id='password' type='password' placeholder='password' value={password} onChange={handlePassword} required />
          </div>
          <button type='submit'>Submit</button>
        </form></>
      }
    </div>
  );
}

export default App;
