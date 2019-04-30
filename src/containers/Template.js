import React, {Component} from 'react'

// Contain the children routes
class Template extends Component {

  render() {
    return (
      <div>
        <h1>PewBangPow</h1>
        <main>
          {this.props.children}
        </main>
      </div>
     
    )
  }
}

export default Template