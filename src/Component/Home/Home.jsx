import React from 'react'
import Efficiency from '../Efficiency/Efficiency'
import FeaturedComponent from '../FeaturedComponent/FeaturedComponent'
import WorksComponent from '../WorksComponent/WorksComponent'
import Header from './Header/Header'

const Home = () => {
    return (
        <>
            <Header />
            <Efficiency />
            <WorksComponent />
            <FeaturedComponent />
        </>
    )
}

export default Home