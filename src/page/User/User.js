
import {Container, Table} from 'react-bootstrap';
import React, {useState} from 'react';
import NavigationBar from '../../component/NavigationBar/NavigationBar';


function User({user}) {
    return (
            <>
        <Container className = 'm-3 p-3'>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>User infomation</th>
                        <th></th>
                    </tr>
                </thead>
            <tbody>
                <tr>
                    <td>Name</td>
                    <td>{user.FName + ' ' + user.MName + ' ' + user.LName}</td>
                </tr>
                <tr>
                    <td>Username</td>
                    <td>{user.username}</td>
                </tr>
                <tr>
                    <td>Day Of Birth</td>
                    <td>{user.BDate}</td>
                </tr>
                <tr>
                    <td>Email</td>
                    <td>{user.Email}</td>
                </tr>
                <tr>
                    <td>Gender</td>
                    <td>{user.Gender}</td>
                </tr>
                <tr>
                    <td>Age</td>
                    <td>{user.Age}</td>
                </tr>
            </tbody>
            </Table>
        </Container></>
        );
}

export default User;
