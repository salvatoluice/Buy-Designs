import React from "react"
import Footer from "../common/Footer"
import { Header } from "../common/Header"
import { Banner } from "./banner/Banner"
import { Blog } from "./blog/Blog"
import { Card } from "./Hero/Card"
import { Hero } from "./Hero/Hero"
import { Price } from "./price/Price"
import { Product } from "./product/Product"
import { Testimonial } from "./testimonial/Testimonial"
import { TopProduct } from "./top/TopProduct"

export const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Card />
      <Product />
      <Banner />
      <TopProduct />
      <Price />
      <Testimonial />
      <Blog />
      <Footer />
    </>
  )
}
