import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';

// import [컴포넌트 명] from '위치'
import Test1 from './page/comp/test1';
import Test2 from './page/comp/test2';

import Signup from './page/comp/signup';
import Calc1 from './page/comp/calc1';
import Calc2 from './page/comp/calc2';

import Filter from './page/comp/filter';

import Comp1 from './page/comp/comp1';
import Comp2 from './page/comp/comp2';
import Comp3 from './page/comp/comp3';
import Comp4 from './page/comp/comp4';
import Comp5 from './page/comp/comp5';

import DivTest1 from './page/test/test1';
import DivTest2 from './page/test/test2';
import DivTest3 from './page/test/test3';
import DivTest4 from './page/test/test4';
import DivTest5 from './page/test/test5';
import DivTest6 from './page/test/test6';

import DivUser from './page/test/user';
import DivDark from './page/test/darkmode';
import DivScore from './page/test/score';

import AxiosTest1 from './page/axios/axiosTest';
import AxiosTest2 from './page/axios/axiosTest2';

import Itembox from './page/axios/itembox';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={"/"} element={<Start />}></Route>
          <Route path={"/study1"} element={<Test1 />}></Route>
          <Route path={"/study2"} element={<Test2 />}></Route>

          {/* 페이지 모음 */}
          <Route path={"/signup"} element={<Signup />}></Route>
          <Route path={"/calc1"} element={<Calc1 />}></Route>
          <Route path={"/calc2"} element={<Calc2 />}></Route>

          <Route path={"/filter"} element={<Filter />}></Route>

          <Route path={"/comp1"} element={<Comp1 />}></Route>
          <Route path={"/comp2"} element={<Comp2 />}></Route>
          <Route path={"/comp3"} element={<Comp3 />}></Route>
          <Route path={"/comp4"} element={<Comp4 />}></Route>
          <Route path={"/comp5"} element={<Comp5 />}></Route>

          <Route path={"/divTest1"} element={<DivTest1 />}></Route>
          <Route path={"/divTest2"} element={<DivTest2 />}></Route>
          <Route path={"/divTest3"} element={<DivTest3 />}></Route>
          <Route path={"/divTest4"} element={<DivTest4 />}></Route>
          <Route path={"/divTest5"} element={<DivTest5 />}></Route>
          <Route path={"/divTest6"} element={<DivTest6 />}></Route>

          <Route path={"/divUser"} element={<DivUser />}></Route>
          <Route path={"/divDark"} element={<DivDark />}></Route>
          <Route path={"/divScore"} element={<DivScore />}></Route>

          <Route path={"/axiosTest1"} element={<AxiosTest1 />}></Route>
          <Route path={"/axiosTest2"} element={<AxiosTest2 />}></Route>

          <Route path={"/itembox"} element={<Itembox />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function Start(){
  return(
    <main>
    </main>
  )
}

function Header(){

  const movePage = useNavigate();

  return(
    <header style={{
      height: '600px',
      border: '3px solid red'
    }}>
      <h1 style={{
        cursor: 'pointer'
      }}
      onClick={
        () => movePage('/')
      }>Home으로 이동</h1>
      <Link to="/study1">연습용 1 화면으로 이동</Link>
      <input type="button" value="연습용2 이동" onClick={() => {
        movePage('/study2');
      }} /><br />
      
      {/* 이동하는 형태 */}
      <Link to="/signup">Signup 화면으로 이동</Link><br />
      <Link to="/calc1">Calc1 화면으로 이동</Link><br />
      <Link to="/calc2">Calc2 화면으로 이동</Link><br />

      <Link to="/filter">Filter 화면으로 이동</Link><br />

      <Link to="/comp1">Comp1 화면으로 이동</Link><br />
      <Link to="/comp2">Comp2 화면으로 이동</Link><br />
      <Link to="/comp3">Comp3 화면으로 이동</Link><br />
      <Link to="/comp4">Comp4 화면으로 이동</Link><br />
      <Link to="/comp5">Comp5 화면으로 이동</Link><br />

      <Link to="/divTest1">DivTest1 화면으로 이동</Link><br />
      <Link to="/divTest2">DivTest2 화면으로 이동</Link><br />
      <Link to="/divTest3">DivTest3 화면으로 이동</Link><br />
      <Link to="/divTest4">DivTest4 화면으로 이동</Link><br />
      <Link to="/divTest5">DivTest5 화면으로 이동</Link><br />
      <Link to="/divTest6">DivTest6 화면으로 이동</Link><br />

      <Link to="/divUser">DivUser 화면으로 이동</Link><br />
      <Link to="/divDark">DivDark 화면으로 이동</Link><br />
      <Link to="/divScore">DivScore 화면으로 이동</Link><br />

      <Link to="/axiosTest1">AxiosTest1 화면으로 이동</Link><br />
      <Link to="/axiosTest2">AxiosTest2 화면으로 이동</Link><br />

      <Link to="/itembox">Itembox 화면으로 이동</Link><br />
    </header>
  )
}

export default App;
