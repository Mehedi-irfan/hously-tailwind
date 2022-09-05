import React from 'react'
import Footer from '../../Sheard/Footer/Footer'
import ClientComponent from '../ClientComponent/ClientComponent'
import Efficiency from '../Efficiency/Efficiency'
import FeaturedComponent from '../FeaturedComponent/FeaturedComponent'
import Getintouch from '../Getintouch/Getintouch'
import WorksComponent from '../WorksComponent/WorksComponent'
import Header from './Header/Header'

const Home = () => {
    return (
        <>
            <Header />
            <Efficiency />
            <WorksComponent />
            <FeaturedComponent />
            <ClientComponent />
            <Getintouch />
            <Footer />
        </>
    )
}

export default Home