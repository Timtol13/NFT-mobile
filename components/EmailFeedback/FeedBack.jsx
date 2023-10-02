import React from 'react'

export const FeedBack = () => {
  return (
    <div className='feedback'>
        <div className='feedbackHeader'>
            <h1>Ready for Next NFT Drop?</h1>
        </div>
        <div className='sendMail'>
            <input className='input' type={'email'} placeholder='info@gmail.com' />
            <button className='mailBtn'><h2>Subscribe</h2></button>
        </div>
    </div>
  )
}
