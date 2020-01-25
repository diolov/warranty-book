import React from 'react'

function ProductCard({ product }) {
  return (
    <div className="card mb-2">
      <div className="card-body">
        <div className="row">
          <div className="col-3 col-md-3 col-lg-2">
            <img className="img-fluid" src={`http://robohash.org/${product.id}`} />
          </div>
          <div className="col-6 col-md-6 col-lg-8">
            <h3 className="mb-0">{product.name}</h3>
            <p className="text-muted">Electronics</p>
            <div class="progress mb-1" style={{ height: "5px" }}>
              <div className="progress-bar" role="progressbar" style={{ width: "25%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <div><strong>Expires:</strong> 10/09/2020</div>
          </div>
          <div className="col-3 col-md-3 col-lg-2">
            <div className="dropdown float-right">
              <button class="btn btn-light"
                type="button"
                id="productMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false">
                ...
              </button>
              <div className="dropdown-menu dropdown-menu-right" aria-labelledby="productMenuButton">
                <a className="dropdown-item" href="#">Edit</a>
                <a className="dropdown-item" href="#">Delete</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard