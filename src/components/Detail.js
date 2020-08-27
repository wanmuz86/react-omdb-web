import React from 'react';
import {useParams} from 'react-router-dom';

// 1) Recreate the second page
// 2) You have to call the second API - use ID and send it as parameter
// 3) And get the data
// 4) Retriebve and Show it in the UI part

// 8.30pm 
function Detail(){
    let {imdbId} = useParams();
    return (
        <main>
            <p>This is detail page for {imdbId}</p>
        </main>
    )
} 

export default Detail;