import React from "react";
import NotFound from "./NotFound";



const DeletarProducts = (props) => {
    let product = props.products;

    function deleteProduct(button)   {
        button.preventDefault();
        if(window.confirm('deseja realmente remover esse produto?')) {
            props.delete(product);
        }
    }

    return <>
        {product && Object.keys(product).length >0 ? <>
                <h1>Deletar Product: {product.name}</h1>
                <div className="col-sm-6">
                    <button className="btn btn-success" type='button' onClick={deleteProduct}>Remover Product</button>
                </div>
            </>
        : <NotFound page={'Delete Product'}/>}
    </>
}

export default DeletarProducts;