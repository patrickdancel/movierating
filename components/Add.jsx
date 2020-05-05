import React, { useState } from 'react'
import axios from 'axios';
import {navigate} from '@reach/router';

const Add = (props) => {
    const [formState, setFormState] = useState({
        title:"",
        description:"",
        url:"",
        reviews:[]
    })
    const [errorState, setErrorState] = useState({
        title:"",
        description:""
    })
    const onChangeHandler = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
    }
    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/v1/create', formState)
            .then(response => {
                if(response.data.errors){
                    setErrorState({
                        title: response.data.errors.title ? response.data.errors.title.message : "",
                        description: response.data.errors.description ? response.data.errors.description.message : ""
                    })
                } else {
                  console.log('success')
                  navigate("/")  
                }
            })
            .catch(error => console.log(error))
    }
    return ( 
        <div>
            <p>{errorState.title}</p>
            <p>{errorState.description}</p>
            <form onSubmit={onSubmitHandler}>
                <p>Movie Title</p>
                <input type="text" name="title" onChange={onChangeHandler} />
                <p>Description</p>
                <input type="text" name="description" onChange={onChangeHandler} />
                <p>URL</p>
                <input type="text" name="url" onChange={onChangeHandler} />
                <button type="submit">Submit</button>
            </form>
        </div>
     );
}
 
export default Add;
