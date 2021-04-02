import React, { useState} from 'react'
import { useGlobalContext } from './Context';


const Pamutation4 = () => {

const {handleslot1, handleslot2,
      setInput, setInput2, input, input2,
       slot1, slot2, fees, mfees} = useGlobalContext();
      

const [betty, setBetty] = useState(false);
const [jug, setjug] = useState(true)
// const [pos1, setPos1] = useState(first[0]);
// const [pos2, setPos2] = useState(second[0]);
// const [pos3, setPos3] = useState(third[0]);
// const [pos4, setPos4] = useState(fourth[0]);
// const [pos5, setPos5] = useState(fifth[0]);

//  console.log(first[0]);
//  console.log(second[0]);
//  console.log(third[0]);
//  console.log(fourth[0]);
//  console.log(fifth[0]);

//  const [pk1, setpk1] = useState('');
// const [pk2, setpk2] = useState('');
// const [pk3, setpk3] = useState('');
// const [pk4, setpk4] = useState('');
// const [pk5, setpk5] = useState('');
//  useEffect(()=>{
//   const nh = setTimeout(() => {
//       setpk1(pos1);
//       setpk2(pos2);
//       setpk3(pos3);
//       setpk4(pos4);
//       setpk5(pos5);
      
//   }, 5000)
//   return ()=>{ clearTimeout(nh)}
// },[betty])
// const Fish =  `${pk1} -- ${pk2} -- ${pk3} -- ${pk4} -- ${pk5}`

//  const WinOrLoss = ()=>{
//       return <>
//       <div>
//       <h3 style={{marginLeft:'530px'}}>{Fish}</h3>
//       </div>
//       <RealResult  />
      
//         </>
//     };


const handjuga = ()=>{
    setjug(slot2 < 1 || slot1 < 1 || fees < 50 ? true : !jug);
    setBetty(slot2 < 1 || slot1 < 1 || fees < 50 ? false : !betty);
    // setPos1(first[0]);
    // setPos2(second[0]);
    // setPos3(third[0]);
    // setPos4(fourth[0]);
    // setPos5(fifth[0]);
}

const mslot1 = [parseInt (slot1)]
const mslot2 = [parseInt (slot2)]
// const mslot3 = [parseInt (slot3)]
// const mslot4 = [parseInt (slot4)]

// const RealResult = ()=>{
//   if ((mslot1[0]===pos1 || mslot1[0]===pos2 || mslot1[0]===pos3 ||
//       mslot1[0]===pos4 || mslot1[0]===pos5) && ( mslot2[0]===pos1 ||
//        mslot2[0]===pos2 || mslot2[0]===pos3 || mslot2[0]===pos4 ||
//         mslot2[0]===pos5)){
//             return  <div style={{marginLeft:'1250px', marginTop:'-40px'}}>
//             <h3>You Win</h3>
//                 </div>
//   }else{
//     return  <div style={{marginLeft:'1250px', marginTop:'-40px'}}>
//     <h3>You Loss</h3>
//         </div>
//   }
//   };
    
//     useEffect(()=>{
//       const mk = setTimeout(() => {
//         WinOrLoss()
//       }, 5000);
//     })

             
const BetResult = ()=>{
      return <center style={{marginLeft: '0px', marginTop:'150px' }}>
      <h2>Coupon:</h2> <br />
          <div className='row' >
        <div style={{marginLeft:'0px'}}>
       <h3>N{fees}</h3>
       </div> 
        <div style={{marginLeft:'620px'}}>
       <h3>{mslot1} -- {mslot2} </h3>
       </div> 
       </div>
      </center>
    }

return (<>
                <center style={{marginLeft: '450px', marginTop:'50px' }}>
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
