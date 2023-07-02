import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom";
import { getAllProduct, getProductId } from "../api/product";
import { getAllCategori } from "../api/categori";
const ProductTT = () => {
  const {id} = useParams()
  console.log(id);
  const[product, setProduct] = useState({});
  useEffect(()=>{
   getProductId(id).then((product)=>{
    setProduct(product.data);
   })
  },[])
  // console.log(product.categoriId?._id);
  const[products, setProducts] = useState([]);
  useEffect(()=>{
   getAllProduct().then((product)=>{
    setProducts(product.data);
   })
  },[]);
  // console.log(products);
  // const[categories, setCategories] = useState([]);
  // useEffect(()=>{
  //  getAllCategori().then((categori)=>{
  //   setCategories(categori.data);
  //  })
  // },[])
  const productSimilars = products.filter((pro) => pro._id !== id  )
    //  pro.categoriId == product.categoriId
    const productSimilar = productSimilars.filter((cate) => cate.categoriId == product.categoriId?._id)
  // console.log(productSimilars);
  console.log(productSimilar);
  
  let maxProductSimilar = productSimilar.slice(0, 4)
  console.log(maxProductSimilar);
  const click = () => {
    location.reload()
  }
    return(
        <div>
           <h2>Sản Phẩm Tương Tự</h2>
           <div className="grid grid-cols-4 gap-16">
                    {maxProductSimilar.map((product) => {
                      return (
                        <div key={product._id}>
                            <div className="mb-3">
                            <Link to={`/products/${product._id}`} ><img className="w-[250px] rounded-lg mb-2" onClick={() => {
                              click()

                            }} src={product.image} alt="" /></Link>
                            <Link className="no-underline text-black pt-2 text-[20px]" ><p>{product.name}</p></Link>
                            <h2 className="text-[20px] my-3">Giá: {product.price}đ</h2>
                            
                            <div className="space-x-4">
                            <button className="bg-black text-white px-5 py-2 rounded-lg">Buy</button>
                            <button className="bg-black text-white px-3 py-2 rounded-lg">Add to cart</button>
                            </div>
                            </div>
                            
                        </div>
                      )
                    })}
                        
                   
            </div>
            <marquee
        className="mt-3 py-2 font-bold bg-black rounded-lg text-white"
        direction="right"
        behavior="Alternate"
      >
        GoodBye See You Again !
      </marquee>
        </div>
    )
}
export default ProductTT