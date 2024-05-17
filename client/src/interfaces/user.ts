import { card } from "../hooks/useApi"

export interface User {
    email:string,
    firstName:string,
    lastName:string,
    _id:string,
    list:Array<card>,
    likes:[]
}
export default User