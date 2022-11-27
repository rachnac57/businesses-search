import React from 'react';
import Typography from '@mui/material/Typography';

export default function HeadingComponent(props) {
    return (
        <>
            {props.icon && props.icon}
            <Typography gutterBottom variant={props.variant || "h4"} component="div">
                {props.name}
            </Typography>
        </>
    );
}
