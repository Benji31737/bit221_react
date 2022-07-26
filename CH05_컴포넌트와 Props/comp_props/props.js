/**
 * 컴포넌트 입력(Props)
 * : '속성'
 * 읽기 전용
 * 
 * 자바스크립트 객체 == {}
 */

function App (props) {
  return (
    <Profile name='Tom' intro='안녕' hit={100} />
  );
}

function Profile(props) {
  return (
  <>
    <h2>{props.name}의 블로그 입니다.</h2>
    <p>{props.intro}</p>
    <hr/>
    <span>{props.hit}</span>
  </>
  );
}
// =====> 같은 함수
function Profile2({name, intro, hit}) {
  return (
  <>
    <h2>{name}의 블로그 입니다.</h2>
    <p>{intro}</p>
    <hr/>
    <span>{hit}</span>
  </>
  );
}