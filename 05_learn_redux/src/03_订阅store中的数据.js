const store = require('./store')

const unsubscribe = store.subscribe(()=>{
    console.log('订阅数据的变化:',store.getState())
})



// 修改store中的数据:必须使用action

const nameAction = {type:'change_name',name:'kobe'}
store.dispatch(nameAction)



const nameAction1 = {type:'change_name',name:'loocc'}
store.dispatch(nameAction1)

// 取消订阅
unsubscribe()
const countAction = {type:'change_counter',num:11}
store.dispatch(countAction)
