import React, {Component} from 'react'

class Input extends Component {
  constructor (props) {
    super(props)
    this.state = {
      title: ''
    }
  }
  render () {
    return (
      <div>
        <input value={this.state.title} onChange={this.changeHandle.bind(this)} />
        <button onClick={this.clickHandle.bind(this)}>submit</button>
      </div>
    )
  }
  changeHandle (event) {
    this.setState({
      title: event.target.value
    })
  }
  clickHandle () {
    const title = this.state.title
    // 把title添加到列表
    const addTitle = this.props.addTitle
    addTitle(title)
    //清空输入框
    this.setState({
      title: '' 
    })
  }
}

export default Input