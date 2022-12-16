const store = require('./store')
const {addNumberAction,changeNameAction} = require('./store/actionCreators')
const unsubscribe = store.subscribe(()=>{
    console.log('订阅数据的变化:',store.getState())
})


// actionCreators.js:帮助我们创建action

// const changeNameAction = (name) =>({
//         type:'change_name',
//         name
//     })



// 修改store中的数据:必须使用action

store.dispatch(changeNameAction('kobe'))
store.dispatch(changeNameAction('lilei'))

// 取消订阅
// unsubscribe()
// const addNumberAction = (num)=>({
//     type:'add_number',
//     num
// })
store.dispatch(addNumberAction(10))
store.dispatch(addNumberAction(20))
store.dispatch(addNumberAction(30))
store.dispatch(addNumberAction(100))


