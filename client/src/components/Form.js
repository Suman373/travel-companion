import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import timeago from "../../node_modules/time-ago/timeago";
import "../styles/Form.css"

function Form({p}) {
  return (
      <>
      <div className="card">
                  <label>Place</label>
                  <h4 className="place">{p.place}</h4>
                  <label>Review</label>
                  <p className="desc">{p.desc}</p>
                  <label>Rating</label>
                  <div className="stars">
                    {Array(p.rating).fill(<StarIcon className="star" />)}
                  </div>
                  <label>Information</label>
                  <span className="username">
                    Created by <b>{p.username}</b>
                  </span>
                  <span className="date">{timeago.ago(p.createdAt)}</span>
                </div>
      </>
  )
}

export default Form