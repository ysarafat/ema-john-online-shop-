import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'

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
    </>
  )
}

export default App
