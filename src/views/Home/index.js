import React from 'react'
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import instagram from "../../assets/Instagram.png"
import facebook from "../../assets/facebook.png"
import ImageRey from "../../components/ReusableComponents/ImageRey"
import StickyEmail from '../../components/Stickyemail'
const Home = () => {
    return (
        <div>
            <Header></Header>
            <StickyEmail></StickyEmail>
            <ImageRey data={{source:facebook}}></ImageRey>
            <ImageRey data={{source:instagram}}></ImageRey> 
            <br></br> Home Page
            <Footer></Footer>
        </div>
    )
}

export default Home
