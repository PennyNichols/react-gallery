import React from 'react';
import '../App.css';
import {Card} from "react-bootstrap";

const Albums = () => {
    const albumInfo = [
        {image: 'https://raw.githubusercontent.com/PennyNichols/react-gallery/main/react-gallery/public/images/beach.jpg', title: 'Beaches'},
        {image: 'https://raw.githubusercontent.com/PennyNichols/react-gallery/main/react-gallery/public/images/fall.jpg', title: 'Fall Time'},
        {image: 'https://github.com/PennyNichols/react-gallery/blob/main/react-gallery/public/images/flowers.jpg?raw=true', title: 'Flowers'},
        {image: 'https://github.com/PennyNichols/react-gallery/blob/main/react-gallery/public/images/moon.jpg?raw=true', title: 'Night Sky'},
        {image: 'https://github.com/PennyNichols/react-gallery/blob/main/react-gallery/public/images/mountain.jpg?raw=true', title: 'Magnificent Mountains'},
        {image: 'https://github.com/PennyNichols/react-gallery/blob/main/react-gallery/public/images/spring.jpg?raw=true', title: 'Spring Time'},
        {image: 'https://github.com/PennyNichols/react-gallery/blob/main/react-gallery/public/images/summertime.jpg?raw=true', title: 'Summer Time'},
        {image: 'https://github.com/PennyNichols/react-gallery/blob/main/react-gallery/public/images/sunrise.jpg?raw=true', title: 'Sunrises'},
        {image: 'https://github.com/PennyNichols/react-gallery/blob/main/react-gallery/public/images/sunset.jpg?raw=true', title: 'Sunsets'},
        {image: 'https://github.com/PennyNichols/react-gallery/blob/main/react-gallery/public/images/waterfall.jpg?raw=true', title: 'Waterfalls'},
        {image: 'https://github.com/PennyNichols/react-gallery/blob/main/react-gallery/public/images/winter.jpg?raw=true', title: 'Winter Time'}
    ];

    const renderAlbums = (card, index) => {
        return(
            <Card style={{ width: '18rem'}} key={index}>
                <Card.Img variant='top' src={card.image}/>
                <Card.Body>
                    <Card.Title>{card.title}</Card.Title>
                </Card.Body>
            </Card>
        );
    };

    return <div className='grid'>{albumInfo.map(renderAlbums)}</div>;

};

export default Albums;