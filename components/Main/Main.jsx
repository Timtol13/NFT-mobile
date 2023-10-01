import React from 'react'
import { Header } from '../Header/Header'
import '../styles/index.css'
import { FirstBlock } from '../FirstBlock/FirstBlock'
import { SecondMixin } from '../SecondBlock/SecondMixin'

export const Main = () => {
  return (
    <div className='app'>
        <Header />
        <FirstBlock />
        <SecondMixin />
    </div>
  )
}
