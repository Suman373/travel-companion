import React,{useState} from 'react'
import "../styles/Review.css"
const axios = require("axios")



function Review({Username,Place,setTags,setPlace,Tags}) {
  
    const [title, setTitle] = useState(null);
  const [desc, setDesc] = useState(null);
  const [star, setStar] = useState(0);


const handleSubmit = async (e) => {
    e.preventDefault();
    const newTag = {
      username: Username,
      title,
      desc,
      rating: star,
      lat: Place.lat,
      long: Place.long,
    };

    // const options = {
    //     method: "POST",
    //     body: JSON.stringify(newTag),
    //     headers: {
    //         "Content-Type": "application/json"
    //     }
    // }
    
  const res = await axios.post("/tags", newTag);
  const data=res.data
  console.log(res)
    setTags = [...Tags, data]
    setPlace(null);
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