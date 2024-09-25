import { Component } from 'react';

class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      age: 0,
    };

    this.handleChange2 = this.handleChange2.bind(this);
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleChange2() {
    console.log('Username:', this.state.username);
    console;
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { username, password } = this.state;
    // Handle login logic here
    console.log('Logging in with', username, password);
  };

  componentDidMount() {
    console.log('Componente montado');
  }

  componentDidUpdate() {
    console.log('Componente actualizado');
  }

  componentWillUnmount() {
    console.log('Componente desmontado');
  }

  render() {
    return (
      <div>
        <h2>Login</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Username:</label>
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginComponent;
