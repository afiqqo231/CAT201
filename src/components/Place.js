import PlaceData from "./PlaceData"
import p1 from "../assets/p1.jpg"
import p2 from "../assets/p2.jpg"
import p3 from "../assets/p3.jpg"
import p4 from "../assets/p4.jpg"
import p5 from "../assets/p5.jpg"
import p6 from "../assets/p6.jpg"
import p7 from "../assets/p7.jpg"
import p8 from "../assets/p8.jpg"
import "./PlaceStyle.css"

const Place = () =>{
    return(
        <div className="place">
            <h1>Popular Places in Penang</h1>
            <p>There are many popular places to visit in Penang.</p>

            <PlaceData
            className="first-place"
            heading="Batu Ferringhi Beach"
            paragraph="Batu Ferringhi Beach is an adventure land where you can get your adrenalin racing while on a leisure holiday. The availability of Jet Skis and Parasailing sports by the seaside is a major lure that pulls every tourist who visits this town in Penang."
            img1={p1}
            img2={p2}
            />

            <PlaceData
            className="first-place-reverse"
            heading="Entopia Teluk Bahang"
            paragraph="Entopia, a tropical sanctuary for our planet's little denizens from those that fly freely in the sky to the ones that creep stealthily beneath the ground. Journey into a magical paradise that honours the unsung heroes of our natural world with plenty to discover from outdoor adventures to cavernous mysteries and a multi-storey Indoor Discovery Centre. Live the moment with exciting interactive workshops and activities. There's something for everyone. Join us to experience the seen and unseen in Nature. We are the voice of nature."
            img1={p3}
            img2={p4}
            />

            <PlaceData
            className="first-place"
            heading="Georgetown"
            paragraph="The beauty and rich history of George Town keeps tourists flocking all year round. George Town offers views of the famous Cheong Fatt Tze Mansion, Kapitan Keling Mosque and many of the capital's golden crowned Buddhist temples.  With museums showcasing the country's rich-historical treasures, restaurants that offer classic Malaysian cuisine and dozens of shopping malls, there's guaranteed to be something for everyone to see. "
            img1={p5}
            img2={p6}
            />

            <PlaceData
            className="first-place-reverse"
            heading="Padang Kota Lama"
            paragraph="Padang Kota Lama in George Town, Penang, is a vibrant destination blending history, culture, and scenic beauty. Steeped in colonial heritage, it features landmarks like the City Hall and Town Hall, along with the Penang State Museum and Art Gallery, offering insights into the island's rich past. Fort Cornwallis, Malaysia's largest standing fort, adds a glimpse into military history, while the landscaped seafront promenade provides relaxing strolls with coastal views. Nearby hawker centers serve iconic Penang street foods, making it a must-visit spot for history enthusiasts, food lovers, and those seeking relaxation.
"
            img1={p7}
            img2={p8}
            />
        </div>
    )
}

export default Place;