import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const UpdateCategori = (props) => {
  const navigate = useNavigate()
  const { id } = useParams() // lấy id từ url
  const [categori, setCategori] = useState({}) //khởi tạo state product 
  const [inputValue, setInputValue] = useState({}) //khởi tạo state inputValue
  useEffect(() => { //lấy product từ props.products
      const currentCategori = props.categories.find(categori => categori._id == id)//lấy product có id trùng với id từ url
      setCategori(currentCategori) //gán lại giá trị cho biến product
  }, [props]) //chạy lại khi props thay đổi

  const onHandleChange = (e) => { //lấy giá trị từ input
      const { name, value } = e.target //lấy name và value từ input
      setInputValue({ ...inputValue, [name]: value }) //gán lại giá trị cho biến inputValue
  }
  const onHandleSubmit = (e) => { //hàm thực thi khi chạy sự kiện submit form

      e.preventDefault()
      const updateData = { ...categori, ...inputValue } //lấy giá trị từ biến product và biến inputValue
      props.onUpdate(updateData); //gọi hàm onUpdate từ props truyền vào
      navigate("/admin/categories")
  }
    return(

<div>
      <h2 className="my-5">Update Sản Phẩm</h2>
      <form action="" onSubmit={onHandleSubmit}>
        <div className="mb-3">
          <label htmlFor="Name" className="form-label font-bold">Name</label>
          <input type="text" defaultValue={categori?.name} onChange={onHandleChange} className="form-control" name="name" aria-describedby="emailHelp" />
        </div> 
        <button type="submit" className="btn btn-primary bg-black">Update</button>
      </form>
    </div>
        
    )
}
export default UpdateCategori