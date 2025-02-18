import {useState, useEffect} from 'react';

export default function Detail(props){
    return(
        <div>
            <div style={{ // 바깥 영역 클릭 못하게 div로 막는 형식
                position: 'absolute', // 절대 좌표
                top: '0',
                left: '0',
                width: '100vw', // 웹브라우저 화면 길이 너비만큼 (view width)
                height: '100vh', // 웹브라우저 화면 길이 높이만큼 (view height)
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
                    {props.detail}
                </div>
            </div>
        </div>
    )
}