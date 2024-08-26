import { useState } from 'react'
import {useRoutes} from "react-router-dom";
import routes from "@/router/route";
import {CssBaseline} from "@mui/material";


function App() {
  const [count, setCount] = useState(0)

  return (
      <>
        <CssBaseline/>
        {
            useRoutes(routes)
        }
    </>
  )
}

export default App
