import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

export var Routes = React.createClass ({
  render(){
    return (
      <Router>
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
        <Route path="/work" component={Work} />
      </Router>
    )
  }
});
