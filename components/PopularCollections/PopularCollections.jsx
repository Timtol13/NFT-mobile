import React from 'react'

export const PopularCollections = () => {

    const collectionsCollection = [
        <div className={'slot'}>
                <div>
                    <img className='slotImage' src={require('../../assets/popularCollections/first.svg')}/>
                </div>
                <div className={'slotProfile'}>
                    <div className='slotInfo'>
                        <img  src={require('../../assets/thirdPage/profileImage.svg')} width={50} height={50}/>
                        <div>
                            <h2>@wzard</h2>
                        </div>
                    </div>
                    <div className='slotLikes'>
                        <h1>ERC-721</h1>
                    </div>
                </div>
            </div>,
            <div className={'slot'}>
            <div>
                <img className='slotImage' src={require('../../assets/popularCollections/second.svg')}/>
            </div>
            <div className={'slotProfile'}>
                <div className='slotInfo'>
                    <img src={require('../../assets/thirdPage/profileImage.svg')} width={50} height={50}/>
                    <div>
                        <h2>@wzard</h2>
                    </div>
                </div>
                <div className='slotLikes'>
                    <h1>ERC-721</h1>
                </div>
            </div>
        </div>,
        <div className={'slot'}>
        <div>
            <img  className='slotImage' src={require('../../assets/popularCollections/third.svg')}/>
        </div>
        <div className={'slotProfile'}>
            <div className='slotInfo'>
                <img src={require('../../assets/thirdPage/profileImage.svg')} width={50} height={50}/>
                <div>
                    <h2>@wzard</h2>
                </div>
            </div>
            <div className='slotLikes'>
                <h1>ERC-721</h1>
            </div>
        </div>
    </div>
    ]
  return (
    <div className={'collections'}>
        <div className={'collectionsHead'}>
            <h1>Popular Collections</h1>
            <div className={'ball'}></div>
        </div>
        <div className={'slotsPopular'}>
            {collectionsCollection.map(el => {
                return el
            })}
            <button className='viewAllBtn'><h1>View All</h1></button>
        </div>
    </div>
  )
}
