import React, { Component } from 'react'
import axios from 'axios'
import { Select, Timeline, Avatar } from 'antd'
const { Option } = Select

export default class TopSixHistory extends Component {
  constructor() {
    super()
    this.state = {
      topSixData: [],
      teams: [],
      through: [],
      selectedWeek: 1
    }
    this.handleChange = this.handleChange.bind(this)
  }

  async componentDidMount() {
    const res = await axios.get('/api/top-six-history')
    const topSixData = res.data[0]
    const teams = res.data[1]
    const throughWeek = topSixData.length / 12
    const through = Array.from(new Array(throughWeek), (x, index) => {
      return index + 1
    })
    this.setState({ topSixData, teams, through })
  }

  handleChange(value) {
    this.setState({ selectedWeek: value })
  }

  render() {
    const { through, selectedWeek, topSixData, teams } = this.state
    return (
      <div id="top-six-history-container">
        <Select defaultValue={selectedWeek} onChange={this.handleChange}>
          {
            through.map(week => {
              return (
                <Option key={week} value={week}>Week {week}</Option>
              )
            })
          }
        </Select>
        <div id="weekly-results">
          <Timeline style={{ marginTop: 20 }}>
            {
              topSixData.map(team => {
                const teamId = parseInt(team.team_id) - 1
                if (team.current_week === selectedWeek) {
                  return (
                    <Timeline.Item
                      key={team.team_id}
                      color={team.top_six ? "green" : "red"}
                    >
                      {team.total} -
                      <Avatar
                        src={teams[teamId]['team_logo']}
                        style={{ margin: "0 10px" }}
                      />
                      {teams[teamId]['name']}
                    </Timeline.Item>
                  )
                }
              })
            }
          </Timeline>
        </div>
      </div>
    )
  }

}

