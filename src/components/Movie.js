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
            <div key={val.imdbID} className={'card'}>
                <div className={'card-body'}>
                    <div className={'row'}>
                        <div className={'col-3'}>
                <img src={val.Poster}  width={150}></img> 
                </div> 
                <div className={'col-9'}>
                <h3>{val.Title}</h3>
                <p>{val.Year}</p>
                </div>
                </div>
                </div>
            </div>
            </Link>
            
            })
        }
    
    </ul>
</div>)
}

export default Movie;