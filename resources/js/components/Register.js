import React, { useState } from 'react'

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault()

    // const formData = new FormData()
    // formData.append('name', name)
    // formData.append('email', email)
    // formData.append('password', password)

    var formData = new URLSearchParams();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('password', password);

    fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: formData
    })
      .then((response) => response.json())
      .then((user) => {
        console.log(user);
        //setProducts(products);
      })
  }

  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;

    if (target.id == 'email') {
      setEmail(value)
    } else if (target.id == 'password') {
      setPassword(value)
    } else if (target.id == 'name') {
      setName(value)
    }
  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h1 className="text-center mt-3">Register</h1>
          <div className="card">
            <div className="card-body">

              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    onChange={handleInputChange}
                    value={name}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    onChange={handleInputChange}
                    value={email}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    onChange={handleInputChange}
                    value={password}
                  />
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