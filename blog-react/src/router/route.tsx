import {RouteObject} from "react-router/dist/lib/context";
import React from "react";

const Login  = React.lazy(()=> import('@/login/index'));

const routes:RouteObject[] = [
    {
        path:'/login',
        element:<Login/>
    },

    {
        path:'/',
        element:<Login/>
    }

]


export default routes;