import React from 'react'

export default class MailRow extends React.Component {
  constructor () {
    super()
    this.handleOrganizeClick = this.handleOrganizeClick.bind(this)
    this.handleSelectChange = this.handleSelectChange.bind(this)
  }

  handleOrganizeClick () {
    this.props.toggleOrganize(this.props.item)
  }

  handleSelectChange (event) {
    console.log('####etv: ', event.target.value)
    this.props.changeFolder(this.props.item.email, event.target.value)
  }

  generateFolders () {
    let k = 'em' + this.props.index + 'fo'
    return this.props.folders.sort().map(function (f, i) {
      return <option value={f} key={k + i}>{f}</option>
    })
  }

  render () {
    let item = this.props.item
    let qorg = item.organize ? 'fa fa-check-square-o' : 'fa fa-square-o'
    return (
      <tr>
        <td>
          <span className='qorg' onClick={this.handleOrganizeClick}>
            <i className={qorg} />
          </span>
        </td>
        <td className='info'>{item.sender}</td>
        <td className='info'>{item.domain}</td>
        <td className='info'>{item.email}</td>
        <td className='info folder'>
          <select value={item.folder} onChange={this.handleSelectChange}>
            {this.generateFolders()}
          </select>
        </td>
      </tr>
    )
  }
}

MailRow.propTypes = {
  item: React.PropTypes.shape({
    domain: React.PropTypes.string.isRequired,
    email: React.PropTypes.string.isRequired,
    folder: React.PropTypes.string.isRequired,
    organize: React.PropTypes.bool.isRequired,
    sender: React.PropTypes.string.isRequired
  }).isRequired,
  folders: React.PropTypes.array.isRequired,
  toggleOrganize: React.PropTypes.func.isRequired,
  changeFolder: React.PropTypes.func.isRequired
}
