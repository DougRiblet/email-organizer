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
    this.props.changeFolder(this.props.item.email, event.target.value)
  }

  generateFolders () {
    let k = 'em' + this.props.index + 'fo'
    return this.props.folders.sort().map(function (f, i) {
      return <option value={f} key={k + i}>{f}</option>
    })
  }

  render () {
    const folderColors = {
      'Business': {borderRight: '10px solid LightPink'},
      'Education': {borderRight: '10px solid BurlyWood'},
      'Entertainment': {borderRight: '10px solid Orchid'},
      'Finance': {borderRight: '10px solid Violet'},
      'Groups': {borderRight: '10px solid LightSkyBlue'},
      'Home': {borderRight: '10px solid Salmon'},
      'Jobs': {borderRight: '10px solid IndianRed'},
      'News': {borderRight: '10px solid RosyBrown'},
      'Real Estate': {borderRight: '10px solid LightGreen'},
      'Shopping': {borderRight: '10px solid Khaki'},
      'Social Networking': {borderRight: '10px solid MediumSpringGreen'},
      'Travel': {borderRight: '10px solid LightSeaGreen'}
    }
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
        <td className='info' style={folderColors[item.folder]}>
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
  index: React.PropTypes.number.isRequired,
  folders: React.PropTypes.array.isRequired,
  toggleOrganize: React.PropTypes.func.isRequired,
  changeFolder: React.PropTypes.func.isRequired
}
