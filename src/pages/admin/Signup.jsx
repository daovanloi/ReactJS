
import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
const Signup = (props) => {
  const navigate = useNavigate()
  const [inputValue, setInputValue] = useState({})
  const onHandleChange = (e) => {
    setInputValue({ name: e.target.value });
    const name = e.target.name;
    const value = e.target.value;
    setInputValue({...inputValue, [name]: value});
  }
  const onHandleSubmit = (e) => {
    e.preventDefault();
    props.onAdd(inputValue)
    navigate(alert("Đăng ký tài khoản thành công !!!"))
    navigate('/signin')
  }
    return(
        <div>
            
<div className="flex items-center justify-center p-12">
  <div className="mx-auto w-full max-w-[550px]">
  <h2 className="mb-5 border w-[200px] pl-[40px] bg-black text-white py-2 rounded-lg">Đăng Ký</h2>
    <form onSubmit={onHandleSubmit} id="form-add" method="POST">
      <div className="mb-4">
        <label  className="mb-2 block text-base font-medium text-[#07074D]">
          name
        </label>
        <input onChange={onHandleChange} id="name" type="text" name="name" placeholder="Full Name" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"/>
      </div>
      <div className="mb-4">
        <label  className="mb-2 block text-base font-medium text-[#07074D]">
          Email
        </label>
        <input onChange={onHandleChange} id="email" type="email" name="email" placeholder="email" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"/>
      </div>
      <div className="mb-4">
        <label  className="mb-2 block text-base font-medium text-[#07074D]">
          Password
        </label>
        <input onChange={onHandleChange} id="passWord" type="passWord" name="password" placeholder="password" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"/>
      </div>
      <div className="mb-4">
        <label  className="mb-2 block text-base font-medium text-[#07074D]">
          Confirm Password
        </label>
        <input onChange={onHandleChange} id="confirmPassword" type="password" name="confirmPassword" placeholder="Confirm Password" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"/>
      </div>
      <div>
        <button type="submit" className=" mt-3 rounded-md  hover:bg-black bg-slate-900 py-3 px-8 text-base font-semibold text-white">
          Đăng Ký
        </button>
      </div>
    </form>
  </div>
</div>
        </div>
    )
}
export default Signup