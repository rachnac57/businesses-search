import React, { useState, useEffect } from "react";
import {useLocation} from 'react-router-dom';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import Container from '@mui/material/Container';
import {fetchData} from '../api/api';
import HeadingComponent from "../components/Headings";
import ImageViewer from "../components/ImageViewer";
import {getOperatingHours} from '../utils/Utils';

const selectedRestaurant = (id) => fetchData({path: `https://api.yelp.com/v3/businesses${id}`});

const listOperatingHours = (openTimings) => {
    const operatingHours = getOperatingHours(openTimings);
    return Object.keys(operatingHours).map((hr, index) => (
        <Typography variant="subtitle2" color="text.secondary" key={`operating-hour-${index}`}>
            {hr} <span>{operatingHours[hr]}</span>
        </Typography>
    ));
}

export default function RestaurantDetails() {
    const [restaurant, setRestaurant] = useState({});

    const location = useLocation();
    useEffect(() => {
        selectedRestaurant(location.pathname).then((result) => {
            setRestaurant(result);
        })
    }, []);

    if (Object.keys(restaurant).length > 0) {
        return (
            <Container maxWidth="lg">
                <Typography gutterBottom variant="h5" component="div">
                    <HeadingComponent icon={<RestaurantIcon/>} name={restaurant.name} />
                </Typography>
                <Card>
                    <ImageViewer
                        sx={{ height: '350px' }}
                        image={restaurant.image_url}
                    />
                    <CardContent sx={{p: "20px"}}>
                        {restaurant.phone &&
                        <div>
                            <Typography variant="h6" color="text.secondary"><strong>Phone:</strong></Typography>
                            <Typography variant="subtitle2" color="text.secondary"> {restaurant.phone} </Typography>
                        </div>
                        }
                        {restaurant.review_count &&
                        <div>
                            <Typography variant="h6" color="text.secondary"><strong>Total Reviews:</strong></Typography>
                            <Typography variant="subtitle2" color="text.secondary">{restaurant.review_count}</Typography>
                        </div>}
                        {restaurant?.hours[0]?.open &&
                        <div>
                            <Typography variant="h6" color="text.secondary">
                            <strong>Operating hours:</strong>
                            </Typography>
                            {listOperatingHours(restaurant.hours[0].open)}
                        </div>}
                    </CardContent>
                </Card>
            </Container>
        );
    }
}
