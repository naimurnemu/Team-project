import React from 'react';

<<<<<<< HEAD

const Post = () => {
   

    return (
        <div>
            <h2>posts</h2>
=======
const Post = () => {
    const { user } = useAuth()

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {

        const formData = new FormData();
        formData.append("title", data.title);
        formData.append("post", data.post);
        formData.append("user", user);
        formData.append("date", new Date().toLocaleString());
        formData.append("image", data.image[0]);

        const url = "http://localhost:5000/newPost";
        fetch(url, {
            method: "POST",
            body: formData,
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)

                if (data.acknowledged) {
                    reset();
                }
            });
    };

    return (
        <div className="container-fluid bg-light">
            <h2>This is post</h2>
            <div className="row">
                <div className="col-md-6">

                    <img style={{ width: "100%" }} src="https://cdn.dribbble.com/users/246068/screenshots/10493400/media/1b1c6d5b0c0d85e7c6db45b75445641e.gif" alt="" />
                </div>
                <div className="col-md-6">
                    <form className="text-center" onSubmit={handleSubmit(onSubmit)}>
                        <input
                            className="my-2 w-50 rounded-2 border-2 ps-2"
                            {...register("title")}
                            required
                            type="text"
                            placeholder="Title"
                        />

                        <br />
                        <textarea
                            style={{ height: '180px' }}
                            className="my-2 w-50 rounded-2 border-2 ps-2"
                            {...register("post")}
                            required
                            type="text"
                            placeholder="What is on your mind?"
                        />

                        <br />

                        <br />
                        <input
                            className="my-2 w-50 rounded-2 border-2 "
                            {...register("image")}
                            accept="image/*"
                            type="file"
                        />
                        <br />
                        <input
                            className="my-2 w-50 bg-danger rounded-3"
                            type="submit"
                        />
                    </form>
                </div>
            </div>
>>>>>>> 9f12b45f5ce6ebac037127f6755d902bb675529f
        </div>
    );
};

export default Post;