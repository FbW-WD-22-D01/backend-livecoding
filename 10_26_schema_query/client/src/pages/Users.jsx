import React from 'react'

import axios from 'axios';
import { useEffect, useState } from 'react';

const api = axios.create({
    baseURL: "http://localhost:5003",
    timeout: 4000,
  })

export default function Users() {

    const [users, setUsers] = useState(null);

    useEffect(() => {
        api.get('/users').then(res => {
            setUsers(res.data);
        } ).catch(err => {
            console.log(err);
        })
    }, [] )

    if(!users) return (<div>no users</div>)



    return (
        <ul>
            {
                users.map(user => {
                    const { firstname, lastname, email, address, otherAddr, isAdmin} = user;
                    return (
                        <li>
                            <span>{firstname}</span>
                        </li>
                    )
                })
            }
        </ul>
    )
}
