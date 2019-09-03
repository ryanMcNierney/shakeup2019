import React from 'react'
import { Tabs } from 'antd'
import './tabswitch.css'

const { TabPane } = Tabs

const TabSwitch = () => {
  return (
    <div id="tabs-container">
      <Tabs defaultActiveKey="1" >
        <TabPane tab="Standings" key="1">
          Put Standings here
    </TabPane>
        <TabPane tab="Top-Six" key="2">
          Put Top-Six here
    </TabPane>
      </Tabs>
    </div>
  )
}

export default TabSwitch
