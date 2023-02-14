import React from "react";
import Card from "../Card/Card";

const Cards = () =>{
    const products = [
        {
            "id": 1,
            "img":"https://media.flixcar.com/f360cdn/Samsung-106630345-latin-galaxy-a13-sm-a135-sm-a135mzkntpa-532118312--Download-Source--zoom.png",
            "name": "Samsum A13",
            "price": 32.4,
            "calification": 3.4,
            "categories":"celulares"
        },
        {
            "id": 2,
            "img":"https://www.necxus.com.ar/products_image/12720/1000x1000_1.jpg",
            "name": "Playstation 4",
            "price": 300.000,
            "calification": 4.4,
            "categories":"Juegos"
        },
        {
            "id": 3,
            "img":"https://castillo.com.ar/Image/0/500_500-11254020-1.png",
            "name": "Pileta",
            "price": 322.4,
            "calification": 2.4,
            "categories":"Muebles"
        }
    ]
    return (
        <div>
            {products.map(p=>{
                return <Card
                        id={p.id}
                        img={p.img}
                        name={p.name}
                        price={p.price}
                        calification={p.calification}
                        categories={p.categories}
                />
            })}     
        </div>  
    )
}

export default Cards;