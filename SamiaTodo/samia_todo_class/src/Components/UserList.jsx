import axios from 'axios';
import React, { useEffect, useState } from 'react';

const UserList = () => {
    const [fetchData,setFetchData]= useState([]);
    const [axiosData,setAxiosData]= useState([]);
    const [currentUser,setCurrentUser]=useState({
            id: null,
            name: "",
            "username": "",
            email: "",
            address: {
              street: "",
              suite: "",
              city: "",
              zipcode: "",
              geo: {
                lat: "",
                lng: ""
              }
            },
            phone: "",
            website: "",
            company: {
              name: "",
              catchPhrase: "",
              bs: ""
            }
        })

    useEffect(() => {
        const getData=()=>{
            axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(res => {
            const persons = res.data;
            setAxiosData(persons);
            });

            fetch(`https://jsonplaceholder.typicode.com/users`)
            .then((response) => response.json())
            .then(usersList => {
                setFetchData(usersList);
            });
        };
        getData();

    }, []);

    const getAxiosUsers=(e)=>{
        e.preventDefault();
        let userID= document.getElementById('axiosUsers').value
        let selectedUser= axiosData.find(user=>user.name===userID);
        setCurrentUser(selectedUser)
        
    }
    
    return (
        <>
            <form onSubmit={getAxiosUsers}>

                <div id='simplediv'>
                    Select User:
                  
                        <>
                            <select   id="axiosUsers" placeholder="Select User">
                            {axiosData.map((user)=>(
                                <option >{user.name}</option> ))}
                            </select>
                        </>
                        
                        <button  type="submit">show details</button>
                        {/* <select id="fetchUser" placeholder="Select User">
                            {fetchData.map((user)=>
                            <option >{user.name}</option>)}
                        </select > */}
                    
                </div>
                
                <div id='container'>
                    <h1> User details</h1>
                    <p>Name : {currentUser.name}</p>
                    <p>email :{currentUser.email}</p>
                    <p>Phone : {currentUser.phone}</p>
                    <p>Website : {currentUser.website}</p>
                    <p>Company Name : {currentUser.company.name}</p>

                   
                </div>
            </form>
                    
        </>
    );
};

export default UserList;