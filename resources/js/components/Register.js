import React from 'react'

function Register() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h1 className="text-center mt-3">Register</h1>
          <div className="card">
            <div className="card-body">

              <form action="/register" method="POST">
                <div className="form-group">
                  <label htmlFor="name">Full name</label>
                  <input type="text" className="form-control" id="name" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email address</label>
                  <input type="email" className="form-control" id="email" />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input type="password" className="form-control" id="password" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register