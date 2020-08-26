import React from 'react'

function Movie(props){
    console.log(props.movies);
    return (
    <div>
    <ul>
        {
            props.movies.map(val=>{
            return <li onClick={()=>props.handleClick(val.imdbID)} key={val.imdbID}>{val.Title}</li>
            })
        }
    
    </ul>
</div>)
}

export default Movie;