class Hello extends React.Component { // 렌더링 기능을 override해서 구현
  render() {
    return <h1>Hello, {this.props.nickname}</h1>
  }
}
// ex <Hello nickname='우영우' />

ReactDom.render(
  // 컴포넌트 사용
  <Hello nickname='펭수' />,
  document.getElementById('root')

);