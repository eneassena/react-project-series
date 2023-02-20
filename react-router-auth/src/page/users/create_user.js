import React from 'react';
import { LinksNavigation } from '../utils/linksNavigation';

const CreateUser = () => {
    

    return (
        <>
            <LinksNavigation />
            <h1>Create User APP</h1>

            <form>
                <p>
                    <label>Nome</label>
                    <input type="text" name='nome' placeholder='nome completo' />
                </p>
                <p>
                    <label>Email</label> 
                    <input type="email" name="email" placeholder='endereço de email' />
                </p>

                <div style={{ marginTop: "20px" }}>
                    <input type="submit" value="Create" />
                </div>
            </form>
        </>
    )
}

export default CreateUser;