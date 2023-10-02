import React from 'react'

export const Footer = () => {
  return (
    <div className='footer'>
        <img src={require("../../assets/logo.svg")} width={170} />
        <p>
            Nec, enim sed lacus, magna pharetra. Phasellus tincidunt nulla pharetra gravida est.
        </p>
        <div className='footerContacts'>
            <div className='footerContactsItem item1'>
                <h1>About Us</h1>
                <h3>About NFTs</h3>
                <h3>Live</h3>
                <h3>Auctions</h3>
                <h3>NFT Blog</h3>
                <h3>Activity</h3>
            </div>
            <div className='footerContactsItem item2'>
                <h1>Support</h1>
                <h3>Help & Support</h3>
                <h3>Item Details</h3>
                <h3>Author Profile</h3>
                <h3>Collection</h3>
            </div>
        </div>
        <div className='social'>
            <img src={require('../../assets/footer/1.svg')}/>
            <img src={require('../../assets/footer/2.svg')}/>
            <img src={require('../../assets/footer/3.svg')}/>
            <img src={require('../../assets/footer/4.svg')}/>
        </div>
        <h3>All rights reserved@2021</h3>
    </div>
  )
}
