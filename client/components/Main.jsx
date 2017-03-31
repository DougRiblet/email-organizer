import React from 'react'
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
    console.log('mockdata: ', mockdata)
    this.setState({emdata: mockdata})
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
