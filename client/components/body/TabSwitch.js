import React from 'react'
import { Tabs } from 'antd'
import './tabswitch.css'
import MobileStandings from './MobileStandings'
import DesktopStandings from './DesktopStandings'
import TopSix from './TopSix'
import { useMediaQuery } from 'react-responsive'

const { TabPane } = Tabs

const TabSwitch = () => {
  const isDesktop = useMediaQuery({
    query: '(min-device-width: 1224px)'
  })
  return (
    <div id="tabs-container">
      <Tabs defaultActiveKey="1" >
        <TabPane tab="Standings" key="1">
          {
            isDesktop
              ? <DesktopStandings />
              : <MobileStandings />
          }
        </TabPane>
        <TabPane tab="Top-Six" key="2">
          <TopSix />
        </TabPane>
      </Tabs>
    </div>
  )
}

export default TabSwitch
