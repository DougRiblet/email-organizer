import React from 'react'
import serialize from 'serialize-javascript'
import Toolbar from './Toolbar'
import Mailbag from './Mailbag'
import mockdata from 'json-loader!../data/mock_rp_data.json'

export default class Main extends React.Component {
  constructor () {
    super()
    this.state = {
      emdata: []
    }
    this.toggleOrganize = this.toggleOrganize.bind(this)
  }

  componentDidMount () {
    let cleandata = JSON.parse(serialize(mockdata, {isJSON: true}))
    this.setState({emdata: cleandata})
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

  render () {
    return (
      <main>
        <Toolbar />
        <Mailbag
          emdata={this.state.emdata}
          toggleOrganize={(y) => this.toggleOrganize(y)}
        />
      </main>
    )
  }
}
