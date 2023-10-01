import React from 'react'

export const Partners = () => {
  return (
    <div className={'partners'}>
        <div className='partnersFlex'>
            <div className='partnersFlexEl'>
                <img src={require('../../assets/secondBlock/Vector.svg')}/>
            </div>
            <div className='partnersFlexEl'>
                <img src={require('../../assets/secondBlock/Vector-1.svg')}/>
            </div>
            <div className='partnersFlexEl'>
                <img src={require('../../assets/secondBlock/binance 1.svg')}/>
            </div>
            <div className='partnersFlexEl'>
                <img src={require('../../assets/secondBlock/bitmex 1.svg')}/>
            </div>
        </div>
    </div>
  )
}
