import React from "react"
import NotFound from "./NotFound"

export const ListarProduct = (props) => {
    function selectProdut(product){
        props.selecionarProduct(product)
    }

    return (
        <>
        <h1>Listagem de produtos</h1>
        <table className="table table-response">
            <thead>
                <tr>
                    <th>#ID</th>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Count</th>
                    <th>Price</th>
                    <th>Selecione product</th>
                </tr>
            </thead>
            <tbody>

            {props.products ? props.products.map((el, index) => {
                return( <tr key={el.id}>
                        <td>{el.id}</td>
                        <td>{el.name}</td>
                        <td>{el.type}</td>
                        <td>{el.count}</td>
                        <td>{el.price}</td>
                        <td><a href="#" onClick={() => selectProdut(el)}>{el.name}</a></td>
                    </tr>)
                }) : (
                <NotFound />
            )}
            </tbody>
        </table>
        </>
    )
}

export const ListarProductById = (props) => {
    return (
        <>
            <h1>produto {props.product.name}</h1>
            <table>
                <thead>
                    <tr>
                        <th>#ID</th>
                        <th>Name</th>
                        <th>Count</th>
                        <th>Type</th>
                        <th>Count</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr key={props.product.id}>
                        <td>{props.product.id}</td>
                        <td>{props.product.name}</td>
                        <td>{props.product.type}</td>
                        <td>{props.product.count}</td>
                        <td>{props.product.price}</td>
                    </tr> 
                </tbody>
            </table>
        </>
    )
}