import React from 'react'
import { Grid } from "@mui/material"
import ProductCard from '../../ProductCard'

function HotelRestaurantUniform() {
    const UniformData = [
        {
            title: "Hotel Restaurant 1",
            link: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1704652369/Uniform/Hotel/hotel-resturent-1.jpg"
        },
        {
            title: "Hotel Restaurant 2",
            link: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1704652369/Uniform/Hotel/hotel-resturent-2.jpg"
        },
        {
            title: "Hotel Restaurant 3",
            link: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1704652369/Uniform/Hotel/hotel-resturent-3.jpg"
        },
        {
            title: "Hotel Restaurant 4",
            link: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1704652369/Uniform/Hotel/hotel-resturent-4.jpg"
        },
        {
            title: "Hotel Restaurant 5",
            link: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1704652369/Uniform/Hotel/hotel-resturent-5.jpg"
        },
    ]

    return (
        <>
            {
                UniformData.map(({ link, title }, index) => <ProductCard image={link} title={title} key={index} />)
            }
        </>
    )
}

export default HotelRestaurantUniform