import Hero from "../components/Hero.js";
import Hotel from "../components/Hotel.js";
import Navbar from "../components/Navbar.js"
import YoutubeEmbed from "../components/YoutubeEmbed.js";

function Home (){
    return (
        <>
            <Navbar/>
            <Hero
            cName="hero"
            heroImg="https://images.unsplash.com/photo-1640876916541-6f865ce846b9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title="Welcome to Penang"
            desc="Penang, often called the 'Pearl of the Orient,' is a vibrant Malaysian state renowned for its rich history, diverse culture, and world-famous cuisine. From the heritage streets of George Town to stunning beaches and lush hills, Penang offers a perfect blend of tradition and modernity, making it a must-visit destination for travelers."
            button="hide"
            />
            <YoutubeEmbed embedId="gQ7bxektkU8?si=Ngw6X7-X62KzG4uO"/>
            <Hotel/>
        </>
    )
}

export default Home;