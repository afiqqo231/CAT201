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
        desc="Penang[a] is a Malaysian state located on the northwest coast of Peninsular Malaysia along the Strait of Malacca. It has two parts: Penang Island, where the capital city, George Town, is located, and Seberang Perai on the Malay Peninsula. These two halves are physically connected by the Penang Bridge and the Second Penang Bridge. The state shares borders with Kedah to the north and east, and Perak to the south."
        button="hide"/>
        </>
    )
}

export default About;