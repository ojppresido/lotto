import React, {useState} from 'react'
import { useGlobalContext } from './Context';


const Pamutation4 = () => {


const {handleslot1, handleslot2, handleslot3, handleslot4,
  setInput, setInput2, setInput3, setInput4, input, input2, input3,
  input4, slot1, slot2, slot3, slot4, fees, mfees } = useGlobalContext();


const [betty, setBetty] = useState(false);
const [jug, setjug] = useState(true)

const handjuga = ()=>{
setjug(slot1 < 1 || slot2 < 1 || slot3 < 1 || slot4 < 1 || fees < 50 ? true : !jug);
setBetty(slot1 < 1 || slot2 < 1 || slot3 < 1 || slot4 < 1 || fees < 50 ? false : !betty);
}

const mslot1 = [parseInt (slot1)]
const mslot2 = [parseInt (slot2)]
const mslot3 = [parseInt (slot3)]
const mslot4 = [parseInt (slot4)]
       
const BetResult = ()=>{
return <center style={{marginLeft: '0px', marginTop:'150px' }}>
<h2>Coupon:</h2> <br />
    <div className='row' >
  <div style={{marginLeft:'0px'}}>
 <h3>N{fees*35}</h3>
 </div> 
  <div style={{marginLeft:'560px'}}>
 <h3>{mslot1} -- {mslot2} -- {mslot3} -- {mslot4} </h3>
 </div> 
 </div>
</center>
}

return (<>
          <center style={{marginLeft: '190px', marginTop:'50px' }}>
  <div className='row' >
  
  <div className='col-xs-2' style={{marginLeft:'30px',height:'230px', width:'230px', border:'solid', borderRadius:'50%', backgroundColor:'blue'}} >
        <h1 style={{fontSize:'150px'}}>{slot1}</h1>
          <div style={{marginTop:'50px'}}>
            <input type='number' min='1' max='50' value={input} onChange={setInput} />
  <div>
  <button className='btn btn-primary ' onClick={handleslot1}
  style={{backgroundColor:'blue', width:'200px'}}>ADD</button>
  </div>
          </div>
       </div>     
  
       <div className='col-xs-2' style={{marginLeft:'30px',height:'230px', width:'230px', border:'solid', borderRadius:'50%', backgroundColor:'blue'}} >
        <h1 style={{fontSize:'150px'}}>{slot2}</h1>
          <div style={{marginTop:'50px'}}>
            <input type='number' min='1' max='50' value={input2} onChange={setInput2} />
  <div>
  <button className='btn btn-primary ' onClick={handleslot2}
  style={{backgroundColor:'blue', width:'200px'}}>ADD</button>
  </div>
          </div>
       </div>   

   <div className='col-xs-2' style={{marginLeft:'30px',height:'230px', width:'230px', border:'solid', borderRadius:'50%', backgroundColor:'blue'}} >
        <h1 style={{fontSize:'150px'}}>{slot3}</h1>
          <div style={{marginTop:'50px'}}>
            <input type='number' min='1' max='50' value={input3} onChange={setInput3} />
  <div>
  <button className='btn btn-primary ' onClick={handleslot3}
  style={{backgroundColor:'blue', width:'200px'}}>ADD</button>
  </div>
          </div>
       </div>     

  <div className='col-xs-2' style={{marginLeft:'30px',height:'230px', width:'230px', border:'solid', borderRadius:'50%', backgroundColor:'blue'}} >
        <h1 style={{fontSize:'150px'}}>{slot4}</h1>
          <div style={{marginTop:'50px'}}>
            <input type='number' min='1' max='50' value={input4} onChange={setInput4} />
  <div>
  <button className='btn btn-primary ' onClick={handleslot4}
  style={{backgroundColor:'blue', width:'200px'}}>ADD</button>
  </div>
          </div>
       </div>     
    
  
  </div>
  </center>
  
  
  <center style={{marginTop:'70px'}}>
    <h3>Amount</h3>
  <input type='number'  value={fees} onChange={mfees} />
  </center>
  
  
  <center style={{marginTop:'150px'}}>
    <div>
  <button className='btn btn-primary ' onClick={handjuga}
  style={{backgroundColor:'blue', width:'200px'}}>{jug ? 'PLACE A BET' : 'PLACE ANOTHER BET'}
  </button> 
  
  </div>
  <div>{betty && <BetResult />}
  </div>
  </center>
  
     </> )
}


export default Pamutation4



//     const {first, second, third, fourth, fifth, handlemark, handleslot1, handleslot2, handleslot3, handleslot4,
//         setInput, setInput2, setInput3, setInput4, one1, two2, three3, four4, five5, input, input2, input3,
//         input4, slot1, slot2, slot3, slot4, bet, fees, mfees, betamount} = useGlobalContext();
      
      
//         const mslot1 = [parseInt (slot1)]
//         const mslot2 = [parseInt (slot2)]
//         const mslot3 = [parseInt (slot3)]
//         const mslot4 = [parseInt (slot4)]

//     if (mslot1[0], mslot2[0], mslot3[0], mslot4[0] && (mslot1[0]===first[0] || mslot1[0]===second[0] || mslot1[0]===third[0] ||
//         mslot1[0]===fourth[0] || mslot1[0]===fifth[0]) && ( mslot2[0]===first[0] ||
//          mslot2[0]===second[0] || mslot2[0]===third[0] || mslot2[0]===fourth[0] ||
//           mslot2[0]===fifth[0])){
//         return <div style={{marginLeft:'50px'}}>
//         <h1>first_match</h1>
//         <h3> {first[0]} --{second[0]} --{third[0]}-- {fourth[0]} --{fifth[0]}</h3> <br />
//         <h3>{mslot1} --{mslot2}-- {mslot3} --{mslot4} </h3>
//         <h2>You won: </h2><h3>{fees*31.23}</h3>
//         </div>
//       }
      
//       if (mslot1[0], mslot2[0], mslot3[0], mslot4[0] && (mslot1[0]===first[0] || mslot1[0]===second[0] || mslot1[0]===third[0] ||
//         mslot1[0]===fourth[0] || mslot1[0]===fifth[0]) && ( mslot3[0]===first[0] ||
//          mslot3[0]===second[0] || mslot3[0]===third[0] || mslot3[0]===fourth[0] ||
//           mslot3[0]===fifth[0])){
//         return<div style={{marginLeft:'50px'}}>
//            <h1>second_match</h1>
//            <h3> {first[0]}-- {second[0]} --{third[0]} --{fourth[0]} --{fifth[0]}</h3> <br />
//            <h3>{mslot1} --{mslot2} --{mslot3} --{mslot4} </h3>
//         <h2>You won: </h2><h3>{fees*31.23}</h3>
      
//            </div>
//       }
      
//       if (mslot1[0], mslot2[0], mslot3[0], mslot4[0] && (mslot1[0]===first[0] || mslot1[0]===second[0] || mslot1[0]===third[0] ||
//         mslot1[0]===fourth[0] || mslot1[0]===fifth[0]) && ( mslot4[0]===first[0] ||
//          mslot4[0]===second[0] || mslot4[0]===third[0] || mslot4[0]===fourth[0] ||
//           mslot4[0]===fifth[0])){
//         return <div style={{marginLeft:'50px'}}>
//         <h1>third_match</h1>
//         <h3> {first[0]} --{second[0]} --{third[0]}-- {fourth[0]}-- {fifth[0]}</h3> <br />
//         <h3>{mslot1}-- {mslot2} --{mslot3}-- {mslot4} </h3>
//         <h2>You won: </h2><h3>{fees*32.23}</h3>
      
//         </div>
//       }
      
//       if (mslot1[0], mslot2[0], mslot3[0], mslot4[0] && (mslot2[0]===first[0] || mslot2[0]===second[0] || mslot2[0]===third[0] ||
//         mslot2[0]===fourth[0] || mslot2[0]===fifth[0]) && ( mslot3[0]===first[0] ||
//          mslot3[0]===second[0] || mslot3[0]===third[0] || mslot3[0]===fourth[0] ||
//           mslot3[0]===fifth[0])){
//         return<div style={{marginLeft:'50px'}}>
//         <h1>fourth_match</h1>
//         <h3> {first[0]}-- {second[0]}-- {third[0]}-- {fourth[0]} --{fifth[0]}</h3> <br />
//         <h3>{mslot1}-- {mslot2} --{mslot3} --{mslot4} </h3>
//         <h2>You won: </h2><h3>{fees*31.23}</h3>
      
//         </div>
//       }
      
//       if (mslot1[0], mslot2[0], mslot3[0], mslot4[0] && (mslot2[0]===first[0] || mslot2[0]===second[0] || mslot2[0]===third[0] ||
//         mslot2[0]===fourth[0] || mslot2[0]===fifth[0]) && ( mslot4[0]===first[0] ||
//          mslot4[0]===second[0] || mslot4[0]===third[0] || mslot4[0]===fourth[0] ||
//           mslot4[0]===fifth[0])){
//         return<div style={{marginLeft:'50px'}}>
//         <h1>fifth_match</h1>
//         <h3> {first[0]}-- {second[0]}-- {third[0]}-- {fourth[0]}-- {fifth[0]}</h3> <br />
//         <h3>{mslot1}-- {mslot2}-- {mslot3}-- {mslot4} </h3>
//         <h2>You won: </h2><h3>{fees*31.23}</h3>
      
//         </div>
//       }
      
//       if (mslot1[0], mslot2[0], mslot3[0], mslot4[0] && (mslot3[0]===first[0] || mslot3[0]===second[0] || mslot3[0]===third[0] ||
//         mslot3[0]===fourth[0] || mslot3[0]===fifth[0]) && ( mslot4[0]===first[0] ||
//          mslot4[0]===second[0] || mslot4[0]===third[0] || mslot4[0]===fourth[0] ||
//           mslot4[0]===fifth[0])){
//         return <div style={{marginLeft:'50px'}}>
//         <h1>sixth_match</h1>
//         <h3> {first[0]}-- {second[0]}-- {third[0]} --{fourth[0]}-- {fifth[0]}</h3> <br />
//         <h3>{mslot1} --{mslot2} --{mslot3} --{mslot4} </h3>
//         <h2>You won: </h2><h3>{fees*31.23}</h3>
      
//         </div>
//       }
      
//     return (<>
//         <center style={{marginLeft: '150px', marginTop:'50px' }}>
// <div className='row' >

// <div className='col-xs-2' style={{marginLeft:'30px',height:'230px', width:'230px', border:'solid', borderRadius:'50%', backgroundColor:'blue'}} >
//       <h1 style={{fontSize:'150px'}}>{slot1}</h1>
//         <div style={{marginTop:'50px'}}>
//           <input type='number' min='1' max='50' value={input} onChange={setInput} />
// <div>
// <button className='btn btn-primary ' onClick={handleslot1}
// style={{backgroundColor:'blue', width:'200px'}}>ADD</button>
// </div>
//         </div>
//      </div>     

//      <div className='col-xs-2' style={{marginLeft:'30px',height:'230px', width:'230px', border:'solid', borderRadius:'50%', backgroundColor:'blue'}} >
//       <h1 style={{fontSize:'150px'}}>{slot2}</h1>
//         <div style={{marginTop:'50px'}}>
//           <input type='number' min='1' max='50' value={input2} onChange={setInput2} />
// <div>
// <button className='btn btn-primary ' onClick={handleslot2}
// style={{backgroundColor:'blue', width:'200px'}}>ADD</button>
// </div>
//         </div>
//      </div>     


//      <div className='col-xs-2' style={{marginLeft:'30px',height:'230px', width:'230px', border:'solid', borderRadius:'50%', backgroundColor:'blue'}} >
//       <h1 style={{fontSize:'150px'}}>{slot3}</h1>
//         <div style={{marginTop:'50px'}}>
//           <input type='number' min='1' max='50' value={input3} onChange={setInput3} />
// <div>
// <button className='btn btn-primary ' onClick={handleslot3}
// style={{backgroundColor:'blue', width:'200px'}}>ADD</button>
// </div>
//         </div>
//      </div>     


//      <div className='col-xs-2' style={{marginLeft:'30px',height:'230px', width:'230px', border:'solid', borderRadius:'50%', backgroundColor:'blue'}} >
//       <h1 style={{fontSize:'150px'}}>{slot4}</h1>
//         <div style={{marginTop:'50px'}}>
//           <input type='number' min='1' max='50' value={input4} onChange={setInput4} />
// <div>
// <button className='btn btn-primary ' onClick={handleslot4}
// style={{backgroundColor:'blue', width:'200px'}}>ADD</button>
// </div>
//         </div>
//      </div>     


// </div>
// </center>


// <center style={{marginTop:'70px'}}>
// <h3>Amount</h3>
// <input type='number'  value={fees} onChange={mfees} />
// </center>


// <center style={{marginTop:'150px'}}>
// <div>
// <button className='btn btn-primary ' onClick={handlemark}
// style={{backgroundColor:'blue', width:'200px'}}>PLACE A BET</button>
// </div>
// <div>{bet &&
// <center style={{marginLeft: '0px', marginTop:'150px' }}>
// <h2>Coupon:</h2> <br />
//   <div className='row' >
//   <h3> {first[0]}-- {second[0]}-- {third[0]}-- {fourth[0]} --{fifth[0]}</h3> <br />
//         <h3>{mslot1}-- {mslot2} --{mslot3} --{mslot4} </h3>
// </div>
// </center>

// // Selection: {slot1} {slot2} {slot3} {slot4} 
// }
// </div>
// </center>



//    </> )
// }
