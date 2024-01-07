import React from 'react'
import { Grid } from "@mui/material"
import ProductCard from '../../ProductCard'

function HousekeepingUniforms() {
    const UniformData = [
        {
            title: "House keeping 1",
            link: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1704652653/Uniform/House-keeping/house-keeping-1.jpg"
        },
        {
            title: "House keeping 2",
            link: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1704652653/Uniform/House-keeping/house-keeping-2.jpg"
        },
        {
            title: "House keeping 3",
            link: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1704652653/Uniform/House-keeping/house-keeping-3.jpg"
        },
        {
            title: "House keeping 4",
            link: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1704652653/Uniform/House-keeping/house-keeping-4.jpg"
        },
        {
            title: "House keeping 5",
            link: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1704652653/Uniform/House-keeping/house-keeping-5.jpg"
        },
    ]

    return (
        <>
            {
                UniformData.map(({ link, title }, index) => <ProductCard image={link} title={title} key={index} />)
            }
        </>)
}

export default HousekeepingUniforms