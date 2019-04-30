import React, {Component} from 'react'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import Button from '@material-ui/core/Button';

// Contain the children routes
class Template extends Component {

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <h1>PewBangPow</h1>
          <Button 
            variant="contained" 
            color="primary" 
            onClick={()=>{console.log('I work!')}}
            >
            Primary
          </Button>
          <main>
            {this.props.children}
          </main>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default Template