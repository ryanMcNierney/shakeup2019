import React from 'react'
import { Typography, Avatar, Timeline } from 'antd'
const { Text } = Typography

const TeamTimeline = (props) => {
  const { teams, selectedTeam, topSixData } = props
  const teamId = parseInt(selectedTeam) - 1
  return (
    <div id="team-results">
      <div id="team" style={{ marginTop: 20 }}>
        <Text>
          <Avatar
            src={teams[teamId]['team_logo']}
            style={{ margin: "0 10px" }}
          />
          - {teams[teamId]['name']}
        </Text>
      </div>
      <Timeline style={{ marginTop: 20 }}>
        {
          topSixData.map(team => {
            if (team.team_id === selectedTeam) {
              return (
                <Timeline.Item
                  key={team.team_id}
                  color={team.top_six ? "green" : "red"}
                >
                  Week {team.current_week} - {team.total}
                </Timeline.Item>
              )
            }
          })
        }
      </Timeline>
    </div>
  )
}

export default TeamTimeline
