import React from 'react'
import { Image } from 'react-native'

export const Header = () => {
  return (
    <>
        <div className={'header'}>
            <nav>
                <ul>
                    <li> 
                        <img src={require('../../assets/logo.svg')} />
                    </li>

                    <li>
                        <button className={'menu__item--hamburger'}>
                            <div className='line'></div>
                            <div className='line'></div>
                            <div className='line'></div>
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
        <div className='headerBlock'>
            <h1 className={'headTitle'}>Explore, Buy and Sell the </h1>
        </div>
        <div className={'headerBtns'}>
            <button className={'headerBtns__element'}><h1>Explore</h1></button>
            <button className={'headerBtns__element'}><h1>Create</h1></button>
        </div>
    </>
  )
}
