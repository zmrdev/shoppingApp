import { useState, useEffect } from "react";
import axios from "axios";
import ProductList from "./ProductList";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from '../actions/productActions'
const Home = () => {

    const allProducts = useSelector(state => state.allProducts)
    const { products } = allProducts
    const dispatch = useDispatch()

    const fetchProducts = async () => {
        const response = await axios.get("https://fakestoreapi.com/products")
            .catch(error => {
                console.log('err', error)
            })
        dispatch(setProducts(response.data));
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    // useEffect(() => {
    //     axios({
    //         method: 'GET',
    //         url: 'https://fakestoreapi.com/products'
    //     }).then(res => {
    //         console.log(res.data);
    //         setData(res.data)
    //         setLoading(false)
    //         setError(null)
    //     })
    //         .catch(error => {
    //             setError(error.message)
    //             console.log(error.message);
    //             setLoading(false)
    //         })
    // }, [])

    return (
        <div className="home">
            {Object.keys(products).length === 0 ? (
                <div>Loading...</div>
            ) : (<ProductList />)}
        </div>
    );
}

export default Home;