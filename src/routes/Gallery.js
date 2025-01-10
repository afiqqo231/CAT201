import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

function Gallery (){
    return (
        <>
        <Navbar/>
        <Hero cName="hero-mid" heroImg="https://images.pexels.com/photos/1465997/pexels-photo-1465997.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" title="Gallery" desc="intro" button="hide"/>
        </>
    )
}

export default Gallery;