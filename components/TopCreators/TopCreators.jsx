import React from 'react'

export const TopCreators = () => {
  const creators = [
          <div className='creatorCard'>
            <div className='profileData'>
              <img src={require('../../assets/creators/profile1.svg')}/>
              <div className='profileDataText'>
                <h1>Wzard Dee</h1>
                <h3>4.89 ETH</h3>
              </div>
            </div>
            <div className='creatorsItems'>
              <div className='line'></div>
              <div className='data'>
                <h2>33</h2>
                <h4>Items</h4>
              </div>
            </div>
          </div>,
          <div className='creatorCard'>
          <div className='profileData'>
            <img src={require('../../assets/creators/profile2.svg')}/>
            <div className='profileDataText'>
              <h1>Wzard Dee</h1>
              <h3>4.89 ETH</h3>
            </div>
          </div>
          <div className='creatorsItems'>
            <div className='line'></div>
            <div className='data'>
              <h2>33</h2>
              <h4>Items</h4>
            </div>
          </div>
        </div>,
        <div className='creatorCard'>
        <div className='profileData'>
          <img src={require('../../assets/creators/profile3.svg')}/>
          <div className='profileDataText'>
            <h1>Wzard Dee</h1>
            <h3>4.89 ETH</h3>
          </div>
        </div>
        <div className='creatorsItems'>
          <div className='line'></div>
          <div className='data'>
            <h2>33</h2>
            <h4>Items</h4>
          </div>
        </div>
      </div>,
      <div className='creatorCard'>
      <div className='profileData'>
        <img src={require('../../assets/creators/profile4.svg')}/>
        <div className='profileDataText'>
          <h1>Wzard Dee</h1>
          <h3>4.89 ETH</h3>
        </div>
      </div>
      <div className='creatorsItems'>
        <div className='line'></div>
        <div className='data'>
          <h2>33</h2>
          <h4>Items</h4>
        </div>
      </div>
    </div>,
  ]
  return (
    <div className={'creators'}>
        <div className={'creatorsHead'}>
            <h1>Top Creators</h1>
            <div className={'ball'}></div>
        </div>
        <div className='creatorsCards'>
          {creators.map(el => {
            return el
          })}
          <button className='viewAllBtn'><h1>View All</h1></button>
        </div>
    </div>
  )
}
