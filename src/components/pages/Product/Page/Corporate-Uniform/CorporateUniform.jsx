import React from 'react'
import { Grid } from "@mui/material"
import ProductCard from '../../ProductCard'

function CorporateUniform() {

    const UniformData = [
        {
            title: "Corporate 1",
            link: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1704650860/Uniform/Corporate-Uniform/corporate-1.jpg"
        },
        {
            title: "Corporate 2",
            link: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1704650860/Uniform/Corporate-Uniform/corporate-2.jpg"
        },
        {
            title: "Corporate 3",
            link: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1704650860/Uniform/Corporate-Uniform/corporate-3.jpg"
        },
        {
            title: "Corporate 4",
            link: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1704650860/Uniform/Corporate-Uniform/corporate-4.jpg"
        },
        {
            title: "Corporate 5",
            link: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1704650860/Uniform/Corporate-Uniform/corporate-5.jpg"
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

export default CorporateUniform