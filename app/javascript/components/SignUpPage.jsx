import React from 'react'
import PropTypes from 'prop-types'
import SignUpForm from './SignUpForm'

// container components are created by extending a class from the core React.Component
// they update values for showing presentational component, validate user input.
// in this case, they can also perform AJAX requests
class SignUpPage extends React.Component {
  constructor(props) {
    super(props)
    // set initial state component
    this.state = {
      errors: {},
      user: {
        email: '',
        name: '',
        password: ''
      }
    }
    this.processForm = this.processForm.bind(this)
    this.changeUser = this.changeUser.bind(this)
  }

  changeUser(event) {
    const field = event.target.name
    const user = this.state.user
    user[field] = event.target.value

    this.setState({
      user
    })
  }

  processForm(event) {
    event.preventDefault()

    console.log('name:', this.state.user.name)
    console.log('email:', this.state.user.email)
    console.log('password:', this.state.user.password)
  }

  render() {
    return (
      <SignUpForm
        onSubmit={this.processForm}
        onChange={this.changeUser}
        errors={this.state.errors}
        user={this.state.user}
      />
    )
  }
}

export default SignUpPage
