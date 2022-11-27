import React from 'react';
import {BrowserRouter , Routes, Route} from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import Restaurants from './templates/Restaurants';
import RestaurantDetails from './templates/RestaurantDetails';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<Restaurants />} />
            <Route path='/:id' element={<RestaurantDetails />} />
        </Routes>
    </BrowserRouter>
);
