import React, { useEffect } from "react";
import NavigationHeader from "../../Shared/NavigationHeader/NavigationHeader";

const Posts = () => {
<<<<<<< HEAD
    useEffect(() => {
        fetch("http://localhost:5000/myPost")
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            });
    }, []);
    return (
        <div>
            <NavigationHeader />
=======

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
>>>>>>> 9f12b45f5ce6ebac037127f6755d902bb675529f
        </div>
    );
};

export default Posts;
