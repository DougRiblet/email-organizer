import React from 'react'

export default class Mailbag extends React.Component {
  constructor () {
    super()
  }

  render () {
    return (
      <div id='mailbag'>
        <table id='mailtable'>
          <tr>
            <th>Organize</th>
            <th>Sender</th>
            <th>Domain</th>
            <th>Email</th>
            <th>Folder</th>
          </tr>
          <tr>
            <td>check</td>
            <td className='info'>Someone</td>
            <td className='info'>some.com</td>
            <td className='info'>someone@some.com</td>
            <td className='info'>Shopping</td>
          </tr>

        </table>
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
