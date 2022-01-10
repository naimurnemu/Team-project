import React, { useEffect } from "react";
import NavigationHeader from "../../Shared/NavigationHeader/NavigationHeader";

const Posts = () => {
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
        </div>
    );
};

export default Posts;
