import jwt from "jsonwebtoken"

const authUser = async (req, res, next) =>{

    const {token} = req.headers   

    if(!token){
        return res.json({sucess:false, message: "Not Authorized Login Again"})
    }

    try {
        
        const token_decode = jwt.verify(token, process.env.JWT_SECRET)

        if(token_decode.id){
            req.body.userId = token_decode.id;

        }else{
            return res.json({sucess: false, message: "Not Authorized Login Again"})
        }

        next();

    } catch (error) {
        console.log(error);
        return res.json({sucess: false, message: error.message})
    }
}

export default authUser