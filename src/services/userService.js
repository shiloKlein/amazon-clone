import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '../services/firebase'
console.log('auth', auth)

export const userService = {
    login,
    signup
}

async function login(email, password) {
    try{
        await signInWithEmailAndPassword(auth,email, password)
    }catch(err){
        console.log('err',err)
    // throw new Error(err.massege)
    }

}
async function signup(email, password) {
    try {
        const authRes = await createUserWithEmailAndPassword(auth, email, password)
        console.log('auth', authRes)
    } catch (err) {
        throw new Error(err.message)
    }
}
