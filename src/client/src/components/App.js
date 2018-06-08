import React, { Component } from 'react';
import axios from 'axios';

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
          <h1>Welcome to my site</h1>
        </header>
        <p>{this.state.response}</p>
      </div>
    );
  }
}

export default App;
