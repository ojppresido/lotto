
const Reducer = (state, action)=>{

    if(action.type==='WEAK'){
        return {...state, first:  1}
    }

    if(action.type==='SLOT1'){
        return {...state, slot1: state.input > 50 ? 0 : state.input < 1 ? 0 : state.input < 10 ? 0+state.input : state.input, input: ''}
    }
    if(action.type==='SLOT2'){
        return {...state, slot2: (state.input2 > 50 ? 0 : state.input2 < 1 ? 0 : state.input2 < 10 ? 0+state.input2 : state.input2), input2: ''}
    }
    if(action.type==='SLOT3'){
        return {...state, slot3: (state.input3 > 50 ? 0 : state.input3 < 1 ? 0 : state.input3 < 10 ? 0+state.input3 : state.input3), input3: ''}
    }
    if(action.type==='SLOT4'){
        return {...state, slot4: (state.input4 > 50 ? 0 : state.input4 < 1 ? 0 : state.input4 < 10 ? 0+state.input4 : state.input4), input4: ''}
    }
    if(action.type==='MARK'){
        return {...state, bet: !state.bet}
    }
    if(action.type==='SET1'){
        return {...state, input: action.payload, pos1: state.bet ? true : state.first, pos2: state.bet ? true : state.second, pos: state.bet ? true : state.third, pos4: state.bet ? true : state.fourth, pos5: state.bet ? true : state.fifth }
    }
    if(action.type==='SET2'){
        return {...state, input2: action.payload}
    }
    if(action.type==='SET3'){
        return {...state, input3: action.payload}
    }
    if(action.type==='SET4'){
        return {...state, input4: action.payload}
    }
    // if(action.type==='FEES'){
    //     return {...state, fees: state.fees}
    // }
    if(action.type==='MFEES'){
        return {...state, fees: action.payload}
    }
    if(action.type === 'PAM3'){
        return {...state, mpam3: true, mpam4: false, msure2: false, slot1: '', slot2:'', slot3:'', slot4:''}
    }
    if(action.type === 'PAM4'){
        return {...state, mpam3: false, mpam4: true, msure2: false, slot1: '', slot2:'', slot3:'', slot4:''}
    }
    if(action.type === 'SURE2'){
        return {...state, mpam3: false, mpam4: false, msure2: true, slot1: '', slot2:'', slot3:'', slot4:''}
    }
    // if(action.type==='UP'){
    //     return {...state, one1:!state.one1, two2:!state.two2, three3:!state.three3,
    //     four4:!state.four4, five5:!state.five5, first: [Math.floor(Math.random() *5)], second:[Math.floor(Math.random() *5)], third:[Math.floor(Math.random() *50)], fourth:[Math.floor(Math.random() *50)], fifth:[Math.floor(Math.random() *50)]}
    // }
    if(action.type==='UP'){
        return {...state, mok1:state.first, mok2:state.second, mok3:state.third,
            mok4:state.fourth, mok5:state.fifth, one1:false, two2:false, three3:false,
            four4:false, five5:false, }
    }
    if(action.type==='SOIL'){
        return {...state, one1:false, two2:false, three3:false,
            four4:false, five5:false, first: [Math.floor(Math.random() * 10) + 1], second:[Math.floor(Math.random() * 10) + 1], third:[Math.floor(Math.random() * 10) + 1], fourth:[Math.floor(Math.random() * 10) + 1], fifth:[Math.floor(Math.random()* 10) + 1]}
    }
    return state;
}





export default Reducer;