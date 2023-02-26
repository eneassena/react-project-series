import { useEffect, useState } from "react";
import CreatedProduct from "./components/CreatedProduct";
import DeletarProducts from "./components/DeletarProducts";
import { ListarProduct } from "./components/ListarProduct";
import UpdatedProduct from "./components/UpdatedProducts";
import ClientRest from "./data/API";

function listarProduct(data) {
  let res = ClientRest.get(data);
  return res
}

function App() {
  let [view, setView] = useState("");
  let [message, setMessage] = useState("");
  let [productSelecionado, setProductSelecionado] = useState({});
  const [data, setData] = useState([]);

  function getProducts() {
   let res = listarProduct()
   res.then(function(r) {
    let dados = r.data;
    setData(dados.data);
   })
  }

  function getProductSelecionado(product) {
    setProductSelecionado(product)
  }

  function createProduct(product) {
    let res = ClientRest.post(product);
    res.then((r) => listarProduct({}).then((r) => {
      let dados = r.data;
      setData(dados.data);
      setMessage(`Produto ${product.name} foi criado`)
      setView('Listar');
      })
    );
  }

  function updatedProduct(p) {
 
    let res = ClientRest.put(p)
    res.then(r => {
      listarProduct()
        .then(function(r) {
          let dados = r.data;
          setData(dados.data);
        })
        setMessage(`Produto ${productSelecionado.name} foi alterado`)
        setView('Listar')
    })
  }

  function deleteProduct(p){
    let res = ClientRest.delete(p)
    res.then(response => {
      listarProduct()
      .then(r => {
        setData(r.data.data)
        setMessage(`Produto ${productSelecionado.name} foi removido`)
        setView('Listar')

      })
    })
  }

  useEffect(() => {
    getProducts();
  }, []);



  return (
    <main className="container">
      <div >
        <div className="p-3 bg-secondary" style={{marginLeft: '20px'}}>
          <h1 className="text-white">API Rest Products</h1>
        </div>
 
        <div className="row">
          <ul className="nav justify-content-center">
            <li className="nav-link active" onClick={() => setView("Listar")} >Listar</li>
            <li className="nav-link" onClick={() => setView("Cadastrar")} >Cadrastar</li>
            <li className="nav-link" onClick={() => setView("Atualizar")} >Atualizar</li>
            <li className="nav-link" onClick={() => setView("Deletar")} >Deletar</li>
          </ul>
        </div>
    
        {message ? <div className="row alert alert-info">{message}</div> : ''}
        <hr />

        <div className="row">
          {view === 'Listar' ? (<ListarProduct products={data} selecionarProduct={getProductSelecionado} />) : ('')}

          {view === 'Cadastrar' ? (<CreatedProduct action={createProduct}  />) : ('')}

          {view === 'Atualizar' ? (<UpdatedProduct products={productSelecionado ? productSelecionado : {}} update={updatedProduct} />) : ('')}

          {view === 'Deletar' ? (<DeletarProducts products={productSelecionado ? productSelecionado : {}} delete={deleteProduct} />) : ('')}
        </div>

      </div>
    </main>
  );
}

export default App;
