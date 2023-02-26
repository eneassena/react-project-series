import React, { useState } from "react";

const CreatedProduct = (props) => {
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [count, setCount] = useState('');
    const [price, setPrice] = useState('');

    function saveProduct(form) {
        form.preventDefault();

        if(name && type && count && price) {
            let product = {
                name:name,
                type:type,
                count: Number(count),
                price: Number(price)
            }
            clean()
            props.action(product)
        } else {
            alert('produto invalido para cadastro')
        }
    }

    function clean() {
        setName('');
        setCount('');
        setType('');
        setPrice('');
    }


    return (
        <>
        <h1 className="text-center text-dark">Create New Product</h1>

        
        <form onSubmit={saveProduct} className="p-3">
            
            
            <div>
                {/* <label>Name:</label> */}
                <input 
                    className="form-control form-control-lg"
                    placeholder="Name Product"
                    aria-label="Name Product"
                    type={'text'} 
                    value={name}
                    onChange={(field) => setName(field.target.value)} />
            </div>
            <div className="mt-2">
                {/* <label>Type:</label> */}
                <input 
                    className="form-control form-control-lg "
                    placeholder="Type Product"
                    aria-label="Type Product" 
                    type={'text'} 
                    value={type}
                    onChange={(field) => setType(field.target.value)}
                    />
            </div>
            <div className="mt-2">
                {/* <label>Count:</label> */}
                <input 
                    className="form-control form-control-lg"
                    placeholder="Count Product"
                    aria-label="Count Product"
                    type={'number'} 
                    value={count}
                    onChange={(field) => setCount(field.target.value)}
                />
            </div>
            <div className="mt-2">
                {/* <label>Price:</label> */}
                <input 
                    className="form-control form-control-lg"
                    placeholder="Price Product"
                    aria-label="Price Product"
                    type={'number'} 
                    value={price}
                    onChange={(field) => setPrice(field.target.value)} />
            </div>
            <div>
                <button type="submit" className="btn btn-primary mt-5">Enviar</button>
            </div>
        </form>  
        </>
    );
}

export default CreatedProduct;