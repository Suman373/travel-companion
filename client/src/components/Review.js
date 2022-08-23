import React,{useState} from 'react'
import "../styles/Review.css"
import {Navigate} from "react-router-dom"
const axios = require("axios")

function Review({Username,Place,setTags,setPlace,Tags}) {
  
  const [title, setTitle] = useState(null);
  const [desc, setDesc] = useState(null);
  const [star, setStar] = useState(0);


const handleSubmit = (e) => {
    e.preventDefault();
    const newTag = {
      username: Username,
      place:title,
      desc,
      rating: star,
      coordinates: {
        lati: Place.lat,
        long: Place.long,
      }
    };
console.log(newTag)
    // const options = {
    //     method: "POST",
    //     body: JSON.stringify(newTag),
    //     headers: {
    //         "Content-Type": "application/json"
    //     }
    // }
        
  const postData = async () => {
    const res = await axios.post("tags/", newTag);
    const data = res.data
    console.log(data)
    setTags = [...Tags, data]
    setPlace(null);
    window.location.reload();
  }

  postData();
  
  };


  return (
    <div>
      
                <form onSubmit={handleSubmit}>
                  <label>Title</label>
                  <input
                    placeholder="Enter a title"
                    autoFocus
                    onChange={(e) => setTitle(e.target.value)}
                  />
                  <label>Description</label>
                  <textarea
                    placeholder="Say us something about this place."
                    onChange={(e) => setDesc(e.target.value)}
                  />
                  <label>Rating</label>
                  <select onChange={(e) => setStar(e.target.value)}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                  <button type="submit" className="submitButton">
                    Add Review
                  </button>
                </form>
              </div>
  )
}

export default Review