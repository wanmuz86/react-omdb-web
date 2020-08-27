import React from 'react';
import { withRouter } from "react-router";
// 1) Recreate the second page
// 2) You have to call the second API - use ID and send it as parameter
// 3) And get the data
// 4) Retriebve and Show it in the UI part

// 8.30pm 
class Detail extends React.Component{
   
    constructor(props){
        super(props)
        this.state = {movie:null}
        this.handleClick = this.handleClick.bind(this);
       
        
    }
    componentDidMount() {
        const imdbId = this.props.match.params.imdbId;

        let url = `https://www.omdbapi.com/?i=${imdbId}&apikey=87d10179`
   
        fetch(url).then(response => response.json())
        .then(data => {
           console.log(data);
           this.setState({
            movie:data
           })      
        })

    }
    handleClick(){
        this.props.history.goBack();
    }
    render(){
    return (
        <main>
            <button onClick={this.handleClick}>Go back</button>
            <div>
                {
                    this.state.movie ?
                    <div>
                        <img src={this.state.movie.Poster}/> 
                <h2>{this.state.movie.Title}</h2>
                <h3>{this.state.movie.Year}</h3>
                <p>{this.state.movie.Plot}</p>
                <p>{this.state.movie.Director}</p>
                </div>
                :
                <p>Page is loading</p>
                }
            </div>
        </main>
    )
    }
} 

export default withRouter(Detail);