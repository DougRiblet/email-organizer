import React from 'react'
import MailRow from './MailRow'

export default class Mailbag extends React.Component {
  displayRows () {
    return this.props.emdata.map((item, index) => (
      <MailRow
        key={'em' + index}
        item={item}
        index={index}
        toggleOrganize={this.props.toggleOrganize}
      />
    ))
  }

  render () {
    return (
      <div id='mailbag'>
        <table id='mailtable'>
          <thead>
            <tr>
              <th>Organize</th>
              <th>Sender</th>
              <th>Domain</th>
              <th>Email</th>
              <th>Folder</th>
            </tr>
          </thead>
          <tbody>
            { this.displayRows() }
          </tbody>
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
