import React from "react";

const Card = (props)=>{

    return (
        <div class="card" style="width:18rem;">
            <img class="card-img-top" src={props.img} alt="Card image cap"/>

            <div class="card-body">
                <h2 class="card-title">{props.name}</h2>
                <h3 class="card-text">${props.price}</h3>
                <h3 class="card-text">{props.calification}</h3>
                <h3 class="card-text">{props.categories}</h3>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )

}
export default Card;