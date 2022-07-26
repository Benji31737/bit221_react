/**
 * 컴포넌트
 * 
 */

/**
 * 함수형 컴포넌트
 */

function welcome1(props) {
  return <h1> Hello, {props.name}</h1>
}

/**
 * 클래스형 컴포넌트
 */

class welcome2 () extends React.Component {
  render(){
    return <h1> Hello, {this.name}</h1>
  };
}

<Welcome2 name="철수" />
