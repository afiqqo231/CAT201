import Hero   from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assets/1.jpg";

function About (){
    return (
        <>
        <Navbar/>
        <Hero
            cName="hero-mid"
            heroImg={AboutImg}
            title="About Penang"
            desc="intro"
            />
        </>
    )
}

export default About;