import React from 'react';
import './Result.styles.css';
import { useSelector } from 'react-redux';



export default function Result({end,numberOfCards}) {
const {totalMoves,badMoves} = useSelector((state) => state.movesSlice)
let result = (totalMoves-badMoves+numberOfCards/2)/totalMoves*100;
if(result>100){
    result=100
}
 
  return (
    <div  className='results'>
        <div className='result-box'>
            <span> </span>
            <span> </span>
            <span> </span>
            <span> </span>
            <span className='btn-primary'>Total Moves: {totalMoves}</span>
        </div>
        <div className='result-box'>
            <span> </span>
            <span> </span>
            <span> </span>
            <span> </span>
            <span className='btn-primary'>Bad Moves:{badMoves}</span>
        </div>
        <div className='result-box'>
            <span> </span>
            <span> </span>
            <span> </span>
            <span> </span>
            <span className='btn-primary'>Result: {end? `${Math.ceil(result)}%`:<i className="fa-solid fa-spinner fa-spin"></i>}</span>
        </div>
        <div className='result-box'>
            <span> </span>
            <span> </span>
            <span> </span>
            <span> </span>
            <a href='/' className='btn-primary btn-new'> new game</a>
        </div>
    </div>
    )
}
        

