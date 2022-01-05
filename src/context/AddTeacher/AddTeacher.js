import React from 'react';
import { useForm } from 'react-hook-form';

const AddTeacher = () => {
    const { register, handleSubmit,reset } = useForm();
  const onSubmit = data =>{
    const formData = new FormData();
    formData.append('name', data.name)
    formData.append('education', data.education)
    formData.append('subject', data.subject)
    formData.append('phone', data.phone)
    formData.append('about', data.about)
    formData.append('age', data.age)
    formData.append('link', data.link)
    formData.append('image', data.image[0])

    console.log(data)
    

    const url = 'http://localhost:5000/teachers'
    fetch(url, {
      method: "POST",
      body: formData
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      if(data.acknowledged){
        reset()
      }
    
    })

  }

    return (
        <div>
         <h3 >Add Teachers</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
        <input  {...register("name")} required type="text" placeholder="Name" />
        <br/>
        <input  {...register("education")} required type="text" placeholder="Education" />
        <br/>
        <input  {...register("subject")} required type="text" placeholder="Subject" />
        <br/>
        <input  {...register("phone")} required type="text" placeholder="Phone" />
        <br/>
        <input  {...register("about")} required type="text" placeholder="About" />
        <br/>
        <input  {...register("age")} required type="text" placeholder="Age" />
        <br/>
        <input  {...register("link")} required type="URL" placeholder="Your social media link" />
        <br/>
        <input  {...register("image")} accept="image/*"  type="file" />
        <br/>
        <input  type="submit"  />
      </form>
       </div>
    );
};

export default AddTeacher;