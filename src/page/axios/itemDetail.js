import {useState, useEffect} from 'react';
import axios from 'axios';

export default function ItemDetail(props){

    console.log(props.itemIdx)

    const [name, setName] = useState('');
    const [categoryName, setCategoryName] = useState('');
    const [price, setPrice] = useState(0);
    const [good, setGood] = useState(0);

    function getDatail(){
        axios.get('http://192.168.0.123:8080/api/item/find',
            {params:{
                itemIdx: props.itemIdx
            }}
        )
        .then(res => {
            console.log(res)
            if(res.data.code == 200){
                setName(res.data.data.name);
                setCategoryName(res.data.data.categoryName);
                setPrice(res.data.data.price);
                setGood(res.data.data.good);
            } else{
                alert('해당 상품의 자세한 정보를 받는 중에 오류가 발생했습니다.')
                console.log(res.msg);
            }
        })
    }

    // Load 역할
    useEffect(() => {
        getDatail();
    }, [])

    return(
        <div>
            <div style={{ // 바깥 영역 클릭 못하게 div로 막는 형식
                position: 'absolute', // 절대 좌표
                top: '0',
                left: '0',
                width: '100vw', // 웹브라우저 화면 길이 너비만큼 (view width) - 화면 전체(%)가 아니라 보이는 영역
                height: '100vh', // 웹브라우저 화면 길이 높이만큼 (view height) - 화면 전체(%)가 아니라 보이는 영역
                backgroundColor: 'rgba(0, 0, 0, 0.5)', // 000(검정색) + 50% 반투명(알파영역)
                display: 'flex', // 정렬
                justifyContent: 'center', // 정렬 기준의 가운데
                alignItems: 'center' // 컨텐츠 요소도 가운데
            }}
                onClick = {() => props.handlerReset()}
            >
                <div style={{
                    width: '100px', // 하얀색 모달 창의 너비
                    height: '50px', // 하얀색 모달 창의 높이
                    borderRadius: '10px', // 모달 창의 둥근 정도 
                    backgroundColor: 'rgba(255, 255, 255, 1)', // 111(하얀색) + 100% 불투명(알파영역)
                    display: 'flex', // 정렬
                    justifyContent: 'center', // 정렬 기준의 가운데
                    alignItems: 'center' // 컨텐츠 요소도 가운데
                }}>
                    {/* 모달 창 안에 들어가는 요소 */}
                    {name} <br />
                    {categoryName} <br />
                    {price} <br />
                    {good} <br />
                </div>
            </div>
        </div>
    )
}