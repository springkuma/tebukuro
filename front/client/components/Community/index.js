import React, { Component } from 'react'

export default class Community extends Component {
  constructor(props) {
    super(props)
    this.state = { name: "", description: "" }
  }

  handleSubmit(e) {
    const name = this.state.name
    const description = this.state.description
  }

  handleNameChange(e) {
    this.setState({name: e.target.value})
  }

  handleDescriptionChange(e) {
    this.setState({description: e.target.value})
  }

  render() {
    return (
      <div>
        <form onSubmit={ this.handleSubmit.bind(this) }>
          名称:
          <input
            type="text"
            value={ this.state.name }
            onChange={ this.handleNameChange.bind(this) }
          />
          <br />
          説明:
          <input
            type="text"
            value={ this.state.description }
            onChange={ this.handleDescriptionChange.bind(this) }
          />
          <br />
          <button>登録</button>
        </form>
      </div>
    )
  }
}
