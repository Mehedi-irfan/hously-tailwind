import React from 'react'
import Navigation from '../../../Sheard/Navigation/Navigation'
import SearchingComponent from '../../SearchingComponent/SearchingComponent'
import SliderComponent from '../../Slider/SliderComponent'

const Header = () => {
    return (
        <>
            <Navigation />
            <SliderComponent />
            <SearchingComponent />
        </>
    )
}

export default Header