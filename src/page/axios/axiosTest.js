import axios from 'axios';
import {useState} from 'react';

export default function AxiosTest(){

    const [list, setList] = useState([]);
    const [detail, setDetail] = useState({});

    const handlerAxios1 = () => {
        console.log('handlerAxios1');

        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                console.log(response);
                setList(response.data);
            });

            // 1. response에서 온 데이터를 변수에 넣는다.
            // 2. 화면에 보이는가? 안 보이는가?
    }

    const handlerDetail = (id) => {
        alert(id);
        const URL = 'https://jsonplaceholder.typicode.com/posts/' + id;
        axios.get(URL)
        .then(response => {
            console.log(response);
            setDetail(response.data);
        });
    }

    return(
        <div>
            <h1>AXIOS 연습 1</h1>
            <input type="button" value="axios 호출 1" onClick={handlerAxios1} />

            <h4>리스트 호출</h4>
            {list.map((item, index) => (
                <div key={index} onClick={() => handlerDetail(item.id)}>
                    {item.title}
                </div>
            ))}

            {/* 화면 팝업창 꾸미기 */}
            <div>
                <span>제목: {detail.title}</span>
                <span>내용: {detail.body}</span>
            </div>
        </div>
    )
}