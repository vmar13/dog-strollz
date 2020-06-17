import React from 'react'
import DogTile from '../components/DogTile'
import SearchBar from '../components/SearchBar'
import DogShowPage from '../components/DogShowPage'

export default class DogContainer extends React.Component {

    state = {
        dogs: [],
        searchTerm: ''
    }

    componentDidMount() {
        fetch('http://localhost:3000/dogs')
        .then(res => res.json())
        .then(dogData => this.setState({ dogs: dogData }))
    }

    // renderDogs = () => {
    //     return this.state.dogs.map(dog => <Dog key={dog.id} {...dog} />)
    // }

    onChangeSearch = (e) => {
        this.setState({ searchTerm: e.target.value })
    }
    
    sendToDogShowPage = dogId => {
        this.props.history.push(`/dogs/${dogId}`)
    }

    render(){

        const searchDogs = this.state.dogs.filter(dog => dog.borough.includes(this.state.searchTerm))
        // let dogToShow = this.state.dogs.find(dog => dog.id === this.state.dog.id)
        return (
            
            <div className='container'>
                <SearchBar searchTerm={this.state.searchTerm} onChangeSearch={this.onChangeSearch}/>
                {/* {this.renderDogs()} */}
                {searchDogs.map(dog => <DogTile key={dog.id} {...dog} sendToDogShowPage={this.sendToDogShowPage}/>)}
            </div>
            
            
        )
    }
}


