import axios from "axios";

const BASE_URL = 'https://hp-api.onrender.com/api';

function listSpells({limit, offset}){

    return axios.get(`${BASE_URL}/spells`,{
        params:{
            limit,
            offset
        }
    }).then((result)=> {
        return result;
        });

}



export {listSpells};