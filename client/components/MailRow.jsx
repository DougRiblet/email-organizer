import React from 'react'

export default class MailRow extends React.Component {
  render () {
    let item = this.props.item
    return (
      <tr>
        <td>{item.organize ? 'check' : 'leave'}</td>
        <td className='info'>{item.sender}</td>
        <td className='info'>{item.domain}</td>
        <td className='info'>{item.email}</td>
        <td className='info'>{item.folder}</td>
      </tr>
    )
  }
}
