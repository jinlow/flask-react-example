import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [profileData, setProfileData] = useState(null)

  function getData() {
    fetch("/profile")
    .then(response => response.json())
    .then(res => {
      setProfileData((
        {
          profile_name: res.name,
          about_me: res.about,
          rand_int: res.number,
        }
      ));
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>To get profile data:</p><button onClick={getData}>Click Here</button>
        {
          profileData && <div>
            <p>Profile name: {profileData.profile_name}</p>
            <p>Profile info: {profileData.about_me}</p>
            <p>Random number: {profileData.rand_int}</p>
          </div>
        }
      </header>
    </div>
  );
}

export default App;
