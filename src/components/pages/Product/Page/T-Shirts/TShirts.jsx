import React from 'react'
import ProductCard from '../../ProductCard'

function TShirts() {
  const UniformData = [
    {
      title: "T Shirts 1",
      link: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1704739834/Uniform/T-shirt/t-shirt-1.jpg"
    },
    {
      title: "T Shirts 2",
      link: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1704739834/Uniform/T-shirt/t-shirt-2.jpg"
    },
    {
      title: "T Shirts 3",
      link: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1704739834/Uniform/T-shirt/t-shirt-3.jpg"
    },
    {
      title: "T Shirts 4",
      link: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1704739834/Uniform/T-shirt/t-shirt-4.jpg"
    },
    {
      title: "T Shirts 5",
      link: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1704739834/Uniform/T-shirt/t-shirt-5.jpg"
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

export default TShirts