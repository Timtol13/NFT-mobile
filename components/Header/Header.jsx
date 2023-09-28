import React from 'react'
import { Image } from 'react-native'

export const Header = () => {
  return (
    <div className={'header'}>
        <nav>
            <ul>
                <li> 
                    <img src={require('../../assets/image.svg')} />
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
  )
}
