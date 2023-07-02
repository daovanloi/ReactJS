import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const UpdateProduct = (props) => {
  const navigate = useNavigate()
  const { id } = useParams() // lấy id từ url
  const [product, setProduct] = useState({}) //khởi tạo state product 
  const [inputValue, setInputValue] = useState({}) //khởi tạo state inputValue
  useEffect(() => { //lấy product từ props.products
      const currentProduct = props.products.find(product => product._id == id)//lấy product có id trùng với id từ url
      setProduct(currentProduct) //gán lại giá trị cho biến product
  }, [props]) //chạy lại khi props thay đổi

  const onHandleChange = (e) => { //lấy giá trị từ input
      const { name, value } = e.target //lấy name và value từ input
      setInputValue({ ...inputValue, [name]: value }) //gán lại giá trị cho biến inputValue
  }
  const onHandleSubmit = (e) => { //hàm thực thi khi chạy sự kiện submit form

      e.preventDefault()
      const updateData = { ...product, ...inputValue } //lấy giá trị từ biến product và biến inputValue
      props.onUpdate(updateData); //gọi hàm onUpdate từ props truyền vào
      navigate("/admin/products")
  }
    return(

<div>
      <h2 className="my-5">Update Sản Phẩm</h2>
      <form action="" onSubmit={onHandleSubmit}>
        <div className="mb-3">
          <label htmlFor="Name" className="form-label font-bold">Name</label>
          <input type="text" defaultValue={product?.name} onChange={onHandleChange} className="form-control" name="name" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label font-bold">Price</label>
          <input type="number" defaultValue={product?.price} onChange={onHandleChange} className="form-control" name="price" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="Name" className="form-label font-bold">img</label>
          <input defaultValue={product?.image} onChange={onHandleChange} type="text" className="form-control" name="image" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="Name" className="form-label font-bold">description</label>
          <input defaultValue={product?.description} onChange={onHandleChange} type="text" className="form-control" name="description" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3 space-x-3">
          <label htmlFor="price" className="form-label font-bold">categori</label>
          <select name="categoriId" defaultValue={product?.categoriId} onChange={onHandleChange}>
            <option value=""></option>
           {/* {
            props.categories.map((categori)=>{
              return(
                <option value={categori._id}>{categori.name}</option>
              )
            })
           }  */}
          </select>
        </div>
        
        <button type="submit" className="btn btn-primary bg-black">Update</button>
      </form>
    </div>
        
    )
}
export default UpdateProduct