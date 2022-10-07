import React from 'react';
import '../../App.css';
import {Card} from "react-bootstrap";

const Albums = () => {
    const albumInfo = [
        {image: '../components/albums/beach.jpg', title: 'Beaches'},
        {image: 'fall.jpg', title: 'Fall Time'},
        {image: 'flowers.jpg', title: 'Flowers'},
        {image: 'moon.jpg', title: 'Night Sky'},
        {image: 'mountain.jpg', title: 'Magnificent Mountains'},
        {image: 'spring.jpg', title: 'Spring Time'},
        {image: 'summertime.jpg', title: 'Summer Time'},
        {image: 'sunrise.jpg', title: 'Sunrises'},
        {image: 'sunset.jpg', title: 'Sunsets'},
        {image: 'waterfall.jpg', title: 'Waterfalls'},
        {image: 'winter.jpg', title: 'Winter Time'}
    ];

    const renderAlbum = (card, index) => {
        return(
            <Card style={{ width: '18rem'}} key={index}>
                <Card.Img variant='top' src={card.image}/>
                <Card.Body>
                    <Card.Title>{card.title}</Card.Title>
                </Card.Body>
            </Card>
        );
    };

    return <div className='App'>{albumInfo.map(renderAlbum)}</div>;

};

export default Albums;