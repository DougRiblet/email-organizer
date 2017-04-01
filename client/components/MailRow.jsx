import React from 'react'

export default class MailRow extends React.Component {
  constructor () {
    super()
    this.handleOrganizeClick = this.handleOrganizeClick.bind(this)
  }

  handleOrganizeClick () {
    this.props.toggleOrganize(this.props.item)
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
          FOLDER
        </td>
      </tr>
    )
  }
}
