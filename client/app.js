import React from 'react'
import { Layout } from 'antd'
import Navbar from './components/navbar/Navbar'
import TabSwitch from './components/body/TabSwitch'

const App = () => {
  return (
    <div>
      <Layout>
        <Navbar />
        <TabSwitch />
      </Layout>
    </div>
  )
}

export default App
