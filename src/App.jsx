
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';  
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import React,{useEffect, useState} from "react";
import ProductPage from "./pages/Product";
import HomePage from "./pages/HomePage";
import ProductDetail from "./pages/ProductDetail";
import { deleteProduct,getAllProduct, addProduct, updateProduct, signin, signup} from './api/product';
import { getAllCategori, addCategori, updateCategori, deleteCategori } from './api/categori';
import DashBoard from "./pages/admin/DashBoard";
import ProductManagement from "./pages/admin/ProductManagement";
import AddProduct from "./pages/admin/AddProduct";
import UpdateProduct from "./pages/admin/UpdateProduct";
import Signin from './pages/admin/Signin';
import Signup from './pages/admin/Signup';
import axios from 'axios';
import { Navigate, Outlet } from 'react-router-dom';
import PageNotFound from './pages/PageNotFound';
import WebsiteLayout from './pages/layouts/WebsiteLayout';
import AdminLayout from './pages/layouts/AdminLayout';
import ListDm from './pages/admin/ListDm';
import AddCategori from './pages/admin/AddCategori';
import UpdateCategori from './pages/admin/UpdateCategori';
function App() {
 const navigate = useNavigate()
  const [products, setProduct] = useState([])
  useEffect(()=>{
    // fetch(`http://localhost:3000/products`)
    // .then(response => response.json())
    // .then((data) => setProducts(data))
    getAllProduct().then(({data})=>setProduct(data))
  },[])
  const [categories, setCategori] = useState([])
  useEffect(()=>{
    // fetch(`http://localhost:3000/products`)
    // .then(response => response.json())
    // .then((data) => setProducts(data))
    getAllCategori().then(({data})=>setCategori(data))
  },[])

  const onRemoveCategori = (id) => {
    deleteCategori(id).then(()=>setCategori(categories.filter(categori => categori._id !== id)))
  }

  const onHandleRemove = (id) => {
    deleteProduct(id).then(()=>setProduct(products.filter(product => product._id !== id)))
  }

  const onHandleUpdate = (product) => {
    updateProduct(product).then(() => setProduct(products.map(item => item._id === product._id ? product : item)))
  }

  const onUpdateCategori = (categori) => {
    updateCategori(categori).then(() => setCategori(categories.map(item => item._id === categori._id ? categori : item)))
  }

  const onHandleAdd = (product) => {
    addProduct(product).then(()=>setProduct([...products, product]))
  }

  const onAddcategori = (categori) => {
    addCategori(categori).then(()=>setCategori([...categories, categori]))
  }

  const onHandleSignup = (user) => {
    signup(user).then(()=>setUser([...users, user]))
  }


  //SIGN IN 
  const onHandleSignIn = (user) => { 
axios.post(`http://localhost:8080/api/signin`, user).then((res) => { 
  const token = res.data.accessToken;
  localStorage.setItem('accessToken', token)
  navigate('/admin')
  alert('Dang nhap thanh cong')
})
  }

  //check dang nhap 
  const AdminWrapper =() => {
    const isAdmin =  localStorage.getItem('accessToken')
    return isAdmin ? <Outlet /> : <Navigate to="/" replace />;
  };
  return (
    <div className="App">
  
     <Routes>
     <Route path='/' element={<WebsiteLayout/>}>
      <Route index element={<HomePage />} />
     <Route path='/products' element={<ProductPage products={products} onRemove={onHandleRemove}/>} />
     <Route path='/products/:id' element={<ProductDetail />} />
     <Route path='/signup' element={<Signup onAdd={onHandleSignup}/>} />
     <Route path='/signin' element={<Signin onSignIn={onHandleSignIn}/>} />
     </Route>
    {/* Admin Router */}
    
     <Route path='/admin' element={<AdminLayout />}>
     <Route path='/admin' element={<AdminWrapper />}>
     <Route index element={<DashBoard/>} />
     <Route path='/admin/products' element={<ProductManagement products={products} onRemove={onHandleRemove} />} />
     <Route path='/admin/categories' element={<ListDm categories={categories} onRemove={onRemoveCategori} />} />
     <Route path='/admin/categories/add' element={<AddCategori onAdd={onAddcategori} />} />
     <Route path='/admin/categories/update/:id' element={<UpdateCategori categories={categories} onUpdate={onUpdateCategori} />} />
     <Route path='/admin/products/add' element={<AddProduct onAdd={onHandleAdd} categories={categories}/>} />
     <Route path='/admin/products/update/:id' element={<UpdateProduct products={products} onUpdate={onHandleUpdate} />} />
    </Route>
    </Route>
    <Route path='*' element={<PageNotFound/>}></Route>
     </Routes>
     {/* useParams() */}
   
    </div>

  )
}

export default App
