import React from 'react';

const LoginPage = () => {
    const [login, setLogin] = React.useState(''),
    [password, setPassword] = React.useState('');


    function handleSubmit (e){
        e.preventDefault();
        if(login && password){
            alert('realizando login')
        } else {
            alert('Login invalido')

        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <p>Login: <input 
                        value={ login } 
                        onChange={ (e) => setLogin(e.target.value) } 
                        type="text" 
                /></p>

                <p>Password: <input 
                    type="password" 
                    value={ password }
                    onChange={ (e) => setPassword(e.target.value) }
                /></p>

                <p><button type="submit">Logar</button> </p>
            </form>
        </>
    )
};


export default LoginPage;