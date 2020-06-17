import React from 'react'

const DogWalkerForm = (props) => {
    return (
        <form className="new-poem-form" >
            <input name='name'  placeholder="Dog Walker's Name"  />
            <input name='phone-number' placeholder="Phone Number"  />
            <input type="submit" value="Book Interview" />
      </form>
    )
}

export default DogWalkerForm