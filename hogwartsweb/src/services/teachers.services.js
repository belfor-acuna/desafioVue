import axios from "axios";

const BASE_URL = 'https://hp-api.onrender.com/api';

function listTeachers({limit, offset}){

    return axios.get(`${BASE_URL}/characters/staff`,{
        params:{
            limit,
            offset
        }
    }).then((result)=> {
        return result;
        });

}

function getTeacher(id){

    return axios.get(`${BASE_URL}/character/${id}`).then((result)=> {
        return result.data[0];
    });
}


export {listTeachers, getTeacher};