import One,{Onem} from './One';
import Two, {Twom} from './Two';
import Three, {Threem} from './Three';
import Four, {Fourm} from './Four';
import Five, {Fivem} from './Five';
import { useGlobalContext } from "./Context";
import Pamutation4 from './Pamutation4';
import Pamutation3 from './Pamutation3';
import Sure2 from './Sure2';


export default function App() {
  const { one1, two2, three3, four4, five5, sure2, msure2, pam3, pam4, mpam3, mpam4} = useGlobalContext();


  // const mslot1 = [parseInt (slot1)]
  // const mslot2 = [parseInt (slot2)]
  // const mslot3 = [parseInt (slot3)]

  // const mslot4 = [parseInt (slot4)]
// const ck = ()=>{ 
//   return [Math.floor(Math.random() * 12)]
//   }

// console.log(ck(12))
// const buz = 'c'
// const [pass, setPas] = useState(buz==='cat'?true:false);

// console.log(mslot1)
// console.log(first)
// console.log(second)
// console.log(third)
// console.log(fourth)
// console.log(fifth)

// console.log(pass)




// if(mslot1[0], mslot2[0], mslot3[0] || mslot1[0], mslot2[0], mslot4[0]||
//   mslot1[0], mslot3[0], mslot4[0] || mslot2[0], mslot3[0], mslot4[0] && (mslot1[0]) ){
//     return <div>
//       <h2>go</h2>
//     </div>
//   }


// useEffect(()=>{
//     const nh = setTimeout(() => {
//         setpk1(first[0]);
//         setpk2(second[0]);
//         setpk3(third[0]);
//         setpk4(fourth[0]);
//         setpk5(fifth[0]);
//     }, 10000)
//     return ()=>{ clearTimeout(nh)}
// })

// console.log(pk1)
// console.log(first[0]+'th')
// console.log(second[0]+'th')


  return (
    <article style={{marginLeft:'0px'}}>
      <center style={{marginLeft: '0px', marginTop:'50px' }}>
    <div className='row' >
    {one1 ? <Onem /> : <One /> }
    {two2 ? <Twom/> : <Two />}
    {three3 ? <Threem /> : <Three />}
    {four4 ? <Fourm /> : <Four />}
    {five5 ? <Fivem /> : <Five />}  
    </div>
    </center>
    <br />
<center style={{marginTop:'0px'}}>
<div style={{marginLeft:'-75px'}}>
<button className='btn-danger' onClick={pam4}>PAM-4</button>
<button className='btn-primary' onClick={pam3}>PAM-3</button>
<button className='btn-danger' onClick={sure2}>SURE-2</button>
</div>
<br />
<div style={{marginLeft:'-35px'}}>
{mpam4 && <Pamutation4 />}
{mpam3 && <Pamutation3 />}
{msure2 && <Sure2 />}
</div>
</center>



    </article>
  );
};

