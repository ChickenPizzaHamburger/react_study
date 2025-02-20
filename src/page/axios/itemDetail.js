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
                position: 'fixed', // 절대 좌표(absolute), 고정(fixed)
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
                    position: 'fixed', // 화면 중앙 고정
                    width: '220px', // 하얀색 모달 창의 너비
                    height: '250px', // 하얀색 모달 창의 높이
                    borderRadius: '10px', // 모달 창의 둥근 정도 
                    backgroundColor: 'rgba(255, 255, 255, 1)', // 111(하얀색) + 100% 불투명(알파영역)
                    display: 'flex', // 정렬
                    flexDirection: 'column', // 내용들을 세로 정렬
                    alignItems: 'flex-start', // 왼쪽 정렬
                    textAlign: 'left', // 텍스트 왼쪽 정렬
                    padding: '20px', // 내부 여백
                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)' // 약간의 그림자 효과 추가
                }}>
                    {/* 모달 창 안에 들어가는 요소 */}
                    <h1 style={{ margin: '0 0 5px 0' }}>{name}</h1> {/* 상품명 (굵게) */}
                    <h3 style={{ margin: '0 0 15px 0', color: 'gray' }}>{categoryName}</h3> {/* 카테고리명 (작은 제목) */}

                    <div style={{ marginTop: 'auto', width: '100%', textAlign: 'right' }}>
                        <div style={{ fontSize: '16px', fontWeight: 'bold' }}>{price.toLocaleString()}원</div>
                        <div style={{ fontSize: '14px' }}>👍 좋아요 : {good}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}