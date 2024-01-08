import React from 'react'
import ProductCard from '../../ProductCard'


function IndustrialUniform() {
  const UniformData = [
    {
      title: "Industrial Uniform 1",
      link: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1704739961/Uniform/Industry-Uniform/industry-uniform-1.jpg"
    },
    {
      title: "Industrial Uniform 2",
      link: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1704739961/Uniform/Industry-Uniform/industry-uniform-2.jpg"
    },
    {
      title: "Industrial Uniform 3",
      link: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1704739961/Uniform/Industry-Uniform/industry-uniform-3.jpg"
    },
    {
      title: "Industrial Uniform 4",
      link: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1704739961/Uniform/Industry-Uniform/industry-uniform-4.jpg"
    },
    {
      title: "Industrial Uniform 5",
      link: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1704739961/Uniform/Industry-Uniform/industry-uniform-5.jpg"
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

export default IndustrialUniform