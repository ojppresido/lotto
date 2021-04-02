import React,{createContext, useContext, useReducer, useEffect} from 'react'
import Reducer from './Reducer';


export const AppContext = createContext();




const initialState = {
    first:  '',
    second: '',
    third:  '',
    fourth: '',
    fifth:  '',
    one1: true, 
    two2: true, 
    three3: true,
    four4: true,
    five5: true,
    input: '',
    input2: '',
    input3: '',
    input4: '',
    slot1: '',
    slot2: '',
    slot3: '',
    slot4: '',
    bet: false, 
    betamount: '',
    fees: '',
    mpam4: false,
    mpam3: false,
    msure2: false,
    pos1: '',
    pos2:'',
    pos3:'',
    pos4:'',
    pos5:'',
    mok1:'',
    mok2:'',
    mok3:'',
    mok4:'',
    mok5:'',
    
}

export const AppProvider = ({children}) => {

const [state, dispatch] = useReducer(Reducer, initialState)
      
      
      useEffect(() => {
        const jotty = setTimeout(() => {
            dispatch({type:'SOIL'});
        },10000);
        return () => {
          clearTimeout(jotty);
        };
      });
    
      // useEffect(() => {
      //   const mark = setTimeout(() => {
      //       dispatch({type:'UP'});
      //   }, 10000)
      //   return () => {
      //     clearTimeout(mark)
      //   }
      // })


    // const fees = (e)=>{
    //   e.preventDefault()
    //   dispatch({type:'FEES'})
    // }
    const pam4 = (e)=>{
        e.preventDefault()
      dispatch({type: 'PAM4'})
    }

    const pam3 = (e)=>{
        e.preventDefault()
        dispatch({type: 'PAM3'})
      }
    const sure2 = (e)=>{
        e.preventDefault()
        dispatch({type: 'SURE2'})
      }

    const mfees = (e)=>{
        
        const job = e.target.value;
        dispatch({type:'MFEES', payload: job})
    }
    const handleslot1 = (e)=>{
          e.preventDefault();
          dispatch({type:'SLOT1'})
        
      }
      const handleslot2 = (e)=>{
          e.preventDefault();
        dispatch({type:'SLOT2'})    
      }
      // const jug = ()=>{
      //   if(state.first===state.second||state.first===state.third||state.first===state.fourth||state.first===state.fifth){
      //   dispatch({type: 'WEAK'})
      //   }
      //   return state.first;
      // }
      const handleslot3 = (e)=>{
          e.preventDefault();
        dispatch({type:'SLOT3'})

        
      }
      const handleslot4 = (e)=>{
          e.preventDefault();
        dispatch({type:'SLOT4'})

        
      }
      const handlemark = ()=>{
        dispatch({type:'MARK'})

      }
      const setInput = (e)=>{
          const job = e.target.value
          dispatch({type: 'SET1', payload: job})
      }
      const setInput2 = (e)=>{
        const job = e.target.value

        dispatch({type: 'SET2', payload: job})
    }
    const setInput3 = (e)=>{
        const job = e.target.value

        dispatch({type: 'SET3', payload: job})
    } 
    const setInput4 = (e)=>{
        const job = e.target.value

        dispatch({type: 'SET4', payload: job})
    }


    


    return (
        <AppContext.Provider
        value={{
            ...state,
            handleslot1,
            handleslot2,
            handleslot3,
            handleslot4,
            handlemark, mfees, pam4, pam3, sure2,
            setInput, setInput2, setInput3, setInput4
        }}
        >
            {children}
        </AppContext.Provider>
    )
}
export const useGlobalContext = ()=>{
    return useContext(AppContext)
}

// export default AppProvider
