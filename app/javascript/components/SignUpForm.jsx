import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../layouts/application.jsx'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { Card, CardText } from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import '../styles/styles.scss'

const SignUpForm = ({
  onSubmit,
  onChange,
  errors,
  user,
}) => (
  <MuiThemeProvider>
    <div>
      <Layout/>
      <Card className="container">
        <form action="/" onSubmit={onSubmit}>
          <h2 className="card-heading">Signup</h2>

          {errors.summary && <p className="error-message">{errors.summary}</p>}

          <div className="field-line">
            <TextField
              floatingLabelText="Name"
              name="name"
              errorText={errors.name}
              onChange={onChange}
              value={user.name}
            />
          </div>

          <div className="field-line">
            <TextField
              floatingLabelText="email"
              name="email"
              errorText={errors.email}
              onChange={onChange}
              value={user.email}
            />
          </div>

          <div className="field-line">
            <TextField
              floatingLabelText="password"
              type="password"
              name="password"
              onChange={onChange}
              errorText={errors.password}
              value={user.password}
            />
          </div>

          <div className="button-line">
            <RaisedButton type="submit" label="Create Account" primary />
          </div>

          <CardText>Already have an account? <Link to={'/login'}>Log in</Link></CardText>
        </form>
      </Card>
    </div>
  </MuiThemeProvider>
)

SignUpForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
}
export default SignUpForm
