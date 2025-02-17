import {useState, useRef} from 'react';

function App() { // - 부모 컴포넌트

  /** form에 등록된 값 (실질적인 데이터) */
  const [formData, setFormData] = useState({
    username: '', password: ''
  })

  /** useRef, 유효성 검사 (화면에는 안 띄움) */
  const validationsRef = useRef({username: false, password: false});

  /** 값 insert */
  const handlerChange = e => {
    console.log(e.target);
    const {name, value} = e.target;
    // 이전 값을 모르니 (...prev)로 이전 값을 붙여놓는다. 키값을 배열처럼 한다.
    setFormData(prev => ({...prev, [name]: value})); // name에 해당하는 값(username, password)의 값(입력값)을 배열에 대입한다.
    validateField(name, value); // 값 유효성 검사
  }

  const validateField = (name, value) => {
    console.log('val: ', name, value);
    let isValid = false;
    if (name === 'username'){ // name에 해당하는 값이 username일 때 유효성 검사
      isValid = value.trim().length > 6; // 결과값의 길이가 6보다 크면 true가 온다. (공백제거)
    } else if (name === 'password'){ // name에 해당하는 값이 password일 때 유효성 검사
      isValid = value.trim().length > 6; // 결과값의 길이가 6보다 크면 true가 온다. (공백제거)
    }

    validationsRef.current[name] = isValid; // 모두가 ok가 되면 둘 다 true가 온다.
  }

  /** 회원가입 완료 */
  const handlerSubmit = e => {
    e.preventDefault(); // 새로고침 기능을 없애버린다. (내 기능 먹통이 되는 것을 방지한다.)
    if(Object.values(validationsRef.current).every(Boolean)){ // 오브젝트 전체에서 어떤 값(validationsRef.current)의 모든 특정 타입(Boolean)을 본다. = 전부 True면 True
      console.log('Form Data', formData)
    } else {
      console.log('Validation error');
    }
  }

  return (
    <div className="App">
      <label>Username:</label>
      <input type="text" name="username" value={formData.username} onChange={handlerChange} />

      <label>password:</label>
      <input type="password" name="password" value={formData.password} onChange={handlerChange} />
      <br />

      <input type="button" value="회원가입" onClick={handlerSubmit} />

      <출력공간 submitData={formData} />
    </div>
  );
}

function 출력공간(props){ // 받는 것은 무조건 props(배열 형태로 여러 가지를 줄 수 있다.) - 자식 컴포넌트
  return(
    <div style={{
      width: '100%',
      height: '300px',
      border: '1px solid red'
    }}>
      <h1>출력공간</h1>
      <span>{props.submitData.username}</span><br />
      <span>{props.submitData.password}</span><br />
    </div>
  )
}


export default App;