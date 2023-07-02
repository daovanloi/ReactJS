import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ListDm = (props) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(props.categories);
  }, [props]);
  const removeCategori = (id) => {
    props.onRemove(id);
  };
  return (
    <div>
      <div>
        <p className="text-center font-bold text-[25px] py-4">
          Trang Quản Lý Danh Muc
        </p>
        <div>
          <div className="ml-[100px]">
            <button>
              <Link
                to={"/admin/categories/add"}
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
                    <th scope="col">action</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((categori, index) => {
                    return (
                      <tr className="hover:border-black" key={categori._id}>
                        <th scope="row">{index + 1}</th>
                        <td>{categori.name}</td>
                        <td className="space-x-2">
                          <button>
                            <Link
                              to={`/admin/categories/update/${categori._id}`}
                              className="no-underline border px-3 py-2 bg-black text-white hover:bg-orange-600 rounded-lg"
                            >
                              Edit
                            </Link>
                          </button>
                          <button
                            onClick={() => removeCategori(categori._id)}
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
export default ListDm;
