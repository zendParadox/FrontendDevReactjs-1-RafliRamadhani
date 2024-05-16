export default function Navbar() {
    return(
    <>
        <nav className="navbar navbar-expand-lg bg-body-light border-bottom border-top" >
            <div className="container-fluid m-2">
              <div className="text"><h6>Filter By: </h6></div>
              <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <button className="btn mx-3 border-bottom border-0" aria-current="page" href="#">Open Now</button>
                  <div className="dropdown mx-3">
                    <button className="btn dropdown-toggle border-bottom border-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">Categories</button>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Modern</a></li>
                        <li><a className="dropdown-item" href="#">Italia</a></li>
                    </ul>
                  </div>
                  <div className="dropdown mx-3">
                    <button className="btn dropdown-toggle border-bottom border-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">Menu</button>

                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Foods</a></li>
                        <li><a className="dropdown-item" href="#">Drinks</a></li>
                    </ul>
                  </div>
                </ul>
                <button className="btn btn-outline-primary px-4 rounded-0" type="submit">CLEAR ALL</button>
              </div>
            </div>
          </nav>
    </>
    )
}