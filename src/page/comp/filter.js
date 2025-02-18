import {useState, useRef} from 'react';
import hobbyJson from '../../hobby.json';
import foo from '../../food.json';

function App() {

  const hobbys = hobbyJson.hobby;

  const suf = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const inputNum = useRef(0);
  const [stateNum, setStateNum] = useState(0);

  const inputHobby = ['영화', '음악', '독서', '쇼핑'];
  const [stateHobby, setStateHobby] = useState('영화');

  const [outputHobby, setOutputHobby] = useState([]);

  const handlerUpdate = (e) => {
    setStateHobby(e.target.value);
    setOutputHobby(
      prev => {
        return [e.target.value, ...prev]
      }
    )
  }

  const [selectHobby, setSelectHobby] = useState('영화');

  const radioCheck = (e) => {
    setSelectHobby(e.target.value)
  }

  /** Filter 기능, 음식 리스트 */
  const foods = foo.food;
  // food Json을 useState의 기본값으로 넣음
  const [foodList, setFoodList] = useState(foods);

  /** 음식 Filter 적용 */
  const handlerFoodUpdate = e => {
    console.log(e.target.value);

    if (e.target.value === '전체'){
      setFoodList(foods);
    } else if(e.target.value === '한식') {
      setFoodList(foods.filter(
        item => (
          // 값이 True인 것만 foods에 담는다.
          item.category === '한식'
        )
      ))
    } else if(e.target.value === '중식') {
      setFoodList(foods.filter(
        item => (
          // 값이 True인 것만 foods에 담는다.
          item.category === '중식'
        )
      ))
    } else if(e.target.value === '양식') {
      setFoodList(foods.filter(
        item => (
          // 값이 True인 것만 foods에 담는다.
          item.category === '양식'
        )
      ))
    }
  }

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


  return (
    <div className="App">
      <h1>취미</h1>
      {/* map은 화면 표현 대신이라서 소괄호이다. */}
      {/* map 안에는 매개변수
      1개 : forEach 배열의 index 주소
      2개 : forEach 배열의 index 주소, index 값 */}
      {hobbys.map((item, index) => (
        <div key={index}>
          {item.id} / {item.name}
        </div>
      ))}

      <br />

      <input type="text" ref={inputNum}/>
      <input type="button" value="입력" 
      onClick={() => {
        setStateNum(inputNum.current.value);
      }}/>
   
      <br />
      <br />
      <table align="center" border="1" cellPadding={0} cellSpacing={0}>
        <thead>
        <tr>
          <td>계산</td><td>결과물</td>
          </tr>
          </thead>
          <tbody>
          {suf.map((item, index) => (
            <tr key={index}>
               <td> {stateNum} × {index + 1} </td><td> {Number(stateNum) * Number(index + 1)} </td>
            </tr>
          ))}
          </tbody>
      </table>

      <br />

      <select onChange = {handlerUpdate}>
      {inputHobby.map((item, index) => (
            <option key={index}>
               {item}
            </option>
          ))}
      </select>

      <br /><br />
      {outputHobby.map((item, index) => (
            <div key={index}>
               {item}
            </div>
          ))}

      <br /><br />

      <span style={{fontSize: '20px', fontWeight: 'bold'}}>Home 으로<br /></span>
      <span style={{fontSize: '40px', fontWeight: 'bolder'}}>Radio<br /></span>
      <span style={{color:'red', fontSize: '25px', fontWeight: 'bold'}}>선택 된 취미: </span><span style={{color:'blue', fontSize: '25px', fontWeight: 'bold'}}>{selectHobby}<br /></span>

      <input type="radio" name="hobby" value="영화" onClick={radioCheck} />영화
      <input type="radio" name="hobby" value="음악" onClick={radioCheck} />음악
      <input type="radio" name="hobby" value="독서" onClick={radioCheck} />독서
      <input type="radio" name="hobby" value="쇼핑" onClick={radioCheck} />쇼핑

      <br /><br />

      <h1>음식 리스트, Filter 기능</h1>
      <input type="button" value="전체" onClick={handlerFoodUpdate} />
      <input type="button" value="한식" onClick={handlerFoodUpdate} />
      <input type="button" value="중식" onClick={handlerFoodUpdate} />
      <input type="button" value="양식" onClick={handlerFoodUpdate} />

      {foodList.map(item => (
        <div key={item.id}>
          {item.id} / {item.name} / {item.category}
        </div>
      ))}

      <br /><br />
      <h1>취미 고르기, Checkbox</h1>
      {hobbyList.map((item, index) => (
        <div key={index}>
          {item}
        </div>
      ))}
      <br />
      {hobbys.map((item, index) => (
        <div key={index}>
          <input type="checkbox" name="chk_hobbys" value={item.name} onChange={handlerHobbyUpdate} />{item.name}
        </div>
      ))}

    </div>
  );
}

export default App;
