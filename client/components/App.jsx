import React from 'react'

export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      appTitle: 'Your Email Organized',
      appTagline: 'You can recategorize your senders or move them to your inbox by unchecking the box next to the sender\'s name.'
    }
  }

  render () {
    return (
      <div id="outershell">
        <Header
          appTitle={this.state.appTitle}
          appTagline={this.state.appTagline}
        />
        
      </div>
    )
  }
}
