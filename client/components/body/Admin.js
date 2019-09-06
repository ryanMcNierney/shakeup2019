import React, { Component } from 'react'
import axios from 'axios'

export default class Admin extends Component {
  constructor() {
    super()
    this.state = {
      value: '',
      updated: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({ value: e.target.value })
  }

  async handleSubmit(e) {
    e.preventDefault()
    // update teams
    try {
      await axios.get(`/api/teams/${this.state.value}`)
      this.setState({ updated: 'success' })
    } catch (err) {
      console.log(err)
      this.setState({ updated: 'fail' })
    }

  }

  render() {
    return (
      <div id="admin-container">
        <form onSubmit={this.handleSubmit}>
          <label>
            Key:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Update Teams" />
        </form>
        <div>
          {
            this.state.updated === 'success'
              ? <div><p>SUCCESS</p></div>
              : null
          }
          {
            this.state.updated === 'fail'
              ? <div><p>FAIL</p></div>
              : null
          }
        </div>
      </div>
    )
  }
}
