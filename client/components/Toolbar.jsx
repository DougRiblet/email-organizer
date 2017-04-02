import React from 'react'

export default class Toolbar extends React.Component {
  constructor (props) {
    super(props)
    this.handleSelectChange = this.handleSelectChange.bind(this)
    this.handleSearchChange = this.handleSearchChange.bind(this)
  }

  handleSelectChange (event) {
    this.props.changeDisplay(event.target.value)
  }

  handleSearchChange (event) {
    this.props.changeSearchTerm(event.target.value)
  }

  render () {
    return (
      <div id='toolbar'>
        <div id='selectDisplay'>
          <select value={this.props.display} onChange={this.handleSelectChange}>
            <option value='Show All'>Show All</option>
            <option value='Show Checked'>Show Checked</option>
          </select>
        </div>
        <div id='searchBox'>
          <input
            type='text'
            value={this.props.searchterm}
            onChange={this.handleSearchChange}
            placeholder='Search for a sender ...'
          />
        </div>
      </div>
    )
  }
}

Toolbar.propTypes = {
  display: React.PropTypes.string.isRequired,
  searchterm: React.PropTypes.string.isRequired,
  changeDisplay: React.PropTypes.func.isRequired,
  changeSearchTerm: React.PropTypes.func.isRequired
}
