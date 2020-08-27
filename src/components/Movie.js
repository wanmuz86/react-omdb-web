import React from 'react'
import {Link} from 'react-router-dom';
function Movie(props){
    console.log(props.movies);
    return (
    <div>
    <ul>
        {
            props.movies.map(val=>{
            return <Link to={`/detail/${val.imdbID}`}>
            <div key={val.imdbID}>
                <img src={val.Poster}></img> 
                <h3>{val.Title}</h3>
            <p>{val.Year}</p>
            </div>
            </Link>
            
            })
        }
    
    </ul>
</div>)
}

export default Movie;