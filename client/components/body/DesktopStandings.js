import React, { Component } from 'react'
import axios from 'axios'
import { Table, Avatar } from 'antd'

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
    const { standings, loading } = this.state
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
        width: 100,
        dataIndex: 'record',
        key: 'record'
      },
      {
        title: 'Pts For',
        width: 100,
        dataIndex: 'pts_for',
        key: 'id' + '-' + 'pts_for'
      },
      {
        title: 'Pts Agnst',
        width: 100,
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

    return (
      <Table
        rowKey={record => record.id}
        className="desktop-table"
        columns={columns}
        dataSource={standings}
        pagination={false}
      />
    )
  }

}
