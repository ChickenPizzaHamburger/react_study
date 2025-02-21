import { useReducer, useEffect } from "react";

export default function Reducer2() {
    const initialState = { x: 0, y: 0 };

    function reducer(state, action) {
        switch (action) {
            case "up":
                return { ...state, y: state.y - 1 };
            case "down":
                return { ...state, y: state.y + 1 };
            case "left":
                return { ...state, x: state.x - 1 };
            case "right":
                return { ...state, x: state.x + 1 };
            case "reset":
                return initialState;
            default:
                return state;
        }
    }

    const [position, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        function handleKeyDown(event) {
            switch (event.key) {
                case "ArrowUp":
                case "w":
                    dispatch("up");
                    break;
                case "ArrowDown":
                case "s":
                    dispatch("down");
                    break;
                case "ArrowLeft":
                case "a":
                    dispatch("left");
                    break;
                case "ArrowRight":
                case "d":
                    dispatch("right");
                    break;
                case "r":
                    dispatch("reset");
                    break;
                default:
                    break;
            }
        }

        window.addEventListener("keydown", handleKeyDown);
        // 키보드 입력을 감지한다. (keydown 이벤트가 발생시 handleKeyDown 함수 실행)
        // keydown(키를 누르는 순간), keyup(키를 뗄 때), keypress(키를 누르고 있을 때)
        // 매개변수 안에 key로 들어간다. (event.key)
        return () => window.removeEventListener("keydown", handleKeyDown);
        // 감지가 끝날 때 이벤트리스너를 없앤다.
    }, []);

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <div
                style={{
                    // 박스 크기
                    width: "200px",
                    height: "200px",
                    border: "4px solid black",
                    position: "relative", // 박스 기준
                    margin: "auto",
                }}
            >
                <div
                    style={{
                        width: "20px", // 원 크기
                        height: "20px",
                        backgroundColor: "green", // 원의 색깔
                        position: "absolute", // 절대값
                        left: `${position.x * 20 + 90}px`, // 원 반지름(10pt) - 100 => 90
                        top: `${position.y * 20 + 90}px`,
                        transition: "0.1s",
                        borderRadius: "50%", // 0% - 네모
                    }}
                ></div>
            </div>
            <button onClick={() => dispatch("reset")} style={{ marginTop: "20px" }}>
                Reset (R Key)
            </button>
        </div>
    );
}