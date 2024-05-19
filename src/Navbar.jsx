import React from 'react'
import './navbar.css'
const Navbar = () => {
  return (
    <>
    
<nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top py-2 navbar-transparent">
    <div className="container-fluid py-0 d-flex align-items-center" style={{marginLeft: "2rem"}}>

      



        <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
        </button>


        <div className="d-flex justify-content-startalign-content-start">
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav ms-auto" style={{fontFamily: 'Segoe UI' , fontWeight:"400"}}>

                    <a href="vendormanagement" className="nav-item nav-link active "><h5 className="fw-bolder">Contact Us</h5></a>



                    <a href="fea" className="nav-item nav-link active "><h5 className="fw-bolder">About Us</h5></a>








                </div>
            </div>
        </div>

    </div>
</nav>


    </>
  )
}

export default Navbar