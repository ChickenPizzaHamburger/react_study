import student from '../student.json';
import {useState, useRef} from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';

/** React 과제
 각각 (\/** *\/) 사이의 주석을 지우면 됩니다.
*/

function App(){
    return(
        <div>
        <Header />
        <Routes>
            <Route path={"./test1"} element={<Test1 />}></Route>
            <Route path={"./test2"} element={<Test2 />}></Route>
            <Route path={"./test3"} element={<Test3 />}></Route>
            <Route path={"./test4"} element={<Test4 />}></Route>
            <Route path={"./test5"} element={<Test5 />}></Route>
            <Route path={"./test6"} element={<Test6 />}></Route>

            <Route path={"./user"} element={<User />}></Route>

            <Route path={"./darkmode"} element={<Darkmode />}></Route>
            <Route path={"/divTest/score"} element={<Score />}></Route>
        </Routes>
        </div>
    )
}

function Header(){
    return(
        <div>
            <Link to="./test1">Test1로 이동</Link><br/>
            <Link to="./test2">Test2로 이동</Link><br/>
            <Link to="./test3">Test3로 이동</Link><br/>
            <Link to="./test4">Test4로 이동</Link><br/>
            <Link to="./test5">Test5로 이동</Link><br/>
            <Link to="./test6">Test6로 이동</Link><br/>

            <Link to="./user">회원 관리로 이동</Link><br/>

            <Link to="./darkmode">다크모드로 이동</Link><br/>
            <Link to="./score">학생 성적 관리로 이동</Link><br/>
        </div>
    )
}

// 첫번째 과제
function Test1(){
    return(
        <div>
            <FirstDiv />
            <SecondDiv />
            <ThirdDiv />
        </div>
    )
}

// 두번째 과제
function Test2(){
    return(
        <div>
            <FirstDiv />
            <div style={{display: 'flex'}}>
            <SecondDiv />
            <ThirdDiv />
            </div>
        </div>
    )
}

// 세번째 과제
function Test3(){
    return(
        <div style={{display: 'flex', border: '3px solid red'}}>
            <ImgDiv />
            <TextDiv />
        </div>
    )
}

// 네번째 과제
function Test4(){
    return(
        <div>
           <ImgAndTextDiv />
           <ImgAndTextDiv /> 
        </div>
    )
}

const data = [{"imageLink": "http://192.168.0.123:3000/static/media/image1.d0c144699c3b25f6f279.jfif", 
    "Text" : {"mainText": "귀여운 병아리", "subText": "작고 말랑말랑한 병아리"}},
    {"imageLink": "http://192.168.0.123:3000/static/media/image2.7e5cacfcde5febe297ef.png", 
     "Text" : {"mainText": "애교많은 유령", "subText": "사람을 좋아하는 유령"}}
    ];

// 다섯번째 과제
function Test5(){
    return(
        <div>
            <SendImgAndTextDiv data={data[0]} />
            <SendImgAndTextDiv data={data[1]} />
        </div>
    )
}

// 여섯번째 과제
function Test6(){
    return(
        <div>
            {data.map((item) => (
                <div>
                <SendImgAndTextDiv data={item} />
                </div>
            ))}
        </div>
    )
}

const city = ['전체', '서울', '부산', '경기', '광주', '대전', '인천'];
const stuData = student.student;

const tableStyle = {
  padding: '25px 40px', 
  border: '1px solid #000', 
  fontSize: '20px', 
  fontWeight: 'bold'
}

// 회원 관리 지역
function User(){
    const [stuList, setStuList] = useState(stuData);
  
    const handlerRegion = e => {
      if(e.target.value === '전체'){
        setStuList(stuData);
      } else if (e.target.value === '서울'){
        setStuList(stuData.filter(item => item.region === '서울'))
      } else if (e.target.value === '부산'){
        setStuList(stuData.filter(item => item.region === '부산'))
      } else if (e.target.value === '경기'){
        setStuList(stuData.filter(item => item.region === '경기'))
      } else if (e.target.value === '광주'){
        setStuList(stuData.filter(item => item.region === '광주'))
      } else if (e.target.value === '대전'){
        setStuList(stuData.filter(item => item.region === '대전'))
      } else if (e.target.value === '인천'){
        setStuList(stuData.filter(item => item.region === '인천'))
      } 
    }
  
    return(
      <div>
        {city.map(item => (
          <input type="button" value={item} style={{display: 'inline-flex', margin: '5px'}} onClick={handlerRegion}>
          </input>
        ))}
        <CityData stuData={stuList} />
      </div>
    )
  }

//다크 모드
function Darkmode(){
    const [dark, setDark] = useState(true);
  
    return(
      <div>
        <input type="button" value="다크모드 변경" onClick={() => setDark(!dark)} />
        <DarkMode dark={dark} />
      </div>
    )
  }

// 학생 성적 관리 프로그램
function Score(){
    const name = useRef('');
    const korean = useRef(null);
    const english = useRef(null);
    const math = useRef(null);
  
    const [scoreData, setScoreData] = useState([]);
  
    const handleAddScore = () => {
      const newScore = {
        name: name.current.value,
        korean: korean.current.value,
        english: english.current.value,
        math: math.current.value,
      };
  
      setScoreData([...scoreData, newScore]);
  
      name.current.value = '';
      korean.current.value = '';
      english.current.value = '';
      math.current.value = '';  
      };
  
    return(
      <div>
        <h3>입력</h3>
        <input type="text" placeholder='이름' ref={name} />
        <input type="number" placeholder='국어' ref={korean} />
        <input type="number" placeholder='영어' ref={english} />
        <input type="number" placeholder='수학' ref={math} />
        <button onClick={handleAddScore}>추가</button>
  
        <ScoreList scoreData={scoreData} />
      </div>
    )
  }

function FirstDiv(){
  return(
    <div style={{width: '100%', height: '100px', backgroundColor: 'red', color: 'white'}}>
      <h1 style={{margin: '0', padding: '0', textAlign: 'left'}}>FirstDiv</h1>
    </div>
  )
}

function SecondDiv(){
  return(
    <div style={{width: '100%', height: '100px', backgroundColor: 'blue', color: 'white'}}>
      <h1 style={{margin: '0', padding: '0', textAlign: 'left'}}>SecondDiv</h1>
    </div>
  )
}

function ThirdDiv(){
  return(
    <div style={{width: '100%', height: '100px', backgroundColor: 'green', color: 'white'}}>
      <h1 style={{margin: '0', padding: '0', textAlign: 'left'}}>ThirdDiv</h1>
    </div>
  )
}

function  ImgDiv(){
  return(
    <div>
      <img src="http://192.168.0.123:3000/static/media/image1.d0c144699c3b25f6f279.jfif" />
    </div>
  )
}

function TextDiv(){
  return(
    <div>
      <h1 style={{margin: '0', padding: '0'}}>귀여운 병아리</h1>
      <span>작고 말랑말랑한 병아리</span>
    </div>
  )
}

function ImgAndTextDiv(){
  return(
    <div style={{display: 'flex', border: '3px solid red'}}>
      <ImgDiv />
      <TextDiv />
    </div>
  )
}

function SendImgAndTextDiv(props){
  return(
    <div style={{display: 'flex', border: '3px solid red'}}>
      <SendImgDiv imageLink={props.data.imageLink} />
      <SendTextDiv text={props.data.Text} />
    </div>
  )
}

function SendImgDiv(props){
  return(
    <div>
      <img src={props.imageLink} style={{width: '200px', height: '200px', objectFit: 'cover', borderRadius: '50%', border: '1px solid black'}} />
    </div>
  )
}

function SendTextDiv(props){
  return(
    <div>
      <h1 style={{margin: '0', padding: '0'}}>{props.text.mainText}</h1>
      <span>{props.text.subText}</span>
    </div>
  )
}

function CityData(props){
  return(
    <table style={{borderCollapse: 'collapse'}}>
      <thead>
        <tr style={{backgroundColor: 'aquamarine'}}>
          <th style={tableStyle}>이름</th>
          <th style={tableStyle}>나이</th>
          <th style={tableStyle}>이메일</th>
          <th style={tableStyle}>지역</th>
        </tr>
      </thead>
      <tbody>
        {props.stuData.map(item => (
          <tr>
            <td style={tableStyle}>{item.name}</td>
            <td style={tableStyle}>{item.age}</td>
            <td style={tableStyle}>{item.email}</td>
            <td style={tableStyle}>{item.region}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

function DarkMode(props){
  return(
    <div style={{width: '100%', height: '600px', border: '1px solid red', backgroundColor: props.dark ? 'white' : 'black', color: props.dark ? 'black' : 'white'}}>
      <h1>Hello World</h1>
    </div>
  )
}

function ScoreList(props){
  return(
    <div style={{border: '3px solid green', padding: '20px'}}>
      <h3 style={{marginBottom: '10px'}}>리스트</h3>
      <table style={{width: '100%', border: '2px solid black', borderCollapse: 'collapse'}}>
        <thead>
          <th>이름</th>
          <th>국어</th>
          <th>영어</th>
          <th>수학</th>
        </thead>
        <tbody>
        {props.scoreData.map(item => (
          <tr>
            <td>{item.name}</td>
            <td>{item.korean}</td>
            <td>{item.english}</td>
            <td>{item.math}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  )
}

export default App;