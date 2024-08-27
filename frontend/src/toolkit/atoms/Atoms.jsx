import React from "react"
const { useState } = require("react")
const { adminNavbar, userNavbar } = require("./Data")

let Navbar = ({ element }) => {
    console.log(element);


    const [role, setrole] = useState(element == "user" ? adminNavbar : userNavbar)
    console.log(role,"fhcuisdh");


    return (
        <>
            <nav className="navbar navbar-expand-lg d-flex align-items-center ">
                <div className="container">
                    <a className="navbar-brand" href="#"><img src="https://writer.ancorathemes.com/wp-content/uploads/2021/12/logo.png" alt="logo image" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="hrad-info d-flex flex-grow-1 align-items-center">
                            <ul className="navbar-nav justify-content-center flex-grow-1">
                                {
                                    role?.map((val, ind) => (
                                        <React.Fragment key={ind}>
                                            <li className="nav-item">
                                                <a className="nav-link" href={val.path}>{val.name}</a>
                                            </li>
                                        </React.Fragment>
                                    ))
                                }
                            </ul>
                            <div className="head-icon">
                                <span><i className="fa-solid fa-magnifying-glass"></i></span>
                                <span><i className="fa-regular fa-bookmark"></i></span>
                                <span><i className="fa-regular fa-circle-user"></i></span>
                            </div>
                        </div>

                    </div>
                </div>
            </nav>
        </>
    )
}

export { Navbar }