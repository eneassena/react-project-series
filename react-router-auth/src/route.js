import React, { useEffect, useState } from 'react';

import {
    BrowserRouter,
    Routes, 
    Route,
} from 'react-router-dom';

import RequireLogin from './page/autenticacao/requireLogin';
import Login from './page/autenticacao/login';
import Protected from './page/autenticacao/protected';
import CreateUser from './page/users/create_user';

import axios from 'axios';

let baseUrl = "http://localhost:8080";



export const RouteRoot = function() {
    const [data, setData] = useState(null);
    
    useEffect(()=>{
        axios.get(baseUrl).then(function(response) {
            console.log(response.data);
            setData(response.data);
        })
    }, []);

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/create-user" element={<CreateUser />} />
                    <Route path="/protected" element={
                        <RequireLogin>
                            <Protected />
                        </RequireLogin>
                    } />
                </Routes>
            </BrowserRouter>
        </>
    )
}