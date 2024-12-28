export const getUser = async (req , res , next) => {
    try{
        res.send('get user')
    }catch(err){
        throw new Error(`Error in getUser:${err}`)
    }
}




// export const getUser = async (req , res , next) => {
//     try{

//     }catch(err){
//         throw new Error(`Error in getUser:${err}`)
//     }
// }