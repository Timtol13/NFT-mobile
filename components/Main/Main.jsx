import React from 'react'
import { Header } from '../Header/Header'
import '../styles/index.css'
import { FirstBlock } from '../FirstBlock/FirstBlock'
import { SecondMixin } from '../SecondBlock/SecondMixin'
import { LiveAuction } from '../LiveAuction/LiveAuction'
import { HowItWorks } from '../HowItWorks/HowItWorks'
import { PopularCollections } from '../PopularCollections/PopularCollections'
import { Categories } from '../Categories/Categories'
import { TopCreators } from '../TopCreators/TopCreators'

export const Main = () => {
  return (
    <div className='app'>
        <Header />
        <FirstBlock />
        <SecondMixin />
        <LiveAuction />
        <HowItWorks />
        <PopularCollections />
        <Categories />
        <TopCreators />
    </div>
  )
}
