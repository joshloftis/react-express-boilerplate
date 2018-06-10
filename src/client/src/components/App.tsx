import * as React from 'react';
import axios from 'axios';

interface State {
  test: string;
}

class App extends React.Component<{}, State> {
  state: State = {
    test: '',
  };

  componentDidMount() {
    this.callApi()
      .then((res: any) => {
        this.setState({
          test: res.data.test,
        });
      })
      .catch((err: object) => console.log(err));
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
        <p>{this.state.test}</p>
        <p>Blah!</p>
      </div>
    );
  }
}

export default App;