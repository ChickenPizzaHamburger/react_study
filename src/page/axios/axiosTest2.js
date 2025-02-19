import axios from 'axios';
import {useState} from 'react';
import Detail from './detailTest';

export default function AxiosTest2(){

    const [areaList, setAreaList] = useState([]);
    const [areaDetail, setAreaDetail] = useState(null);
    const [tempName, setTempName] = useState('');

    const [areaInput, setAreaInput] = useState(null);

    const handlerAreaList = () => {
        // alert('지역 리스트 불러오기');
        axios.get('http://192.168.0.123:8080/api/area/list')
        .then(res => {
            console.log(res);
            setAreaList(res.data.data);
        })
    }

    const handlerAreaDetail = idx => { // 건네준 idx가 들어온다.
        axios.get('http://192.168.0.123:8080/api/area/findById',
            {params: {
                id: idx
            }}
        )
        .then(res => {
            console.log(res);
            setAreaDetail(res.data.data);
            setTempName(res.data.data.areaName);
        })
    }

    const handlerInput = () => {
        const obj = {areaName: areaInput};
        axios.post('http://192.168.0.123:8080/api/area/regist',
            JSON.stringify(obj), {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
        .then(res => {
            console.log(res);
        })
    }

    return(
        <div>
            <h1>AXIOS 서버 호출하기</h1>

            <h4>지역 등록</h4>
                <input type="text" onChange={e => setAreaInput(e.target.value) } />
                <input type="button" value="지역 입력" onClick={handlerInput} />
            <h4>지역 출력</h4>

            <input type="button" value="지역 리스트 불러오기" onClick={handlerAreaList} />

            {/* [ip:port] / [contextPath] / [mapping] ? requestParam */}
            {areaList.map((item, index) => (
                <div key={index}>
                    {item.idx} / {item.areaName}
                    <input type="button" value="param 전달하기" onClick={
                        () => handlerAreaDetail(item.idx)
                    } />
                </div>
            ))}

            {areaDetail != null && <Detail detail={tempName} 
            handlerReset={() => {
                setAreaDetail(null);
                setTempName('');
            }}
            />}
        </div>
    )
}