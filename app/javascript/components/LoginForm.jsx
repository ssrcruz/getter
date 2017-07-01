import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../layouts/application.jsx'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { Card, CardText } from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import '../styles/styles.scss'



const LoginForm = ({
  onSubmit,
  onChange,
  errors,
  user
}) => (
  <MuiThemeProvider>
    <div>
      <Layout/>
      <Card className="container">
        <form action="/" onSubmit={onSubmit}>
          <h2 className="card-heading">Login</h2>

          {errors.summary && <p className="error-message">{errors.summary}</p>}

          <div className="field-line">
            <TextField
              floatingLabelText="Email"
              name="email"
              errorText={errors.email}
              onChange={onChange}
              value={user.email}
            />
          </div>

          <div className="field-line">
            <TextField
              floatingLabelText="Password"
              type="password"
              name="password"
              onChange={onChange}
              errorText={errors.password}
              value={user.password}
            />
          </div>

          <div className="button-line">
            <RaisedButton type="submit" label="Log in" primary />
          </div>

          <CardText>Don't have an account?<a href="/login">Create one</a></CardText>
        </form>
      </Card>
    </div>
  </MuiThemeProvider>
)

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
}

export default LoginForm
