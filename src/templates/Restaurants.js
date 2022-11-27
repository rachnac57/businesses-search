import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import StarIcon from '@mui/icons-material/Star';
import {useNavigate} from 'react-router-dom';
import { fetchData } from '../api/api';
import HeadingComponent from '../components/Headings';
import ImageViewer from "../components/ImageViewer";
import { StarHalf } from '@mui/icons-material';
import { Container } from '@mui/material';

const fetchBusinesses = fetchData({path: 'https://api.yelp.com/v3/businesses/search',
    params: {
        term: 'restaurants',
        latitude: 37.786882,
        longitude: -122.399972,
    },
});

const Restaurants = () => {
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        fetchBusinesses.then((results) => {
            setRestaurants(results?.businesses);
        })
    }, []);

    const navigate = useNavigate();
    function selectRestaurant(restaurantId) {
        navigate(`/${restaurantId}`);
    }

    return (
        <div className="App">
            <Container>
                <HeadingComponent name="Restaurants"/>
                {
                    restaurants.map((restaurant, index) => {
                        let ratings = [];
                        if (Number.isInteger(restaurant.rating)) {
                            ratings = new Array(restaurant.rating).fill(1);
                        } else {
                            ratings = new Array(Math.floor(restaurant.rating)).fill(1);
                            ratings.push(0.5);
                        }
                        return (
                            <Card
                                key={`restaurant-${index}`}
                                onClick={() => selectRestaurant(restaurant.id)}
                                sx={{display: 'flex', my: "20px", height: "350px"}}
                            >
                                <CardContent sx={{width: "70%", display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                                    <HeadingComponent icon={<RestaurantIcon/>} name={restaurant.name} />
                                    <Typography variant="body2" color="text.secondary">
                                        {restaurant.price}
                                    </Typography>
                                    {restaurant.rating &&
                                        <div>
                                            <Ratings ratings={restaurant.rating} />
                                    </div>}
                                </CardContent>
                                <ImageViewer
                                    image={restaurant.image_url}
                                    sx={{ width: '30%' }}
                                />
                            </Card>
                        )
                    })
                }
            </Container>
        </div>
    );
}

export default (Restaurants);
