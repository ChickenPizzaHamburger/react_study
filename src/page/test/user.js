import student from '../../student.json';
import {useState} from 'react';

const city = ['전체', '서울', '부산', '경기', '광주', '대전', '인천'];
const stuData = student.student;

const tableStyle = {
  padding: '25px 40px', 
  border: '1px solid #000', 
  fontSize: '20px', 
  fontWeight: 'bold'
}

export default function App(){
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