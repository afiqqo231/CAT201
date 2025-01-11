import "./HotelStyle.css"
import HotelData from "./HotelData"
function Hotel(){
    return(
        <div className="hotel">
            <h1>Suggested Hotel</h1>
            <p>Before going deeper into Penang, take a look at out top picks for hotel in Penang.</p>
            <div className="hotelcard">
                <HotelData
                img="https://cf.bstatic.com/xdata/images/hotel/max1024x768/136176698.jpg?k=c7a7a00b8f0f94fcdb5f25617c49b05dbeca7c87c88bdd28dcb0fa9eda9c1b25&o=&hp=1"
                hname="Parkroyal Penang Resort"
                url="https://www.tripadvisor.com.my/Hotel_Review-g635527-d306935-Reviews-PARKROYAL_Penang_Resort-Batu_Ferringhi_Penang_Island_Penang.html"
                text="PARKROYAL Penang Resort is a five-star beach resort located along the beautiful shorelines of Penang. The resort nestled in a lush tropical greenery setting offers unparalleled experiences from exquisite gourmet dining, state-of-the-art facilities and a host of family-friendly activities where curated experiences are brought to life."
                />
                <HotelData
                img="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/01/55/fb/ac/swimming-pool.jpg?w=600&h=-1&s=1"
                hname="Hard Rock Hotel Penang"
                url="https://www.tripadvisor.com.my/Hotel_Review-g635527-d1485478-Reviews-Hard_Rock_Hotel_Penang-Batu_Ferringhi_Penang_Island_Penang.html"
                text="The Hard Rock Hotel Penang garners praise for its comfortable rooms with scenic views and direct pool access, though some guests suggest improvements in cleanliness and decor. Its prime beachfront location near night markets and attractions is a consistent hit among travelers."
                />
                <HotelData
                img="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/ed/90/e3/main-pool--v4200283.jpg?w=2400&h=-1&s=1"
                hname="Shangri-La Rasa Sayang, Penang"
                url="https://www.tripadvisor.com.my/Hotel_Review-g635527-d302166-Reviews-Shangri_La_Rasa_Sayang_Penang-Batu_Ferringhi_Penang_Island_Penang.html"
                text="Overlooking Batu Feringgi Beach, Shangri-La Rasa Sayang, Penang offers spacious rooms surrounded by 30 acres of tropical gardens. It features two outdoor swimming pools in the Garden Wing and one adult pool in the Rasa Wing. Free WiFi is available throughout the property. Hotel offers free shuttle services to the UNESCO heritage city of George Town. Rasa Sayang has a 9-hole golf course and an Eco Center. Guests can workout at the well-equipped gym or enjoy massages and treatments like aromatherapy at Chi, The Spa. The swimming pools and yoga pavilion are other good relaxation options."
                />
            </div>
        </div>
    )
}

export default Hotel;