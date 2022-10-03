import React from 'react';

import {
    BrowserRouter,
    Routes, 
    Route
} from 'react-router-dom';

import RequireLogin from './page/autenticacao/requireLogin';
import Login from './page/autenticacao/login';
import Protected from './page/autenticacao/protected';
  
 

export const RouteRoot = function() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<Login />} />
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