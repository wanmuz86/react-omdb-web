import React from 'react';
import Movie from './Movie'
import Search from './Search'

// Lifting up a data
// 1) Make it as a stateful component
// 2) I will pass a function as prop, the prop attribute is handleClick 
// and it will call the function newly created
// 3) I will go into my child component, and pass up the data through props
// 4) I will retrieve the value from my props in function created on 2
class Main extends React.Component{
    constructor(){
        super()
        this.state = {movies:[]}
        this.getSearch = this.getSearch.bind(this);
        this.getId = this.getId.bind(this);
    }
render(){
    return (
        <main>
           <Search handleClick={this.getSearch}/>
           <Movie movies={this.state.movies} handleClick={this.getId}/>
        </main>
    )
} 
getId(imdbId){
    console.log(imdbId);
}
getSearch(searchTerm){
    
    let url = `https://www.omdbapi.com/?s=${searchTerm}&apikey=87d10179`
   
    fetch(url).then(response => response.json())
    .then(data => {
       
        this.setState({
            movies:data["Search"]
        })
  
    })

    // Call the API -> get The Data -> pass the data to the Movie Component

}
}

export default Main;