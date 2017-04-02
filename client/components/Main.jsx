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
      folders: []
    }
    this.toggleOrganize = this.toggleOrganize.bind(this)
    this.changeFolder = this.changeFolder.bind(this)
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
        <Toolbar />
        <Mailbag
          emdata={this.state.emdata}
          folders={this.state.folders}
          toggleOrganize={(y) => this.toggleOrganize(y)}
          changeFolder={(y, z) => this.changeFolder(y, z)}
        />
      </main>
    )
  }
}
