// ****** for state full authentication *********//
// const sessionidToUserMap=new Map();

// function setuser(id,user){
//     sessionidToUserMap.set(id,user);
// }


// function getuser(id){
//     return sessionidToUserMap.get(id);
// }

const jwt=require('jsonwebtoken')
const secret="priyansh@12";


function setuser(user){
    try {
        // Sign the user object with the secret key
        return jwt.sign({
            _id: user._id,
            email: user.email,
        }, secret);
    } catch (error) {
        console.error('Error signing JWT:', error.message);
        return null;
    }
}


function getuser(token){
    try {
        if (!token) return null;
        // Verify the token with the secret key
        return jwt.verify(token, secret);
    } catch (error) {
        console.error('Error verifying JWT:', error.message);
        return null;
    }  

     
 
      

}

module.exports={
    setuser,
    getuser,
};