import React from 'react'
import { Timeline, Avatar } from 'antd'

const WeeklyTimeline = (props) => {
  const { topSixData, teams, selectedWeek } = props
  return (
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
  )
}

export default WeeklyTimeline
