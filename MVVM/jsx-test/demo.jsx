/*用babel解析这个文件 可以看到jsx是如何转化为js的:
使用babel-cli命令行：
babel --plugins transform-react-jsx demo.jsx

render() {
    return React.createElement(
      'div',
      null,
      React.createElement('input', { value: this.state.title, onChange: this.changeHandle.bind(this) }),
      React.createElement(
        'button',
        { onClick: this.clickHandle.bind(this) },
        'submit'
      )
    );
}
*/
class Input extends Component {
    render () {
      return (
        <div>
          <input value={this.state.title} onChange={this.changeHandle.bind(this)} />
          <button onClick={this.clickHandle.bind(this)}>submit</button>
        </div>
      )
    }
}