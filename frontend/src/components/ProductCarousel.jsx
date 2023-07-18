// import { Link } from "react-router-dom"
// import { Carousel, Image } from "react-bootstrap"
// import Loader from './Loader'
// import Message from './Message'
// import { useGetTopProductsQuery } from "../slices/productsApiSlice"
// import product from "../../../backend/models/productModel"



// const ProductCarousel = () => {
//     const {data: products, isLoading, error} = useGetTopProductsQuery()

//     return isLoading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> : (
//         <Carousel pause= 'hover' className='bg-primary mb-4'>
//             {products.map(products => (
//                 <Carousel.Item key={product._id}>
//                     <Link to={`/products/${product._id}`}>
//                         <Image src={product.image} alt={product.name} fluid/>
//                         <Carousel.Caption>
//                         <h2>{product.name} (${product.price})</h2>
//                         </Carousel.Caption>
//                     </Link>
//                 </Carousel.Item>
//             ))}
//         </Carousel>
//     )
// }

// export default ProductCarousel