const store = require('./store')
const {changeNameAction} = require('./store/actionCreators')

store.subscribe(()=>{
    console.log('util:',store.getState())
})
store.dispatch(changeNameAction('curry'))
