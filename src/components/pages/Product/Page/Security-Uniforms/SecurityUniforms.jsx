import React from 'react'
import ProductCard from '../../ProductCard'

function SecurityUniforms() {
  const UniformData = [
    {
      title: "Security Uniforms 1",
      link: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1704740154/Uniform/Security-Unifrom/security-unifrom-1.jpg"
    },
    {
      title: "Security Uniforms 2",
      link: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1704740154/Uniform/Security-Unifrom/security-unifrom-2.jpg"
    },
    {
      title: "Security Uniforms 3",
      link: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1704740154/Uniform/Security-Unifrom/security-unifrom-3.jpg"
    },
    {
      title: "Security Uniforms 4",
      link: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1704740154/Uniform/Security-Unifrom/security-unifrom-4.jpg"
    },
    {
      title: "Security Uniforms 5",
      link: "https://res.cloudinary.com/dby2vbxv3/image/upload/v1704740154/Uniform/Security-Unifrom/security-unifrom-5.jpg"
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

export default SecurityUniforms