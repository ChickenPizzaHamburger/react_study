import {useState, useRef} from 'react';

function App() {

  /**
   * joinForm을 검사하는 JavaScript
   */
  const textCheck = /^[a-zA-Z0-9]{4,12}$/; // 아이디, 비밀번호 체크용 정규식
  const emailCheck = /^\w+@\w+\.(\w{2,3})$/; // 이메일 형식 체크용 정규식
  const resNumFirstCheck = /^\d{6}$/; // 주민등록번호 앞자리 체크용 정규식
  const resNumLastCheck = /^\d{7}$/; // 주민등록번호 뒷자리 체크용 정규식

  // 폼 값 가져오기
  const userId = useRef(null);
  const userPwd = useRef(null);
  const userPwdChecked = useRef(null);
  const hiddenPassword = useRef(null);
  const userEmail = useRef(null);
  const userName = useRef(null);
  const resNumFirst = useRef(null);
  const resNumLast = useRef(null);
  const birthday = useRef(null);
  const hobby = useRef(null);
  const selfIntro = useRef(null);
  const hiddenGender = useRef(null);
  const hiddenNationality = useRef(null);

  const [submit, setSubmit] = useState(false);


   /** 취미 Chackbox (초기값 []로 배열이 들어간다고 알려준다.) */
  const [hobbyList, setHobbyList] = useState([]);
  /** 취미 Chackbox Handler, Filter 기능 */
  const handlerHobbyUpdate = e => {
    console.log(e.target.value);
    if (hobbyList.includes(e.target.value)){ // includes로 값이 포함되어 있냐 없냐를 체크한다. (있으면 True)
      setHobbyList(hobbyList.filter(
        item => item !== e.target.value // item과 값(e.target.value)이 일치하지 않는다면 item을 hobbyList에 다시 넣는다.
      ))
    } else {
      setHobbyList([...hobbyList, e.target.value]); // 배열(hobbyList)에 특정한 값(e.target.value)를 뒤에 넣겠다 선언 (...이 뒤에 있으면 앞에 넣는 형태)
    }
  }

  const identityNumCheck = () => {
    if (resNumFirstCheck.test(resNumFirst.current.value) && resNumLastCheck.test(resNumLast.current.value)) {
      const genderCode = parseInt(resNumLast.current.value.charAt(0));
      let yearPrefix;
      if (genderCode === 1 || genderCode === 2 || genderCode === 5 || genderCode === 6) {
          yearPrefix = "19"; // 1900년대
      } else if (genderCode === 3 || genderCode === 4 || genderCode === 7 || genderCode === 8) {
          yearPrefix = "20"; // 2000년대
      } else {
        birthday.current.value = "";
          return;
      }
      // 출생년도 => 생일 자동 설정
      const year = yearPrefix + resNumFirst.current.value.substring(0, 2);
      const month = resNumFirst.current.value.substring(2, 4);
      const day = resNumFirst.current.value.substring(4, 6);
      birthday.current.value = `${year}-${month}-${day}`;

      // 내국인/외국인 체크
      hiddenNationality.current.value = (genderCode <= 4) ? "내국인" : "외국인";

      // 성별 체크
      hiddenGender.current.value = (genderCode % 2 === 1) ? "남성" : "여성";
    } else {
      birthday.current.value = ""; // 유효하지 않을 경우 초기화
    }
  }

  const validateResNum = (resNumFirst, resNumLast) => {
    const nums = resNumFirst.split('').map(Number).concat(resNumLast.split('').map(Number));
    const weights = [2, 3, 4, 5, 6, 7, 8, 9, 2, 3, 4, 5];
    const sum = nums.slice(0, 12).reduce((acc, num, index) => acc + (num * weights[index]), 0);
    const x = (11 - (sum % 11)) % 10;

    return x === nums[12]; // 마지막 자리 비교  
  }

  const signup = () => {
    // 유효성 검사
    if (!textCheck.test(userId.current.value)) {
      alert("아이디를 4~12자의 영문 대소문자와 숫자로만 입력해주세요.");
      return false;
  }
  if (!textCheck.test(userPwd.current.value)) {
      alert("비밀번호를 4~12자의 영문 대소문자와 숫자로만 입력해주세요.");
      return false;
  }
  if (userPwd.current.value !== userPwdChecked.current.value) {
      alert("비밀번호가 다릅니다.");
      return false;
  }
  if (userPwd.current.value === userId.current.value) {
      alert("ID와 비밀번호를 동일하게 설정하면 안 됩니다.");
      return false;
  }
  if (!emailCheck.test(userEmail.current.value)) {
      alert("올바른 메일 주소를 입력해주세요.");
      return false;
  }
  if (userName.current.value === "") {
      alert("이름이 비워져있습니다.");
      return false;
  }
  if (!resNumFirstCheck.test(resNumFirst.current.value) || !resNumLastCheck.test(resNumLast.current.value)) {
      alert("주민등록번호를 정확히 입력해주세요.");
      return false;
  }

  // 주민등록번호 유효성 검사
  if (!validateResNum(resNumFirst.current.value, resNumLast.current.value)) {
      alert("주민등록번호가 유효하지 않습니다.");
      return false;
  }

  // 비밀번호 암호화
  let encryptedPassword = 0;

  for (let i = 0; i < userId.current.value.length; i++) {
  let char = userId.current.value[i];
    
  if (/\D/.test(char)) {
    let charValue = char.charCodeAt(0) * Math.E * Math.PI;
    encryptedPassword += charValue;
  } else {
    encryptedPassword += parseFloat(char);
  }

  encryptedPassword += userPwd.current.value.length;

  hiddenPassword.current.value = encryptedPassword;
  userPwd.current.value = "";

  // 주민번호 뒷자리 마스킹
  let maskedResNum = resNumLast.current.value.charAt(0) + "******";
  resNumLast.current.value = maskedResNum;

  // 모든 검사가 통과되면 서버로 전송
  return true;
  
  }
}
function test1() {
  signup();
  console.log("userId :", userId.current.value);
  console.log("userPwd :", userPwd.current.value);
  console.log("userPwdChecked :", userPwdChecked.current.value);

  console.log("hiddenPassword :", hiddenPassword.current.value);
  console.log("userEmail :", userEmail.current.value);
  console.log("userName :", userName.current.value);

  console.log("resNumFirst :", resNumFirst.current.value);
  console.log("resNumLast :", resNumLast.current.value);
  console.log("birthday :", birthday.current.value);
  console.log("hobby :", hobbyList);
  console.log("hobby (문자열) :", hobbyList.join(", ")); // 문자열 변환 출력
  
  console.log("selfIntro :", selfIntro.current.value);
  console.log("hiddenGender :", hiddenGender.current.value);
  console.log("hiddenNationality :", hiddenNationality.current.value);
}

  return (
    <div className="App">
      <form action="/" onSubmit={signup} autocomplete="off">
        <table align="center" width="600" height="350" border="1" cellspacing="0" bordercolor="#c6e9f3">
            <thead>
                <tr bgcolor="#c6e9f3">
                    <th colspan="2">회원 기본 정보</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td align="center" bgcolor="#ebebeb"><b>아이디:</b></td>
                    <td><input type="text" id="id" name="userId" ref={userId} size="12" maxlength="12" /> 4~12자의 영문 대소문자와 숫자로만 입력</td>
                </tr>
                <tr>
                    <td align="center" bgcolor="#ebebeb"><b>비밀번호:</b></td>
                    <td><input type="password" id="password" ref={userPwd} size="12" maxlength="12" /> 4~12자의 영문 대소문자와 숫자로만 입력
                    <input type="hidden" id="hiddenPassword" name="userPwd" ref={hiddenPassword} /> // 암호화된 비밀번호를 보낸다. (비교 형식으로 판단)
                    </td>
                </tr>
                <tr>
                    <td align="center" bgcolor="#ebebeb"><b>비밀번호확인:</b></td>
                    <td><input type="password" id="pwdChecked" ref={userPwdChecked} size="12" maxlength="12" /></td>
                </tr>
                <tr>
                    <td align="center" bgcolor="#ebebeb"><b>메일주소:</b></td>
                    <td><input type="email" id="email" name="userEmail" ref={userEmail} /> 예) id@domain.com</td>
                </tr>
                <tr>
                    <td align="center" bgcolor="#ebebeb"><b>이름:</b></td>
                    <td><input type="text" id="name" name="userName" ref={userName} /></td>
                </tr>
            </tbody>
            <thead>
                <tr bgcolor="#c6e9f3">
                    <th colspan="2">개인 신상 정보</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td align="center" bgcolor="#ebebeb"><b>주민등록번호:</b></td>
                    <td>
                        <input type="text" id="resNum_first" name="resNum_first" ref={resNumFirst} size="6" maxlength="6" onInput={identityNumCheck} /> - 
                        <input type="password" id="resNum_last" ref={resNumLast} size="7" maxlength="7" onInput={identityNumCheck} /> 예) 123456-1234567
                        <input type="hidden" id="hiddenResNum_last" name="resNum_last" />
                    </td>
                </tr>
                <tr>
                    <td align="center" bgcolor="#ebebeb"><b>생일:</b></td>
                    <td><input type="date" id="birthday" name="birthday" ref={birthday} /></td>
                </tr>
                <tr>
                    <td align="center" bgcolor="#ebebeb" ref={hobby} ><b>관심분야:</b></td>
                    <td>
                        <input type="checkbox" name="hobby" value="컴퓨터" onClick={handlerHobbyUpdate} />컴퓨터
                        <input type="checkbox" name="hobby" value="인터넷" onClick={handlerHobbyUpdate} />인터넷
                        <input type="checkbox" name="hobby" value="여행" onClick={handlerHobbyUpdate} />여행
                        <input type="checkbox" name="hobby" value="영화감상" onClick={handlerHobbyUpdate} />영화감상
                        <input type="checkbox" name="hobby" value="음악감상" onClick={handlerHobbyUpdate} />음악감상
                    </td>
                </tr>
                <tr>
                    <td align="center" bgcolor="#ebebeb"><b>자기소개:</b></td>
                    <td><textarea cols="50" rows="6" name="selfIntro" ref={selfIntro} ></textarea></td>
                </tr>
            </tbody>
        </table>
        {/*  히든 필드로 성별과 내국인/외국인 정보 전송 */}
        <input type="hidden" id="hiddenGender" name="gender" ref={hiddenGender} />
        <input type="hidden" id="hiddenNationality" name="nationality" ref={hiddenNationality} />
        <br />
        <tfoot style={{display:'flex', justifyContent: 'center', alignItems: 'center'}}>
          <input type="submit" value="회원 가입" />&nbsp;
          <input type="reset" value="다시 입력" />&nbsp;
          <input type="button" onClick={test1} value="테스트" />
        </tfoot>
    </form>
    <출력화면 />
    </div>
  );
}

function 출력화면(){
  return(
    <div>
      아이디 123
      비밀번호 1234
    </div>
  )
}

export default App;