import React, {useState} from 'react'
import { useGlobalContext } from './Context';


const Pamutation4 = () => {

  const {handleslot1, handleslot2, handleslot3,
    setInput, setInput2, setInput3, input, input2, input3,
    slot1, slot2, slot3, fees, mfees} = useGlobalContext();
  

const [betty, setBetty] = useState(false);
const [jug, setjug] = useState(true)

const handjuga = ()=>{
setjug(slot1 < 1 || slot2 < 1 || slot3 < 1 || fees < 50 ? true : !jug);
setBetty(slot1 < 1 || slot2 < 1 || slot3 < 1 || fees < 50 ? false : !betty);
}

const mslot1 = [parseInt (slot1)]
const mslot2 = [parseInt (slot2)]
const mslot3 = [parseInt (slot3)]
         
const BetResult = ()=>{
  return <center style={{marginLeft: '0px', marginTop:'150px' }}>
  <h2>Coupon:</h2> <br />
      <div className='row' >
    <div style={{marginLeft:'0px'}}>
   <h3>N{fees*35}</h3>
   </div> 
    <div style={{marginLeft:'560px'}}>
   <h3>{mslot1} -- {mslot2} -- {mslot3} </h3>
   </div> 
   </div>
  </center>
}

return (<>
            <center style={{marginLeft: '300px', marginTop:'50px' }}>
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
