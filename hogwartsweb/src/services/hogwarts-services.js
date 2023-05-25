import axios from "axios";

const BASE_URL = 'https://https://hp-api.onrender.com/api/';

function listStudents({limit, offset}){

    return axios.get(`${BASE_URL}/characters/students`,
    {
        params:{

            limit,
            offset

        }
    }).then((result)=> {
        return result.data;
        }
    );

}

export {listStudents};