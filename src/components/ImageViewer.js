
import React from 'react';
import CardMedia from '@mui/material/CardMedia';

export default function ImageViewer(props) {
    return (<CardMedia component="img" {...props} />);
}
