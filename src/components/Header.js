import React from 'react'

const Header = () => {
  return (
    <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
        {/* <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"/></svg> */}
        <span class="fs-4">Logo</span>
      </a>
      <nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto">
        <a class="me-3 py-2 text-decoration-none" href="/yatras">Yatras</a>
        <a class="me-3 py-2 text-decoration-none" href="/temples">Temples</a>
        <a class="me-3 py-2 text-decoration-none" href="/signup">Sign Up</a>
        <a class="me-3 py-2 text-decoration-none btn btn-primary" href="/login">Login</a>
      </nav>
    </header>
  )
}

export default Header