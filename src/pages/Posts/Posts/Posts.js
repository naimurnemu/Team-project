import React, { useEffect, useState } from "react";
import NavigationHeader from "../../Shared/NavigationHeader/NavigationHeader";
import Post from "../Post/Post";

const Posts = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/myPost")
            .then((res) => res.json())
            .then((data) => {
                setPosts(data);
            });
    }, []);

    return (
        <div>
            <NavigationHeader />
            <h1 className="text-center py-4 text-danger text">
                School Magazine
            </h1>
            <div className="Container">
                <div className="row justify-content-evenly g-4 p-2">
                    <div className="col-12 col-md-6 d-sm-block">
                        {posts.map((postdata) => (
                            <Post key={postdata._id} post={postdata} />
                        ))}
                    </div>
                    <div className="col-12 col-md-6 d-none d-md-block">
                        <div style={{ position: "fixed" }} className="card">
                            <div className="card-body">
                                <h2 className="card-title">
                                    About our Megazine
                                </h2>
                                <p className="card-text">
                                    Magazines in School There are so many
                                    occasions and opportunities to design your
                                    own magazines in the Jilster Editor for
                                    school purposes – whether in class for
                                    projects, for practical work, for school
                                    newspapers, farewell magazines, memorial
                                    publications, and many other occasions. Do
                                    you have one in mind? Jilster is versatile
                                    In the Jilster Editor, you can design any
                                    magazine you want. Our easy-to-use editor
                                    offers many options – with great,
                                    professionally designed magazine templates
                                    that you can use as a basis and starting
                                    point for your own projects. There is a
                                    template for every topic. Stylish magazines
                                    for every topic Feel free to use all layouts
                                    in the Jilster Editor for any topic. (Take a
                                    look at our article on how you can adapt any
                                    magazine template to any topic.) This way,
                                    each subject gets the right display – and
                                    you can easily shine with your magazine.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Posts;
