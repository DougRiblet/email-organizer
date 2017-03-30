import React from 'react'

export default class Header extends React.Component {
  render () {
    return (
      <header>
        <h2>{this.props.appTitle}</h2>
        <h4>{this.props.appTagline}</h4>
      </header>
    )
  }
}