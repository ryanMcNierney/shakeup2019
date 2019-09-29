import React, { Component } from 'react'
import axios from 'axios'
import { Card, Avatar, Tag, Spin, Button } from 'antd'

export default class TopSix extends Component {
  constructor() {
    super()
    this.state = {
      topSix: [],
      loading: false
    }
    this.fetchData = this.fetchData.bind(this)
    this.updateData = this.updateData.bind(this)
  }
  async fetchData() {
    const res = await axios.get('/api/top-six')
    const topSix = res.data
    return topSix
  }

  async componentDidMount() {
    this.setState({ loading: true })
    const topSix = await this.fetchData()
    this.setState({ topSix, loading: false })
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (JSON.stringify(this.state.topSix) !== JSON.stringify(nextState.topSix)) {
      return true
    }
    return false
  }

  async updateData() {
    console.log('updating..')
    this.setState({ loading: true })
    const topSix = await this.fetchData()
    this.setState({ topSix, loading: false })
  }


  render() {
    const { topSix, loading } = this.state

    return (
      <div id='top-six-container'
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          maxWidth: 450
        }}>
        <Button
          type="primary"
          loading={loading}
          onClick={this.updateData}
        >
          Refresh Data
          </Button>
        {
          loading
            ? <Spin size="large" />
            : topSix.map(team => {
              const { team_id, rank, name, logo, points, projected_points } = team
              const title = rank + ' - ' + name
              const inTopSix = rank <= 6 ? '1px solid #00ff00' : '1px solid #ff0000'
              return (
                <Card
                  key={'card' + '-' + team_id}
                  size="small"
                  title={title}
                  bordered='true'
                  extra={<Avatar src={logo} style={{ marginRight: '10px', flexShrink: '0' }} />}
                  style={{ marginTop: '10px', border: inTopSix }}
                >
                  <p>Points           - <Tag color="green">{points}</Tag></p>
                  {
                    points > 0
                      ? null
                      : <p>Projected Points - <Tag color="blue">{projected_points}</Tag></p>
                  }
                </Card>
              )
            })
        }
      </div>
    )
  }
}
