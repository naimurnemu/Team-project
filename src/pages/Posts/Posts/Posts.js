import React, { useEffect } from 'react';

const Posts = () => {

    useEffect(()=>{
        fetch("http://localhost:5000/morePost")
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
        })
    },[])
    return (
        <div>
            <h2>posts</h2>

            open console / inspect to see data
        </div>
    );
};

export default Posts;