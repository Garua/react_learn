const store = require('./store')

console.log(store.getState())

// 修改store中的数据:必须使用action

const nameAction = {type:'change_name',name:'kobe'}
store.dispatch(nameAction)
console.log(store.getState())



const nameAction1 = {type:'change_name',name:'loocc'}
store.dispatch(nameAction1)
console.log(store.getState())


const countAction = {type:'change_counter',num:1}
store.dispatch(countAction)
console.log(store.getState())