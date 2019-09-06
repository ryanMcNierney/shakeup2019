import React from 'react'
import { Layout } from 'antd'
import { Route, Switch } from 'react-router-dom'
import Admin from './components/body/Admin'
import Navbar from './components/navbar/Navbar'
import TabSwitch from './components/body/TabSwitch'

const App = () => {
  return (
    <div>
      <Layout>
        <Navbar />
        <Switch>
          <Route path="/admin" component={Admin} />
          <Route path="/" component={TabSwitch} />
        </Switch>
      </Layout>
    </div>
  )
}

export default App
