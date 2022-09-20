import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const ProductList = ({ data }) => {
  const [filterProducts, setFilterProducts] = useState("")

  const products = useSelector(state => state.allProducts.products)
  console.log('productlist', products);
  return (
    <div>
      <input style={{ width: '350px', height: '20px', textAlign: 'center', marginTop: '10px' }}
        value={filterProducts}
        id='category'
        placeholder='search products here by category or name'
        type='text'
        onChange={event => setFilterProducts(event.target.value)}
      />
      <div>

      </div>
      <div className="product-list">
        {products.filter(product=>product.category.toLowerCase().includes(filterProducts)
         || product.title.toLowerCase().includes(filterProducts)).map(product => (
          <div key={product.id} className='product-preview'>
            <Link to={`/products/${product.id}`}>
              <div><img src={product.image} alt={product.title} /></div>
              <div className="product-description">
                <h2>{product.title}</h2>
                <h2>{`Price: ${product.price}`}</h2>
                <p>{`Category: ${product.category}`}</p>
              </div>
            </Link>
          </div>
        ))}

      </div>

    </div>
  );
}

export default ProductList;