import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'

function Home() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/api/products')
      .then((response) => response.json())
      .then((products) => {
        setProducts(products);
      })
  }, [])

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">

          <div className="row mt-4 mb-4">
            <div className="col-8">
              <h1>You have {products.length} products.</h1>
            </div>
            <div className="col-4 text-right">
              <button className="btn btn-primary" type="button" title="Add product">+</button>
            </div>
          </div>

          <div className="row">
            <label className="col-sm-2 col-form-label text-right">Category:</label>
            <div className="col-sm-4">
              <select className="form-control" >
                <option>All</option>
                <option>Electronics</option>
              </select>
            </div>
            <label className="col-sm-2 col-form-label text-right">Sort:</label>
            <div className="col-sm-4">
              <select className="form-control" >
                <option>Name</option>
                <option>Category</option>
                <option>Expiry</option>
              </select>
            </div>
          </div>

          <hr />

          {products.map(product => <ProductCard key={product.id} product={product} />)}

        </div>
      </div>
    </div>
  )
}

export default Home
