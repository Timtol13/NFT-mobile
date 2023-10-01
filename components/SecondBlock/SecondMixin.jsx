import React from 'react'
import { Stats } from './Stats'
import { Partners } from './Partners'

export const SecondMixin = () => {
  return (
    <div className='secBlock'>
        <Stats />
        <Partners />
    </div>    
  )
}
