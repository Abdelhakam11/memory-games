import React from 'react';
import './Card.styles.css';



export default function Card({id,name,cardHandle}) {
  return (
    <div className="card">
        <div className='card-container'>
            <div onClick={(e)=>cardHandle(e,id)} id={id} className= 'rotate-0 flip-card-inner'>

                <div className="flip-card-front">
                    <span className='card-hidden'></span>
                    <i className="card-icon fa-solid fa-question"></i>
                </div>

                <div className="flip-card-back">
                    <img className='card-image' src={`https://robohash.org/${id}?set=set2`} />
                    <h4>{name}</h4>
                </div>
            </div> 
        </div>
    </div>
    

     )
}
        

