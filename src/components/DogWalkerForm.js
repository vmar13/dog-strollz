import React from 'react'

const DogWalkerForm = (props) => {
    return (
        <div>
            <h3>We'd like to get to know you first!</h3>
            <p>Please fill out the form, so the dog owners can set up an in-person interview.</p>
            <form className="new-poem-form" >
                <input name='name'  placeholder="Dog Walker's Name"  />
                <input name='phone-number' placeholder="Phone Number"  />
                <input type="submit" value="Book Interview" />
            </form>
        </div>
        
    )
}

export default DogWalkerForm