import React, { Component } from 'react'
import axios from 'axios'
import { Table, Avatar, Tag } from 'antd'

export default class DesktopStandings extends Component {
  constructor() {
    super()
    this.state = {
      standings: [],
      loading: false
    }
  }

  async componentDidMount() {
    this.setState({ loading: true })
    const res = await axios.get('/api/standings')
    const standings = res.data
    let rank = 1
    for (let i = 0; i < standings.length; i++) {
      standings[i]['rank'] = rank
      rank++
    }
    this.setState({ standings, loading: false })
  }

  render() {
    const { standings } = this.state
    const columns = [
      {
        title: 'Rank',
        dataIndex: 'rank',
        key: 'rank'
      },
      {
        title: 'Team',
        key: 'team.name',
        render: (text, record) => (
          <div id="table-team" style={{ display: 'flex' }}>
            <Avatar src={record.team.team_logo} style={{ marginRight: '10px', flexShrink: '0' }} />
            <p>{record.team.name}</p>
          </div>
        ),
      },
      {
        title: 'Record',
        dataIndex: 'record',
        key: 'record'
      },
      {
        title: 'Pts For',
        dataIndex: 'pts_for',
        key: 'id' + '-' + 'pts_for'
      },
      {
        title: 'Pts Agnst',
        dataIndex: 'pts_against',
        key: 'pts_against'
      },
      {
        title: 'T6 Wins',
        dataIndex: 'top_six_win',
        key: 'id' + '-' + 'top_six_win'
      },
      {
        title: 'T6 Loss',
        dataIndex: 'top_six_loss',
        key: 'id' + '-' + 'top_six_loss'
      }
    ]

    let lastUpdate = ''
    if (standings.length > 0) {
      const timestamp = standings[0]['updatedAt']
      const d = new Date(timestamp)
      const weekdays = new Array(
        "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
      )
      const day = weekdays[d.getDay()]
      const month = d.getMonth() + 1
      const date = d.getDate()
      lastUpdate = day + ' ' + month + '/' + date
    }

    return (
      <div id="standings-container">
        <p>Last update: <Tag color="gold">{lastUpdate}</Tag></p>
        <Table
          rowKey={record => record.id}
          className="desktop-table"
          columns={columns}
          dataSource={standings}
          pagination={false}
        />
      </div>

    )
  }

}
