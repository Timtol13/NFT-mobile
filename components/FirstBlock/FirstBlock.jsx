import React from 'react'

export const FirstBlock = () => {
  return (
    <div className='firstBlock'>
        <img className='image' src={require('../../assets/firstBlock/pic.svg')}/>
        <div className='image__btns'>
            <div>
                <h2>Artist</h2>
                <h4>@wzard</h4>
            </div>
            <button> Start Bid </button>
        </div>
    </div>
  )
}
