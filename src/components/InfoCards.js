
import React, { useState } from 'react';

function InfoCards() {
    const cardNum = [1, 2, 3, 4, 5];
    const cards = cardNum.map((item) =>
        <div className="col">
            <div className="card" >
                <img className="card-img-top" src="/cart.png" alt="Card image cap"></img>
                <div className="card-body">
                    <h5 className="card-title">Card {item}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>);
    const [cardStart, setCardStart] = useState(0);

    return (

        <div className="oramaInfoCards">
            <div className="row row-cols-1 row-cols-md-3">

                {cards[(cardStart) % cardNum.length]}
                {cards[(cardStart + 1) % cardNum.length]}
                {cards[(cardStart + 2) % cardNum.length]}

            </div>
            <button className="btn btn-light cardPrev" style={{ float: "left" }} onClick={() => setCardStart((cardStart == 0 ? cardNum.length - 1 : cardStart - 1))}><i className="arrowOrama left"></i></button>
            <button className="btn btn-light cardNext" style={{ float: "right" }} onClick={() => setCardStart((cardStart + 1) % cardNum.length)}><i className="arrowOrama right"></i></button>
        </div>

    )
}

export default InfoCards
