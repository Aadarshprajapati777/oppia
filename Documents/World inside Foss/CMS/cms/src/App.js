import React from "react";
import MemberPage from "./components/memberpage";
import img1 from "./img1.jpg";
import img2 from "./img2.jpg";
import img3 from "./img3.png";


export default function App() {
  return (

    <div>
      <MemberPage  name="Aadarsh Prajapati" img={img1}/>
      <MemberPage  name="Aashray" img={img2}/>
      <MemberPage  name="Aniket"  img={img3}/>
      </div>
  )


}
