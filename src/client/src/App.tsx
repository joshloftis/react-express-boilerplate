import * as React from 'react';

class App extends React.Component<{}, { res: string }> {
  constructor(props: any) {
    super(props);
    this.state = {
      res: '',
    };
  }

  componentDidMount() {
    this.callApi()
      .then(res => {
        this.setState({ res: res.data });
      })
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('http://localhost:4000/api/test');
    console.log(response);
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  public render() {
    if (!this.state.res) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <h1>Hello!</h1>
        <p>Welcome to my site</p>
      </div>
    );
  }
}

export default App;
