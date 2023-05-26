import {createRouter, createWebHashHistory} from 'vue-router';

import Home from './views/Home';
import Students from './views/Students';
import Teachers from './views/Teachers';
import Spells from './views/Spells';
import StudentDetails from './views/StudentDetails';
import TeacherDetails from './views/TeacherDetails'; 

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
    },
    {
        path:"/students/:id",
        name:"student_details",
        component:StudentDetails,
        props:true
    },
    {
        path:"/teachers/:id",
        name:"teacher_details",
        component:TeacherDetails,
        props:true
    }

];

const router= createRouter(
    {
        routes,
        history:createWebHashHistory()
    
    }
)

export default router;