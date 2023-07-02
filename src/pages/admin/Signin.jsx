import React, { useState } from "react";
const Signin = (props) => {
 
  const {onSignIn } = props; 
  const [data, setData] = useState({})
  const onHandleChange = (e) => { 
const {name, value } = e.target; 
setData({...data, [name]: value})
  }
  const onHandleSubmit = (e) => { 
    e.preventDefault();
    onSignIn(data)
  }
    return(
            <div>
            <div className="flex items-center justify-center p-12">
              <div className="mx-auto w-full max-w-[550px]">
              <h2 className="mb-5 border w-[220px] pl-[30px] bg-black text-white py-2 rounded-lg">Đăng Nhập</h2>
                <form onSubmit={onHandleSubmit}>
                  <div className="mb-5">
                    <label  className="mb-2 block text-base font-medium text-[#07074D]">
                      Email
                    </label>
                    <input id="email" type="email" name="email" placeholder="email" onChange={onHandleChange} className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"/>
                  </div>
                  <div className="mb-5">
                    <label  className="mb-2 block text-base font-medium text-[#07074D]">
                      Password
                    </label>
                    <input id="passWord" type="passWord" name="password" placeholder="password" onChange={onHandleChange} className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"/>
                  </div>
                  <div>
                    <button type="submit" className=" mt-3 rounded-md  hover:bg-black bg-slate-900 py-3 px-8 text-base font-semibold text-white">
                      Đăng Nhập
                    </button>
                  </div>
                </form>
              </div>
            </div>
                    </div>
       
    )
}
export default Signin