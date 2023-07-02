import instance from "./instance";
const getAllProduct = () => {
    return instance.get('/api/products')
}
const getProductId = (id) => {
    return instance.get('/api/products/' +id)
}
const deleteProduct = (id) => {
    return instance.delete('/api/products/' +id)
}
const addProduct = (product) => {
    return instance.post('/api/products', product);
}

const updateProduct = (product) => {
    return instance.patch('/api/products/' + product._id, product)
}


const signup = (user) => {
    return instance.post('/api/signup', user);
}
const signin = (user) => {
    return instance.post('/api/signin', user);
}

export {getAllProduct, deleteProduct, addProduct, updateProduct, signup, signin, getProductId}