import { NextApiRequest, NextApiResponse } from "next"


export default (request:NextApiRequest, response:NextApiResponse)=>{
    const users=[
        {id:1, name:'Lima'},
        {id:1, name:'Santos'},
        {id:1, name:'Bento'},
    ]
    return response.json(users)
}