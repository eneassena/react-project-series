import React, {useState} from "react";
import NotFound from './NotFound';

const UpdatedProduct = (props) => {
    const [name, setName] = useState(props.products ? props.products.name : '');
    const [type, setType] = useState(props.products ? props.products.type : '');
    const [count, setCount] = useState(props.products ? props.products.count : '');
    const [price, setPrice] = useState(props.products ? props.products.price : '');

    function updatedProduct(form) {
        form.preventDefault();
        
        if(name && type && count && price) {
            let product = {
                id: props.products.id,
                name,
                type,
                count: Number(count), 
                price: Number(price)
            }
            props.update(product)
        } else {
            window.alert('product invalid')
        }
    }
    
    let form = <>
                    <h1 className="text-center text-dark">Updated Product</h1>
                    <form onSubmit={updatedProduct}  className="p-3">
                    <div>
                        {/* <label>Name:</label> */}
                        <input 
                            className="form-control form-control-lg"
                            placeholder="Name Product"
                            aria-label="Name Product"
                            type={'text'} 
                            value={name}
                            onChange={(field) => setName(field.target.value)} 
                            />
                    </div>
                    <div className="mt-2">
                        {/* <label>Type:</label> */}
                        <input 
                            className="form-control form-control-lg"
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
    
    if (props.products && Object.keys(props.products).length >0) {
        return form;
    }
    
    return <NotFound page={'Update Product'}/>
}

export default UpdatedProduct;