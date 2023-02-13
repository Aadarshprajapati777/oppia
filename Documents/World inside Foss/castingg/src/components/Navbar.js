import React from "react";
import Home from "./Home";
import "./navbar.css";
import About from "./About";
import Contact from "./Contact";
import Signup from "./Signup";
import Signin from "./Signin";


// export default function Navbar() {
//     return (
//         <div>
//             <Home className="Home" />
//             <About className="About" />
//             <Contact className="Contact" />
//             <Signup className="Signup" />
//             <Signin className="Signin" />



//         </div>
//     );
// }

export default function Navbar () {
    return (
        <div className="nav">
            <Home className="Home" />
            <About className="About" />
            <Contact className="Contact" />
            <Signup className="Signup" />
            <Signin className="Signin" />
        </div>
    );
}