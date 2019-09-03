import React from 'react'
import { Layout, Typography } from 'antd'
import nflLogo from '../../../public/assets/images/football.png'
import './navbar.css'
const { Header } = Layout
const { Title } = Typography


const Navbar = () => {
  return (
    <Header id="header-container" style={{ background: '#fff' }}>
      <div id="logo-container">
        <img id="logo" src={nflLogo} alt="nflLogo" />
      </div>
      <div id="title-container">
        <Title level={3} id="nav-title">The Shakeup</Title>
      </div>
    </Header>
  )
}

export default Navbar
