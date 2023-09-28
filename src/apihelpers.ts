import { 
    confirmSignUp,
    signUp,
    SignUpInput,
    ConfirmSignUpInput,
    signOut,
    SignInInput,
    confirmSignIn,
    ConfirmSignInInput,
    signIn
} from "aws-amplify/auth"

export const handleSignUp = async (userSignUp:SignUpInput):Promise<void> => {
    try {
      const res = await signUp(userSignUp)
      console.log(res)
    } catch(e){
      console.log(e)
    }
  }

export const handleConfirmSignUp = async (userSignUpConfirmation:ConfirmSignUpInput):Promise<void> => {
    try {
      const res = await confirmSignUp(userSignUpConfirmation)
      console.log(res)
    } catch (e){
      console.log(e)
    }
}

export const handleSignIn = async (userSignUp:SignInInput):Promise<void> => {
    try {
      const res = await signIn(userSignUp)
      console.log(res)
    } catch(e){
      console.log(e)
    }
  }

export const handleConfirmSignIn = async (userSignInConfirmation:ConfirmSignInInput):Promise<void> => {
    try {
      const res = await confirmSignIn(userSignInConfirmation)
      console.log(res)
    } catch (e){
      console.log(e)
    }
}

export const handleSignOut = async () => {
    try {
        await signOut()
    } catch(e){
        console.log(e)
    }
}