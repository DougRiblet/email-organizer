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
  }

  componentDidMount () {
    let cleandata = JSON.parse(serialize(mockdata, {isJSON: true}))
    this.setState({emdata: cleandata})
  }

  render () {
    return (
      <main>
        <Toolbar />
        <Mailbag emdata={this.state.emdata} />
      </main>
    )
  }
}
