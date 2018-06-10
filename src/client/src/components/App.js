import React, { Component } from 'react';
import axios from 'axios';
import Title from '../styles/Title';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      response: '',
    };
    this.callApi = this.callApi.bind(this);
  }

  componentDidMount() {
    this.callApi()
      .then((res) => {
        this.setState({ response: res.data.test });
      })
      .catch(err => console.log(err));
  }

  callApi() {
    return axios.get('api/test');
  }

  render() {
    return (
      <div>
        <header>
          <Title>Welcome to my site</Title>
        </header>
        <p>{this.state.response}</p>
      </div>
    );
  }
}

export default App;
