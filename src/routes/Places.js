import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Place from "../components/Place";

function Places (){
    return (
        <>
        <Navbar/>
        <Hero 
        cName="hero-mid"
        heroImg="https://images.pexels.com/photos/1465997/pexels-photo-1465997.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        title="Places"
        desc="Penang, known as the Pearl of the Orient, is a vibrant Malaysian island that seamlessly blends history, culture, and natural beauty. From its UNESCO-listed George Town with colonial-era architecture and street art to its pristine beaches and lush hills, Penang offers something for every traveler. Explore iconic landmarks like Kek Lok Si Temple and Penang Hill, indulge in world-renowned street food, and soak in the island's rich heritage and scenic charm. A visit to Penang promises unforgettable experiences and memories."
        button="hide"/>
        <Place/>
        </>
    )
}

export default Places;