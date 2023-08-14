import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Cards.styles.css';
import Card from '../Card/Card.component';
import Result from '../Result/Result.component';
import { useDispatch, useSelector } from 'react-redux'
import {  addApperanceCard, incrementTotalMoves,checkBadMove} from '../../redux/movesSlice';


export default function Cards() {
    let [cards,setCards]=useState([]);
    let [end,setEnd]=useState(false);
    const dispatch= useDispatch()
    const {appearCards} = useSelector((state) => state.movesSlice)
    useEffect(()=>{
        getCards()
    },[])

    
    // fetch api and get cards
    const getCards=async function () {
        try{
            const {data}=await axios.get('https://jsonplaceholder.typicode.com/users');
            cardsHandle(data)
        }catch (error) {
            console.log(error);
          }
        
    }
   
    //use it to random cards
    const sortRandomly = (array) => array.sort(() => Math.random() - 0.5);
    
    const cardsHandle=(cards)=>{
        // limit number of shapes
        let limitedCards=cards.slice(4)
        //duplicate my cards
        limitedCards.push(...limitedCards)
        //sort my data randomly
        let myRandomData=sortRandomly(limitedCards);
        //store my data
        console.log(myRandomData);
        setCards(myRandomData);
        
    }
    



    //logic for games
  
   
    // get all elements that complete
    const finishedCards=function (){
        return Array.from(
            document.getElementsByClassName('display-none')
        );  
    }

    // get all elements at position 180 in y direction
    const allRotateCards=function (){
        return Array.from(
            document.getElementsByClassName('rotate-180')
        );  
    }


    //check if he complete game or no
    const checkEndGame = function (finishedCards) {
        if(finishedCards.length===cards.length){
            setEnd(true);
        }
    }
    
    //flip cards 
    const flipCard= function(e,id){
        const layerCard=e.target.parentElement;
        const innerCard=layerCard.parentElement;
        const addCards = [...appearCards]
        if(layerCard.classList.value==='flip-card-front'){
          addCards.push(id)
          dispatch(addApperanceCard(addCards))
          innerCard.classList.remove("rotate-0")
          innerCard.classList.add("rotate-180")
        }else{
          innerCard.classList.remove("rotate-180")
          innerCard.classList.add("rotate-0") 
        } 
      }

    // check if the cards identical or no
    const checkMatching=function (cards,id){
        if(cards.length === 2){
            dispatch(incrementTotalMoves())
            if(cards[0].id === cards[1].id){
                cards.map((card)=>card.parentElement.classList.add("move-to-wallet"))
                setTimeout(function(){
                    cards.map((card)=>card.classList.add("display-none"))
                    let finished= finishedCards()
                    checkEndGame(finished)
                }, 800);
            }else{
                dispatch(checkBadMove(id))
            }
            setTimeout(function(){
                cards.map((card)=>card.classList.remove("rotate-180"))
                cards.map((card)=>card.classList.add("rotate-0"))
            }, 400);
        }
    }
       
    const cardHandle =  function(e,id){
        flipCard(e,id);
        let cards=   allRotateCards();
        checkMatching(cards,id)
    }

  return (
    <div className="cards">
        {
        end?
        <Result end={end} numberOfCards={cards.length} />
        :<>
        <div className="card-contianer">
            {  
                cards.map((card,index)=> <Card cardHandle={cardHandle} index={index} key={index} {...card} />)
            }
            
        </div>
            <div className="wallet-container">
                <div className='wallet'><i className="fa-solid fa-wallet"></i></div>
            </div>
        
        <Result end={end} numberOfCards={cards.length}/>
        </>
        }
    </div>
  )
}
