import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';


class ProfileLoader extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      profile_name: null,
      about_me: null,
      rand_int: null,
    };
  }

  getData() {
    fetch("/profile")
    .then(response => response.json())
    .then(res => {
      this.setState((
        {
          profile_name: res.name,
          about_me: res.about,
          rand_int: res.number,
        }
      ));
    });
  }

  render() {
    return (
      <div>
      <p>To get profile data:</p><Button onClick={() => this.getData()} variant="primary">Click Here!</Button>
        {
          this.state.profile_name && <div>
            <p>Profile name: {this.state.profile_name}</p>
            <p>Profile info: {this.state.about_me}</p>
            <p>Random number: {this.state.rand_int}</p>
          </div>
        }
        </div>
    )
  }

}

function App() {
  // const [profileData, setProfileData] = useState(null)

  // function getData() {
  //   fetch("/profile")
  //   .then(response => response.json())
  //   .then(res => {
  //     setProfileData((
  //       {
  //         profile_name: res.name,
  //         about_me: res.about,
  //         rand_int: res.number,
  //       }
  //     ));
  //   });
  // }

  return (
    <div className="App">
      <header className="App-header">
        <Form>
          <Form.Label>Enter Name</Form.Label>
          <Form.Control type="text" placeholder="Enter a name" />
          <Form.Text classname="text-muted">
            Enter the name of a user to select.
          </Form.Text>
        </Form>
        {/* <p>To get profile data:</p><Button onClick={getData} variant="primary">Click Here</Button>
        {
          profileData && <div>
            <p>Profile name: {profileData.profile_name}</p>
            <p>Profile info: {profileData.about_me}</p>
            <p>Random number: {profileData.rand_int}</p>
          </div>
        } */}
       <ProfileLoader/>
      </header>
    </div>
  );
}

export default App;
