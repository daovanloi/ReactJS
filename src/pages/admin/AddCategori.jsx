
import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

const AddCategori = (props) => {
  const navigate = useNavigate()
  const [inputValue, setInputValue] = useState({})
  const onHandleChange = (e) => {
    setInputValue({ name: e.target.value });
    const name = e.target.name;
    const value = e.target.value;
    // console.log(name);
    setInputValue({...inputValue, [name]: value});
  }
  const onHandleSubmit = (e) => {
    e.preventDefault();
    props.onAdd(inputValue)
    navigate('/admin/categories')
  }
  return (
    <div>
      <h2 className="my-5">Thêm Danh Muc</h2>
      <form action="" onSubmit={onHandleSubmit}>
        <div className="mb-3">
          <label htmlFor="Name" className="form-label font-bold">Name</label>
          <input onChange={onHandleChange} type="text" className="form-control" name="name" aria-describedby="emailHelp" />
        </div>
        <button type="submit" className="btn btn-primary bg-black">Add</button>
      </form>
    </div>
  );
};

export default AddCategori;
