import {createRouter, createWebHashHistory} from 'vue-router';

import Home from './views/Home';
import Students from './views/Students';
import Teachers from './views/Teachers';
import Spells from './views/Spells';

const routes=[
    {
        path:"/" ,
        name:"home" ,
        component: Home
    },
    {
        path:"/students" ,
        name:"students" ,
        component: Students
    },
    {
        path:"/teachers",
        name:"teachers",
        component: Teachers
    },
    {
        path:"/spells" ,
        name:"spells" ,
        component: Spells
    }

];

const router= createRouter(
    {
        routes,
        history:createWebHashHistory()
    
    }
)

export default router;