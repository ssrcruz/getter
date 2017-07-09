import React from 'react'
import LoginForm from './LoginForm'


class LoginPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      errors: {},
      user: {
        email: 'email',
        password: 'password'
      }
    }

    this.processForm = this.processForm.bind(this)
    this.changeUser = this.changeUser.bind(this)
  }

  // when user submits the form
  processForm(event) {
    event.preventDefault()
    // output current state values into the browser
    console.log('email', this.state.user.email)
    console.log('password', this.state.user.password)
  }

  // this handler will change the component state by taking the values of the user input
  changeUser(event) {
    const field = event.target.name
    const user = this.state.user
    user[field] = event.target.value

    this.setState({
      user
    })
  }


  // renders the component
  render() {
    return (
      <LoginForm
        onSubmit={this.processForm}
        onChange={this.changeUser}
        errors={this.state.errors}
        user={this.state.user}
      />
    )
  }

}

export default LoginPage
