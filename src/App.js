import React from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';


class ProfileLoader extends React.Component {
  render() {
    return (
      <div>
        <p>To get profile data:</p><Button onClick={this.props.dataLoader} variant="primary">{this.props.children}</Button>
        {
          this.props.aboutMe && <div>
            <p>Profile name: {this.props.profileName}</p>
            <p>Profile info: {this.props.aboutMe}</p>
            <p>Random number: {this.props.randInt}</p>
          </div>
        }
      </div>
    )
  }
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profileName: null,
      aboutMe: null,
      randInt: null,
      user: null,
    };
  }

  getData() {
    fetch("/profile")
      .then(response => response.json())
      .then(res => {
        this.setState((
          {
            profileName: res.name,
            aboutMe: res.about,
            randInt: res.number,
          }
        ));
      });
  }

  async sendData() {
    return fetch("/add", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({user: this.state.user})
    })
      .then(response => response.json())
      .catch(error => console.log(error))
  }

  updateUser(e) {
    this.setState((
      {
        user: e.target.value
      }
    ));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Form onSubmit={() => this.sendData()}>
            <Form.Label>Enter Name</Form.Label>
            <Form.Control type="text" placeholder="Enter a name" onChange={(e) => this.updateUser(e)}/>
            <Form.Text classname="text-muted">
              Enter the name of a user to select.
            </Form.Text>
            <div><Button type="submit">Add User</Button></div>
          </Form>
          <ProfileLoader profileName={this.state.profileName} aboutMe={this.state.aboutMe} randInt={this.state.randInt} dataLoader={(e) => this.getData(e)}>Press Here</ProfileLoader>
        </header>
      </div>
    );
  }
}
