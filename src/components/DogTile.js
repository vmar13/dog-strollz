import React from 'react'

 const DogTile = props => {

    const { id, name, breed, borough, image, sendToDogShowPage } = props
    
        return (
            <div className='card' onClick={() => sendToDogShowPage(id)}>
                <img src={image} alt={name} className='dog-img'/>
                <div className='name-container'>
                    <h3>{name}</h3>
                </div>
                
            </div>
        )
}

export default DogTile

// "id": 1,
// "name": "Oso",
// "breed": "Boxer",
// "borough": "Queens",
// "image":