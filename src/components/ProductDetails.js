import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from "react-router-dom";
import { selectedProduct, removeSelectedProduct } from '../actions/productActions'

const ProductDetails = () => {
  const product = useSelector(state => state.product)
  const { id } = useParams()
  const dispatch = useDispatch()
  console.log(product);
  const fetchProductDetail = async () => {
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
      .catch(error => {
        console.log('err', error)
      })
    dispatch(selectedProduct(response.data))
  }

  useEffect(() => {
    if (id && !id == '') {
      fetchProductDetail()
      return () => {
        dispatch(removeSelectedProduct())
      }
    }
  }, [id])
  return (
    <div className="product-details">
      {Object.keys(product).length === 0 ? (
        <div>Loading...</div>
      ) : (<div>
        <img src={product.image} alt={product.title} />
        <h2>{product.title}</h2>
        <h2>{product.price}</h2>
        <h3>{product.category}</h3>
        <p>{product.description}</p>
        <button>Add to cart</button>
      </div>
      )}
    </div>
  );
}

export default ProductDetails;