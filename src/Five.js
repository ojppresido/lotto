import React from 'react'
import { useState, useEffect } from "react";
import { useGlobalContext } from './Context';



const Five = () => {
  const {fifth} = useGlobalContext();
  // const [pk1, setpk1] = useState('');
  // const [pk2, setpk2] = useState('');
  // const [pk3, setpk3] = useState('');
  // const [pk4, setpk4] = useState('');
  const [pk5, setpk5] = useState('');
  
  useEffect(()=>{
      const nh = setTimeout(() => {
          setpk5(fifth[0]);
          
      }, 10000)
      return ()=>{ clearTimeout(nh)}
  })
  
   
  // console.log(fifth[0])
  
// console.log(fifth)
    return (
        <div>
            <div className='col-xs-2' style={{marginLeft:'30px',height:'230px', width:'230px', border:'solid', borderRadius:'50%', backgroundColor:'pink'}} >
     <h1 style={{fontSize:'150px'}}>{pk5 < 10 ? '0'+pk5 : pk5}</h1>
       
        {/* <h1 style={{fontSize:'150px'}}>{fifth.map((item, index)=>{
          if(item===0){
            return <div key={index}>{item+15}</div>
          }
          if(item < 10){
            return <div key={index}>0{item}</div>
          }
          if(item===second||item===third||item===fourth||item===first){
            return <div key={index}>{item+1}</div>
         }
          else{
          return<div key={index}>{item}</div>}
        })}</h1> */}
        </div>
        </div>
    )
}
export const Fivem = () => {
  
    return (
      <div>
          <div className='col-xs-2' style={{marginLeft:'30px', borderRadius:'50%', border:'solid', backgroundColor:'blue'}} >
   
   <h1 style={{fontSize:'200px'}}>00</h1>
   </div>
      </div>
  )
  }


export default Five
