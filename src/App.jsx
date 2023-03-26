import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Product from './components/Products/Product'

function App() {
  const [products, setProducts] = useState([])
  useEffect(() => {
    fetch('products.json')
    .then(res => res.json())
    .then(data => setProducts(data))
}, [])
console.log(products);
  return (
    <>
    <Navbar />
    <div className='product-container'>{products.map(product => <Product product={product} key={product.id}/>)}</div>
    </>
  )
}

export default App
