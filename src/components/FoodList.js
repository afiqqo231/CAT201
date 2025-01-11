import PlaceData from "./PlaceData"
import "./PlaceStyle.css"

const FoodList = () =>{
    return(
        <div className="food-list">

            <PlaceData
            className="first-place"
            heading="Roti Canai Transfer Road"
            paragraph="For over 20 years, the roti canai stall on Transfer Road has been a favorite among both locals and visitors. There's no better way to enjoy a meal here than pairing their fluffy roti canai with a bowl of fragrant, spicy chicken curry, accompanied by a cup of creamy, sweet teh tarik. For breakfast lovers, their roti bakar topped with perfectly cooked half-boiled eggs is a must-try and a delightful way to start the day!"
            img1="https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_1000/v1615197003/blog/d875edzaezjaauav0l4f.jpg"
            img2="https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_1000/v1615351770/blog/tzlybjv4wzp36ysblfei.jpg"
            />

            <PlaceData
            className="first-place-reverse"
            heading="Nasi Padang Minang Transfer Road"
            paragraph="Another hidden gem along Transfer Road is a nasi padang Minang stall nestled within Kedai Kopi International Hotel. Serving up hearty Minangkabau-style dishes from Padang, Indonesia, this stall offers a variety of flavorful, homecooked meals paired with steamed rice. Lunchtime can get busy, so arriving early is highly recommended to savor the best dishes before they’re gone!"
            img1="https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_1000/v1624018831/blog/iqc5yuuup58arpe5rb1u.jpg"
            img2="https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_1000/v1624019260/blog/frrywfn72sy1r8sccnso.jpg"
            />

            <PlaceData
            className="first-place"
            heading="Deens Maju Nasi Kandar"
            paragraph="Get ready to brave a little heat and queueing to taste the nasi kandar at Deens Maju, but trust us—it’s absolutely worth it! A beloved spot among locals and tourists alike, this restaurant is renowned for its nasi kandar, a flavorful medley of curries, sambal, and succulent meats. Despite the crowd, the service is impressively quick—your plate of rice will be ready in seconds, and the line moves surprisingly fast!"
            img1="https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_1000/v1624020025/blog/bs5dei4sdisqb2crcet5.jpg"
            img2="https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_1000/v1624020552/blog/cldjbunwqfzyjc1cvdzn.jpg"
            />

            <PlaceData
            className="first-place-reverse"
            heading="Hameed Pata Special Mee Sotong"
            paragraph="Tucked inside the Esplanade Park Food Court, the Hameed Pata Mee Sotong stall is a must-visit for some of the best mee sotong on the island. For just RM5, you can savor their signature fried noodles, prepared fresh with sambal squid for a delightful mix of sweet and spicy flavors. Pair your meal with a refreshing coconut shake from the neighboring stall for the perfect culinary combo!"
            img1="https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_1000/v1624020745/blog/xtlcsvhuh1c9e012x1kh.jpg"
            img2="https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_1000/v1624021276/blog/it6a82vso57mpvdredqo.jpg"
            />
        </div>
    )
}

export default FoodList;