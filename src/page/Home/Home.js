
import FoodList from '../../component/FoodList/FoodList';
import {Container} from 'react-bootstrap';
import NavigationBar from '../../component/NavigationBar/NavigationBar';
import {useState, useContext, useParams} from 'react';

function Home({foods, filter}) {
    if (true)
        return (<>
            <FoodList foods = {foods} filter = {filter}/>
        </>
        );
    else 
        return(<p>Please login to access this page</p>)
}

export default Home;
