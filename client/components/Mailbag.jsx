import React from 'react'

export default class Mailbag extends React.Component {
  render () {
    return (
      <div id='mailbag'>
        <p>MAILBAG</p>
      </div>
    )
  }
}

Mailbag.propTypes = {
  emdata: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      domain: React.PropTypes.string.isRequired,
      email: React.PropTypes.string.isRequired,
      folder: React.PropTypes.string.isRequired,
      organize: React.PropTypes.bool.isRequired,
      sender: React.PropTypes.string.isRequired
    }).isRequired
  ).isRequired
}
