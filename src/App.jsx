import BasicForm from "./BasicForm"
import BasicTable from "./Table"
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/products')
      .then(response => {
        setProducts(response.data);
      })
  }, []);

  return (
   <>
    
    <BasicForm/>
    <BasicTable products={products}/>
   </>
  )
}

export default App
