import React from 'react'
import { Grid } from "@mui/material"
import ProductCard from '../../ProductCard'


function HospitalUniform() {
    const UniformData = [
        {
            title: "Hospital 1",
            link: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1704652057/Uniform/Hospital/hospital-1.jpg"
        },
        {
            title: "Hospital 2",
            link: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1704652057/Uniform/Hospital/hospital-2.jpg"
        },
        {
            title: "Hospital 3",
            link: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1704652057/Uniform/Hospital/hospital-3.jpg"
        },
        {
            title: "Hospital 4",
            link: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1704652057/Uniform/Hospital/hospital-4.jpg"
        },
        {
            title: "Hospital 5",
            link: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1704652057/Uniform/Hospital/hospital-5.jpg"
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

export default HospitalUniform