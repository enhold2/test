import React, { Component } from 'react';

class App extends Component {
  state = {
    response: '',
  };
  
  //페이지 로드시 실행 GET TEST
  componentDidMount() {
    this.callApi()
    fetch('/api/hello')
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }
  
  callApi = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/hello');
      const body = await response.json();
      alert(body.message)
      if (response.status !== 200) throw Error(body.message);
      return body;
    } catch (error) {
      alert(error)
    }
  };
  

render() {
    return (
        <div></div>
    );
  }
}

export default App;