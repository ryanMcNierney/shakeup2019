import React, { Component } from 'react'
import axios from 'axios'
import { Select } from 'antd'
const { Option } = Select
import WeeklyTimeline from './WeeklyTimeline'
import TeamTimeline from './TeamTimeline'

export default class TopSixHistory extends Component {
  constructor() {
    super()
    this.state = {
      topSixData: [],
      teams: [],
      through: [],
      selectedWeek: 1,
      selectedTeam: null
    }
    this.handleWeekChange = this.handleWeekChange.bind(this)
    this.handleTeamChange = this.handleTeamChange.bind(this)
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

  handleWeekChange(value) {
    this.setState({ selectedWeek: value })
  }

  async handleTeamChange(value) {
    await this.setState({ selectedTeam: null })
    await this.setState({ selectedTeam: value })
  }

  render() {
    const { through, selectedWeek, topSixData, teams, selectedTeam } = this.state
    return (
      <div id="top-six-history-container">
        <Select defaultValue={selectedWeek} onChange={this.handleWeekChange}>
          {
            through.map(week => {
              return (
                <Option key={week} value={week}>Week {week}</Option>
              )
            })
          }
        </Select>
        <Select
          defaultValue='Team'
          onChange={this.handleTeamChange}
          style={{ width: 180, marginLeft: 20 }}
          allowClear={true}
        >
          {
            teams.map(team => {
              return (
                <Option key={team.id} value={team.team_id}>{team.name}</Option>
              )
            })
          }
        </Select>
        {
          selectedTeam
            ? <TeamTimeline
              topSixData={topSixData}
              teams={teams}
              selectedTeam={selectedTeam} />
            : <WeeklyTimeline
              topSixData={topSixData}
              teams={teams}
              selectedWeek={selectedWeek} />
        }
      </div>
    )
  }

}

