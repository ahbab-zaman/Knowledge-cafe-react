import { useEffect, useState } from "react";
import Card from "./Card";

const Cards = ({handleBookmark,handleReadingTime}) => {
    const [cards, setCards] = useState([]);
    useEffect(()=>{
        fetch('blogs.json')
        .then(response=>response.json())
        .then(data => setCards(data))
    },[])
    return (
        <div className="w-[70%] mt-8 space-y-2">
            {
                cards.map(card => <Card key={card.id} handleBookmark={handleBookmark} handleReadingTime={handleReadingTime} card={card}></Card>)
            }
        </div>

    );
};

export default Cards;