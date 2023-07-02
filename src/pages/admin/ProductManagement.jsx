import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductManagement = (props) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(props.products);
  }, [props]);
  const removeProduct = (id) => {
    props.onRemove(id);
  };
  return (
    <div>
      <div>
        <p className="text-center font-bold text-[25px] py-4">
          Trang Quản Lý Sản Phẩm
        </p>
        <div className="flex">
          <div className="-ml-[50px]">
            <aside className="flex flex-col w-64 h-screen px-5 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700">
              <div className="flex flex-col justify-between flex-1 mt-6">
                <nav className="-mx-3 space-y-6 ">
                  <div className="space-y-3 ">
                    <label className="px-3  text-black font-bold text-[15px] dark:text-gray-400">
                      Danh mục sản phẩm
                    </label>
                    <a
                      className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                      href="#"
                    >
                      <svg
                        xmlns="https://www.flaticon.com/edge/redirect?url=aHR0cHM6Ly9hZG9iZS5wcmYuaG4vY2xpY2svY2FtcmVmOjEwMTFscmNLSy9jcmVhdGl2ZXJlZjoxMDExbDkwNzE3L3B1YnJlZjpHQTEuMi4xNTQzNDAxMjIuMTY3NjcwNzE3MC9kZXN0aW5hdGlvbjpodHRwcyUzQSUyRiUyRnN0b2NrLmFkb2JlLmNvbSUyRmltYWdlcyUyRmlkJTJGMzEyNTc5NzI4JTNGayUzRHBob25lJTI1MjBpY29u"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605"
                        />
                      </svg>

                      <span className="mx-2 text-sm font-medium">tai nghe</span>
                    </a>

                    <a
                      className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                      href="#"
                    >
                      <svg
                        xmlns="https://www.flaticon.com/edge/redirect?url=aHR0cHM6Ly9hZG9iZS5wcmYuaG4vY2xpY2svY2FtcmVmOjEwMTFscmNLSy9jcmVhdGl2ZXJlZjoxMDExbDkwNzE3L3B1YnJlZjpHQTEuMi4xNTQzNDAxMjIuMTY3NjcwNzE3MC9kZXN0aW5hdGlvbjpodHRwcyUzQSUyRiUyRnN0b2NrLmFkb2JlLmNvbSUyRmltYWdlcyUyRmlkJTJGMzEyNTc5NzI4JTNGayUzRHBob25lJTI1MjBpY29u"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605"
                        />
                      </svg>

                      <span className="mx-2 text-sm font-medium">Điện Thoại</span>
                    </a>

                    <a
                      className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                      href="#"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6"
                        />
                      </svg>

                      <span className="mx-2 text-sm font-medium">Laptop</span>
                    </a>
                  </div>
                </nav>
              </div>
            </aside>
          </div>
          <div className="ml-[100px]">
            <button>
              <Link
                to={"/admin/products/add"}
                className="border px-3 py-2 bg-black text-white hover:bg-green-600 rounded-lg no-underline"
              >
                Add
              </Link>
            </button>
            <div className="pt-2 w-[900px]">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Stt</th>
                    <th scope="col">Tên</th>
                    <th scope="col">Giá</th>
                    <th scope="col">ảnh</th>
                    <th scope="col">action</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((product, index) => {
                    return (
                      <tr className="hover:border-black" key={product._id}>
                        <th scope="row">{index + 1}</th>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td><img className="w-20 -mt-2" src={product.image} alt="" /></td>
                        <td className="space-x-2">
                          <button>
                            <Link
                              to={`/admin/products/update/${product._id}`}
                              className=" no-underline border px-3 py-2 bg-black text-white hover:bg-orange-600 rounded-lg"
                            >
                              Edit
                            </Link>
                          </button>
                          <button
                            onClick={() => removeProduct(product._id)}
                            className="border px-2 py-2 bg-black text-white hover:bg-red-700 rounded-lg"
                          >
                            delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <button>
        <Link
          to={"/admin"}
          className="border px-3 py-2 bg-black text-white  rounded-lg no-underline"
        >
          Back
        </Link>
      </button>

      <marquee
        className="my-5 py-2 font-bold bg-black rounded-lg text-white"
        direction="right"
        behavior="Alternate"
      >
        Trần Tiến Lương Thật Đẹp Trai ^^
      </marquee>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};
export default ProductManagement;
