import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Details = (props) => {
    const [state, setState] = useState({})
    const [avgState, setAvgState] = useState(0);
    useEffect(() => {
        axios.get(`http://localhost:8000/api/v1/readOne/${props.id}`)
            .then(response => {
                setState({...response.data})
                let sum = 0;
                for(let i = 0; i < response.data.reviews.length; i++) {
                    sum += response.data.reviews[i].rating
                }
                setAvgState(sum / response.data.reviews.length)
            })
            .catch(error => console.log(error))
    }, [])

    const [formState, setFormState] = useState({
        comment:"",
        rating: 1
    })

    const onChangeHandler = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const  temp = {...state}
        temp.reviews.push(formState);
        setState({...temp})
        let sum = 0
        for(let i = 0; i < temp.reviews.length; i++) {
            if(i === temp.reviews.length - 1) {
                sum += parseInt(temp.reviews[i].rating)
            } else {
                sum += temp.reviews[i].rating
            }
        }
        setAvgState((sum / temp.reviews.length))
        axios.put(`http://localhost:8000/api/v1/updateOne/${state._id}`, temp)
            .then(response =>{
                console.log(response)
            })
            .catch(error => console.log(error))
    }
    return ( 
        <div>
            {state.title ?
                <div>
                    <h1>{state.title}</h1>
                    <p>{state.description}</p>
                    <img src={state.url} alt="" />
                    {state.reviews.map((item, index) => (
                        <div key={index}>
                            <p>{item.comment}</p>
                            <p>{item.rating}</p>
                        </div>    
                    ))}
                </div>
                :
                null    
            }
            <h2>Leave a review!</h2>
            <h3>Average Rating: {avgState}</h3>
            <form onSubmit={onSubmitHandler}>
                <p>Comment</p>
                <input type="text" name="comment" onChange={onChangeHandler} />
                <p>Rating</p>
                <select name="rating" onChange={onChangeHandler}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <button type="submit">Submit</button>
            </form>
        </div>
     );
}
 
export default Details;
