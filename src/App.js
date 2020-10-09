import React, { Component } from 'react';
import Contacts from './components/contacts';
import axios from 'axios';
import Employees from './components/employees';

export class App extends Component {
  state = {
    employees: [],
  }
  componentDidMount() {
    axios.get('http://localhost:8851/springfox/api/employees')
      .then(res => {
        const employees = res.data;
        this.setState({ employees });
      })
  }

  render() {
    return (
      <div>
        <Employees employees={this.state.employees} />
      </div>
    )
  }
}

export default class FormUser extends React.Component {
  state = {
    name: '',
    job: '',
    salary: '',
    hiredate: '',
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleSubmit = event => {
    event.preventDefault();
    const { name, job, hiredate, salary } = this.state;
    axios.post('http://localhost:8851/springfox/api/employees', ({ name, job, hiredate, salary }))
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>User name:  <input type="text" name="name" onChange={this.handleChange} /></label><br />
        <label>job:  <input type="text" name="job" onChange={this.handleChange} /></label><br />
        <label>hiredate:  <input type="date" name="hiredate" onChange={this.handleChange} /></label><br />
        <label>salary:  <input type="text" name="salary" onChange={this.handleChange} /></label><br />
        <button type="submit">Add</button>
      </form>
    )
  }
}