import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Header from './Pages/Header';
import Contact from './Pages/Contact';
import Footer from './Pages/Footer';
import ProductList from './Pages/ProductList';
import SinglePage from './Pages/Common/SinglePage';
import CartComp from './Pages/CartComp';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/Cart' element={<CartComp/>}/>
        <Route path='/product' element={<ProductList/>}/>
        <Route path='/singlepage/:id' element={<SinglePage/>}/>
      </Routes>
      <Footer />    
    </>
  )
}

export default App;

// import React, { createContext, useEffect, useState } from 'react'
// import Header from './NewComponent/Header';
// import Home from './NewComponent/Home';
// import { Route, Routes } from 'react-router-dom';
// import axios from 'axios';
// import Single from './NewComponent/Single';

// export let DataContext=createContext();

// function App() {
//   let [data,setData]=useState([])
//   const fetchData = async() =>{
//     const data = await axios.get("https://jsonplaceholder.typicode.com/users");
//     setData(data.data)
//    }   

//    useEffect(()=>{
//   fetchData()
//    },[])


//   return (
//     <>
//     <Header/>
//     <Routes>
//       <Route path='/' element={<Home data={data}/>}/>
//       <Route path='/single/:id' element={<Single data={data}/>}/>
//     </Routes>
//     </>
//   )
// }

// export default App

// import React, { useState } from 'react';
// // import List from './Assignment/List';
// // import InputAss from './Assignment/InputAss';
// import Product from './Assignment/Product'

// function App() {
//   let [color,setColor]=useState('');
//   return (
//     <>
//       {/* <List/> */}
//       {/* <InputAss/> */}
//      <input type='text' placeholder='enter color' onChange={(e)=>setColor(e.target.value)}/>
//       <Product color={color}/>
//     </>
//   )
// }


// export default App;

// import React from 'react'
// import Card from './Assignment/Test'

// function App() {
//   return (
//     <>
//      <Card title="Card Title">
//         <p>This is some content inside the card.</p>
//         <button className='btn btn-primary'>Click me</button>
//       </Card>
//     </>
//   )
// }

// export default App

