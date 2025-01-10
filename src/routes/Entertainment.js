import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutImg from "../assets/1.jpg";

function Entertainment (){
    return (
        <>
        <Navbar/>
        <Hero cName="hero-mid" heroImg={AboutImg} title="Entertainment" desc="intro" button="hide"/>
        </>
    )
}

export default Entertainment;