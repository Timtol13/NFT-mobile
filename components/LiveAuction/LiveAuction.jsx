import React from 'react'

export const LiveAuction = () => {

    const auctionCollection = [
        <div className={'slot'}>
                <div className={'slotImage'}>
                    <img src={require('../../assets/thirdPage/photo1.svg')}/>
                    <div className='imageTimeBlock'>
                        <div className={'iamgeBg'}></div>
                        <h2 className={'imageTime'}>03:18:24</h2>
                    </div>
                </div>
                <div className={'slotProfile'}>
                    <div className='slotInfo'>
                        <img src={require('../../assets/thirdPage/profileImage.svg')} width={50} height={50}/>
                        <div>
                            <h2>Virtual Art</h2>
                            <h5>by @wzard</h5>
                        </div>
                    </div>
                    <div className='slotLikes'>
                        <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.4 0C15.312 0 13.308 0.972 12 2.508C10.692 0.972 8.688 0 6.6 0C2.904 0 0 2.904 0 6.6C0 11.136 4.08 14.832 10.26 20.448L12 22.02L13.74 20.436C19.92 14.832 24 11.136 24 6.6C24 2.904 21.096 0 17.4 0ZM12.12 18.66L12 18.78L11.88 18.66C6.168 13.488 2.4 10.068 2.4 6.6C2.4 4.2 4.2 2.4 6.6 2.4C8.448 2.4 10.248 3.588 10.884 5.232H13.128C13.752 3.588 15.552 2.4 17.4 2.4C19.8 2.4 21.6 4.2 21.6 6.6C21.6 10.068 17.832 13.488 12.12 18.66Z" fill="#BDAAC1"/>
                        </svg>
                        <h1>92</h1>
                    </div>
                </div>
                <div className='slotPrice'>
                    <h2>Current Bid</h2>
                    <h1>4.89 ETH</h1>
                </div>
                <button className='slotBtn'>Place a bid</button>
            </div>,
            <div className={'slot'}>
            <div className={'slotImage'}>
                <img src={require('../../assets/thirdPage/photo2.svg')}/>
                <div className='imageTimeBlock'>
                    <div className={'iamgeBg'}></div>
                    <h2 className={'imageTime'}>03:18:24</h2>
                </div>
            </div>
            <div className={'slotProfile'}>
                <div className='slotInfo'>
                    <img src={require('../../assets/thirdPage/profileImage.svg')} width={50} height={50}/>
                    <div>
                        <h2>Virtual Art</h2>
                        <h5>by @wzard</h5>
                    </div>
                </div>
                <div className='slotLikes'>
                    <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.4 0C15.312 0 13.308 0.972 12 2.508C10.692 0.972 8.688 0 6.6 0C2.904 0 0 2.904 0 6.6C0 11.136 4.08 14.832 10.26 20.448L12 22.02L13.74 20.436C19.92 14.832 24 11.136 24 6.6C24 2.904 21.096 0 17.4 0ZM12.12 18.66L12 18.78L11.88 18.66C6.168 13.488 2.4 10.068 2.4 6.6C2.4 4.2 4.2 2.4 6.6 2.4C8.448 2.4 10.248 3.588 10.884 5.232H13.128C13.752 3.588 15.552 2.4 17.4 2.4C19.8 2.4 21.6 4.2 21.6 6.6C21.6 10.068 17.832 13.488 12.12 18.66Z" fill="#BDAAC1"/>
                    </svg>
                    <h1>92</h1>
                </div>
            </div>
            <div className='slotPrice'>
                <h2>Current Bid</h2>
                <h1>4.89 ETH</h1>
            </div>
            <button className='slotBtn'>Place a bid</button>
        </div>,
        <div className={'slot'}>
        <div className={'slotImage'}>
            <img src={require('../../assets/thirdPage/photo3.svg')}/>
            <div className='imageTimeBlock'>
                <div className={'iamgeBg'}></div>
                <h2 className={'imageTime'}>03:18:24</h2>
            </div>
        </div>
        <div className={'slotProfile'}>
            <div className='slotInfo'>
                <img src={require('../../assets/thirdPage/profileImage.svg')} width={50} height={50}/>
                <div>
                    <h2>Virtual Art</h2>
                    <h5>by @wzard</h5>
                </div>
            </div>
            <div className='slotLikes'>
                <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.4 0C15.312 0 13.308 0.972 12 2.508C10.692 0.972 8.688 0 6.6 0C2.904 0 0 2.904 0 6.6C0 11.136 4.08 14.832 10.26 20.448L12 22.02L13.74 20.436C19.92 14.832 24 11.136 24 6.6C24 2.904 21.096 0 17.4 0ZM12.12 18.66L12 18.78L11.88 18.66C6.168 13.488 2.4 10.068 2.4 6.6C2.4 4.2 4.2 2.4 6.6 2.4C8.448 2.4 10.248 3.588 10.884 5.232H13.128C13.752 3.588 15.552 2.4 17.4 2.4C19.8 2.4 21.6 4.2 21.6 6.6C21.6 10.068 17.832 13.488 12.12 18.66Z" fill="#BDAAC1"/>
                </svg>
                <h1>92</h1>
            </div>
        </div>
        <div className='slotPrice'>
            <h2>Current Bid</h2>
            <h1>4.89 ETH</h1>
        </div>
        <button className='slotBtn'>Place a bid</button>
    </div>
    ]
  return (
    <div className={'auction'}>
        <div className={'auctionHead'}>
            <h1>Live Auctions</h1>
            <div className={'ball'}></div>
        </div>
        <div className={'slots'}>
            {auctionCollection.map(el => {
                return el
            })}
            <button className='viewAllBtn'><h1>View All</h1></button>
        </div>
    </div>
  )
}
