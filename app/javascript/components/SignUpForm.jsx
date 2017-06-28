import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../layouts/application.jsx'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { Card, CardText } from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'


const SignUpForm = ({
  onSubmit,
  onChange,
  errors,
  user,
}) => (
  <MuiThemeProvider>
    <Card className="container">
      <Layout/>
      <h1>Signup</h1>
    </Card>
  </MuiThemeProvider>
)

export default SignUpForm
