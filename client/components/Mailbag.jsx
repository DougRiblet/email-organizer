import React from 'react'
import MailRow from './MailRow'

export default class Mailbag extends React.Component {
  constructor (props) {
    super(props)
    this.displayRows = this.displayRows.bind(this)
    this.checkString = this.checkString.bind(this)
  }
  displayRows () {
    let datapool = this.props.emdata
    if (this.props.display === 'Show Checked') {
      datapool = datapool.filter(item => item.organize)
    }
    if (this.props.searchterm) {
      datapool = datapool.filter(item => this.checkString(item, this.props.searchterm))
    }
    return datapool.map((item, index) => (
      <MailRow
        key={'em' + index}
        item={item}
        index={index}
        folders={this.props.folders}
        toggleOrganize={this.props.toggleOrganize}
        changeFolder={this.props.changeFolder}
      />
    ))
  }

  checkString (item, term) {
    return item.domain.includes(term) || item.email.includes(term) || item.sender.includes(term)
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
  ).isRequired,
  folders: React.PropTypes.array.isRequired,
  display: React.PropTypes.string.isRequired,
  searchterm: React.PropTypes.string.isRequired,
  toggleOrganize: React.PropTypes.func.isRequired,
  changeFolder: React.PropTypes.func.isRequired
}
