import React from 'react'
import serialize from 'serialize-javascript'
import Toolbar from './Toolbar'
import Mailbag from './Mailbag'
import mockdata from 'json-loader!../data/mock_rp_data.json'

export default class Main extends React.Component {
  constructor () {
    super()
    this.state = {
      emdata: [],
      folders: [],
      display: 'Show All',
      searchterm: ''
    }
    this.toggleOrganize = this.toggleOrganize.bind(this)
    this.changeFolder = this.changeFolder.bind(this)
    this.changeDisplay = this.changeDisplay.bind(this)
    this.changeSearchTerm = this.changeSearchTerm.bind(this)
  }

  componentDidMount () {
    let cleandata = JSON.parse(serialize(mockdata, {isJSON: true}))
    let uniquefolders = Array.from(new Set(cleandata.map(obj => obj.folder)))
    this.setState({emdata: cleandata, folders: uniquefolders})
  }

  toggleOrganize (item) {
    let revisedata = this.state.emdata.map(function (row) {
      if (row.email === item.email) {
        row.organize = !row.organize
      }
      return row
    })
    this.setState({emdata: revisedata})
  }

  changeDisplay (newDisplay) {
    this.setState({display: newDisplay})
  }

  changeSearchTerm (newSearchTerm) {
    this.setState({searchterm: newSearchTerm})
  }

  changeFolder (checkemail, newFolder) {
    let revisedata = this.state.emdata.map(function (row) {
      if (row.email === checkemail) {
        row.folder = newFolder
      }
      return row
    })
    this.setState({emdata: revisedata})
  }

  render () {
    return (
      <main>
        <Toolbar
          display={this.state.display}
          searchterm={this.state.searchterm}
          changeDisplay={(y) => this.changeDisplay(y)}
          changeSearchTerm={(y) => this.changeSearchTerm(y)}
        />
        <Mailbag
          emdata={this.state.emdata}
          folders={this.state.folders}
          display={this.state.display}
          searchterm={this.state.searchterm}
          toggleOrganize={(y) => this.toggleOrganize(y)}
          changeFolder={(y, z) => this.changeFolder(y, z)}
        />
      </main>
    )
  }
}
