import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
const ProductPage = (props) => {
    const [data, setData] = useState([]);
    useEffect(()=>{
        setData(props.products)
    },[props])
    let maxData = data.slice(0, 16)
    return (
        <div>
            <img className="w-full h-[500px]" src="https://theme.hstatic.net/1000306633/1000891824/14/slideshow_3.jpg?v=488" alt="" />
            <div className="bg-black h-[70px] mt-4">
                <ul className="flex space-x-10 -ml-6 pt-4">
                    <li><a className="text-white no-underline font-bold" href="">SHOPALL</a></li>
                    <li><a className="text-white no-underline font-bold" href="">OUTERWEAR</a></li>
                    <li><a className="text-white no-underline font-bold" href="">FOOTWEAR</a></li>
                    <li><a className="text-white no-underline font-bold" href="">SALE</a></li>
                    <li><a className="text-white no-underline font-bold" href="">RECRUITMENT</a></li>
                </ul>
            </div>
            
            <marquee
        className="my-4 py-2 font-bold bg-black rounded-lg text-white"
        direction="right"
        behavior="Alternate"
      >
       Welcome to Dao Van Loi shop 
      </marquee>
      <div className="mb-10 text-[30px] text-center font-bold" >Sản phẩm Hot</div>
            <div className="grid grid-cols-4 gap-16">
            {
                maxData.map(product => {
                    
                    
                    return (
                        <div key={product.id}>
                            <div className="mb-3">
                            <Link to={`/products/${product._id}`}><img className="w-[250px] rounded-lg mb-2" src={product.image} alt="" /></Link>
                            <Link className="no-underline text-black pt-2 text-[20px]" to={`/products/${product._id}`}><p>{product.name}</p></Link>
                            <h2 className="text-[20px] my-3">Giá: {product.price}đ</h2>
                            
                            <div className="space-x-4">
                            <button className="bg-black text-white px-5 py-2 rounded-lg">Buy</button>
                            <button className="bg-black text-white px-3 py-2 rounded-lg">Add to cart</button>
                            </div>
                            </div>
                            
                        </div>
                    )
                   
                })
            }
            </div>
            <marquee
        className="mt-3 py-2 font-bold bg-black rounded-lg text-white"
        direction="right"
        behavior="Alternate"
      >
        GoodBye See You Again!
      </marquee>
        </div>
    )
}
export default ProductPage