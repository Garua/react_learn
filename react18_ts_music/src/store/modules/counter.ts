import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 0,
    message: 'Hello Redux'
  },
  reducers: {}
})

// export const {} = counterSlice.actions
export default counterSlice.reducer
