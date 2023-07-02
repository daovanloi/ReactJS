
import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

const AddProduct = (props) => {
  console.log(props.categories);
  const navigate = useNavigate()
  const [inputValue, setInputValue] = useState({})
  const onHandleChange = (e) => {
    setInputValue({ name: e.target.value });
    const name = e.target.name;
    const value = e.target.value;
    // console.log(name);
    setInputValue({...inputValue, [name]: value});
  }
  console.log(inputValue);
  const onHandleSubmit = (e) => {
    e.preventDefault();
    props.onAdd(inputValue)
    navigate('/admin/products')
    location.reload()
    
  }
  return (
    <div>
      <h2 className="my-5">Thêm Sản Phẩm</h2>
      <form action="" onSubmit={onHandleSubmit}>
        <div className="mb-3">
          <label htmlFor="Name" className="form-label font-bold">Name</label>
          <input onChange={onHandleChange} type="text" className="form-control" name="name" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="Name" className="form-label font-bold">img</label>
          <input onChange={onHandleChange} type="text" className="form-control" name="image" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label font-bold">Price</label>
          <input onChange={onHandleChange} type="number" className="form-control" name="price" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label font-bold">Descriprion</label>
          <input onChange={onHandleChange} type="text" className="form-control" name="description" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3 space-x-3">
          <label htmlFor="price" className="form-label font-bold">categori</label>
          <select name="categoriId" onChange={onHandleChange}>
            <option value=""></option>
           {
            props.categories.map((categori)=>{
              return(
                <option value={categori._id}>{categori.name}</option>
              )
            })
           } 
          </select>
        </div>
        
        
        <button type="submit" className="btn btn-primary bg-black">Add</button>
      </form>
    </div>
  );
};

export default AddProduct;
