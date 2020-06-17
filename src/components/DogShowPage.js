import React from 'react'
import DogTile from '../components/DogTile'
import DogWalkerForm from '../components/DogWalkerForm'


const API_ENDPOINT = `http://localhost:3000/dogs`

export default class DogShowPage extends React.Component {

    state = {
        dog: {}
    }

    componentDidMount() {
        fetch(`${API_ENDPOINT}/${this.props.match.params.id}`)
        .then(res => res.json())
        .then(dogObj => {
            this.setState({ dog: dogObj})
        })
    }

    render(){
        console.log(this.props, this.state)
        return(
            <div className='card'>
                <img src={this.state.dog.image} alt={this.state.dog.name} className='dog-img'/>
                <h3>Name: {this.state.dog.name}</h3>
                <h3>Breed: {this.state.dog.breed}</h3>
                <h3>Borough: {this.state.dog.borough}</h3>
                <br>
                </br>
                <div className='card'>
                    <h2>Daily Walks Available:</h2>
                    <button>Mornings @ 8AM</button><br/>
                    <br></br>
                    <button>Mid-day @ 12:30PM</button><br/>
                    <br></br>
                    <button>Evenings @ 5PM</button><br/>
                </div>
             </div>


            // <div>
            //     {<DogTile {...this.state.dog}/>}
            //     <h3>{this.state.dog.name}</h3>
            // </div>
        )
    }
}