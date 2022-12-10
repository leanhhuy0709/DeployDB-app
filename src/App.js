import Login from './page/Login/Login';
import NavigationBar from './component/NavigationBar/NavigationBar';
import Home from './page/Home/Home';
import Cart from './page/Cart/Cart';

import {Route, BrowserRouter, Routes} from 'react-router-dom';
import User from './page/User/User';
import React, {useState} from 'react';
import {useParams} from 'react-router-dom';
import UserList from './page/UserList/UserList';
import Register from './page/Register/Register';



function App() {
    //thông tin mà người dùng đã đăng nhập
    const user = {"id": 1, "username":"huy123", "FName": "Le", "MName": "Anh", "LName": "Huy", "BDate": "2002-09-07", "Email": "huy123@gmail.com", "Gender": "Male", "Age": 20};
    /*
    const [user, setUser] = useState({});
    React.useEffect(() => {
      if (localStorage.getItem('token') != '')
      fetch("something from token?")
        .then((res) => res.json())
        .then((user) => setUser(user));
      }, []);*/
    const [token, setToken] = useState("Hello");
    const foods = [
      {"Res_id": 1, "F_id": 1, "Type_ID": 3, "Fname": "com suon bi", "Unit_price": 30000, "Description": "1 suon+bi", "Status": 1, "Size": "M", "PictureURL": "https://kenh14cdn.com/2018/6/13/2954314317567482510571071022300657098424320n-15288595313631828141175-15288609206141257248658.png"},
      {"Res_id": 1, "F_id": 2, "Type_ID": 4, "Fname": "com suon bi trung", "Unit_price": 35000, "Description": "1 suon+bi+trung", "Status": 1, "Size": "L", "PictureURL": "https://kenh14cdn.com/2018/6/13/2954314317567482510571071022300657098424320n-15288595313631828141175-15288609206141257248658.png"},
      {"Res_id": 2, "F_id": 3, "Type_ID": 2, "Fname": "com suon bi cha", "Unit_price": 35000, "Description": "1 suon+bi", "Status": 1, "Size": "M", "PictureURL": "https://kenh14cdn.com/2018/6/13/2954314317567482510571071022300657098424320n-15288595313631828141175-15288609206141257248658.png"},
      {"Res_id": 2, "F_id": 4, "Type_ID": 1, "Fname": "bun them", "Unit_price": 5000, "Description": "1 suon+bi", "Status": 1, "Size": "M", "PictureURL": "https://kenh14cdn.com/2018/6/13/2954314317567482510571071022300657098424320n-15288595313631828141175-15288609206141257248658.png"},
      {"Res_id": 3, "F_id": 5, "Type_ID": 4, "Fname": "tra sua bac ha", "Unit_price": 20000, "Description": "1 suon+bi", "Status": 1, "Size": "L", "PictureURL": "https://kenh14cdn.com/2018/6/13/2954314317567482510571071022300657098424320n-15288595313631828141175-15288609206141257248658.png"},
      {"Res_id": 4, "F_id": 6, "Type_ID": 3, "Fname": "tra sua truyen thong", "Unit_price": 25000, "Description": "1 suon+bi", "Status": 1, "Size": "M", "PictureURL": "https://kenh14cdn.com/2018/6/13/2954314317567482510571071022300657098424320n-15288595313631828141175-15288609206141257248658.png"},
      {"Res_id": 5, "F_id": 7, "Type_ID": 2, "Fname": "tra sua olong", "Unit_price": 30000, "Description": "1 suon+bi", "Status": 1, "Size": "M", "PictureURL": "https://kenh14cdn.com/2018/6/13/2954314317567482510571071022300657098424320n-15288595313631828141175-15288609206141257248658.png"},
    ];
    const users = [
      {"id": 1, "username":"huy123", "FName": "Le", "MName": "Anh", "LName": "Huy", "BDate": "2002-09-07", "Email": "huy123@gmail.com", "Gender": "Male", "Age": 20},
      {"id": 2, "username":"thuy123", "FName": "Le", "MName": "Anh", "LName": "Thuy", "BDate": "2002-08-07", "Email": "thuy123@gmail.com", "Gender": "Female", "Age": 20},
      {"id": 3, "username":"huynh123", "FName": "Le", "MName": "Anh", "LName": "Huynh", "BDate": "2002-07-07", "Email": "huynh123@gmail.com", "Gender": "Male", "Age": 20},
      {"id": 4, "username":"chuy123", "FName": "Le", "MName": "Anh", "LName": "Chuy", "BDate": "2002-06-07", "Email": "chuy123@gmail.com", "Gender": "Female", "Age": 20},
      {"id": 5, "username":"ahuy123", "FName": "Nguyen", "MName": "Anh", "LName": "Huy", "BDate": "2002-05-07", "Email": "ahuy123@gmail.com", "Gender": "Male", "Age": 20},
    ];

    function Search() {
      // Get the userId param from the URL.
      let { keyword } = useParams();
      return (
        <Home foods = {foods} filter={keyword}/>
      );
      // ...
    }
console.log(Login);
  if (token != "") return (
    <BrowserRouter>
      <NavigationBar user = {user}/>
      <Routes>
        {/*<Route path = '/cart' element = {<Cart/>}/>*/}
        
        <Route path = '/user' element = {<User user = {user}/>}/>
        <Route path = '/userlist' element = {<UserList users = {users}/>}/>
        <Route path = '/login' element = {<Login/>}/>
        <Route path = '/register' element = {<Register/>}/>
        <Route path="/search/:keyword" element={<Search />} />
        <Route path = '/' element = {<Home foods = {foods}/>}/>
        <Route path = '/*' element = {<p>Error</p>}/>
        
      </Routes>
    </BrowserRouter>
  );
  else return (
    <BrowserRouter>
      <Routes>
        <Route path = '/login' element = {<Login/>}/>
        <Route path = '/register' element = {<Register/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;



