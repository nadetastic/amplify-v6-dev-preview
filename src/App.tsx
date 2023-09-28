import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { ConfirmSignUpInput, SignInInput, SignUpInput } from 'aws-amplify/auth'

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { handleConfirmSignUp, handleSignIn, handleSignUp } from './apihelpers'


function App() {


  return (
    <>
      <div className='flex justify-center'>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div className='container mx-auto'>
      <h1 className='text-4xl text-center'>Amplify V6 Preview</h1>
      <div className="card">
        <div className='flex justify-center py-4'>


       <SignUp />


        </div>
		<div className='flex justify-center'>
			<ConfirmSignUp />
		</div>

		<div className='flex justify-center'>
			<SignIn />
		</div>

        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      </div>
    </>
  )
}

export default App


const SignUp = () => {

	const [ userForm,setUserForm] = useState<SignUpInput>()
	return (
		<Card className="w-[350px]">
		<CardHeader>
	<CardTitle>Sign Up</CardTitle>
	<CardDescription>Create your account.</CardDescription>
		</CardHeader>
		<CardContent>
	<form>
			<div className="grid w-full items-center gap-4">
	<div className="flex flex-col space-y-1.5">
				<Label htmlFor="name">Email</Label>
				<Input id="name" onChange={(e) => setUserForm({...userForm, username: e.target.value} as SignUpInput)} placeholder="Email" />
	</div>
				<div className="flex flex-col space-y-1.5">
				<Label htmlFor="password">Password</Label>
				<Input id="password" onChange={(e) => setUserForm({...userForm,password: e.target.value} as SignUpInput)} placeholder="Password" />
	</div>
	</div>
	</form>
			</CardContent>
		<CardFooter className="flex justify-between">
	<Button variant="outline">Cancel</Button>
	<Button onClick={async () => await handleSignUp({
			username: userForm!.username,
			password: userForm!.password!
		})}>Sign Up</Button>
		</CardFooter>
	</Card>
	);
}

const ConfirmSignUp = () => {

	const [ userForm,setUserForm] = useState<ConfirmSignUpInput>()
	return (
		<Card className="w-[350px]">
			<CardHeader>
				<CardTitle>Confirm Sign Up</CardTitle>
				<CardDescription>Create your account.</CardDescription>
			</CardHeader>
			<CardContent>
				<form>
					<div className="grid w-full items-center gap-4">
						<div className="flex flex-col space-y-1.5">
							<Label htmlFor="name">Email</Label>
							<Input id="name" onChange={(e) => setUserForm({...userForm, username: e.target.value} as ConfirmSignUpInput)} placeholder="Email" />
						</div>
						<div className="flex flex-col space-y-1.5">
							<Label htmlFor="confirmationCode">Confirmation Code</Label>
							<Input id="confirmationCode" onChange={(e) => setUserForm({...userForm,confirmationCode: e.target.value} as ConfirmSignUpInput)} placeholder="Code" />
						</div>
					</div>
				</form>
			</CardContent>
			<CardFooter className="flex justify-between">
				<Button variant="outline">Cancel</Button>
				<Button onClick={async () => await handleConfirmSignUp({
					username: userForm!.username,
					confirmationCode: userForm!.confirmationCode
				})}>Confirm Sign Up</Button>
			</CardFooter>
		</Card> 
	);
}

const SignIn = () => {

	const [ userForm,setUserForm] = useState<SignInInput>()
	return (
		<Card className="w-[350px]">
			<CardHeader>
				<CardTitle>Sign In</CardTitle>
				<CardDescription>Sign In To your account.</CardDescription>
			</CardHeader>
			<CardContent>
				<form>
					<div className="grid w-full items-center gap-4">
						<div className="flex flex-col space-y-1.5">
							<Label htmlFor="name">Email</Label>
							<Input id="name" onChange={(e) => setUserForm({...userForm, username: e.target.value} as SignInInput)} placeholder="Email" />
						</div>
						<div className="flex flex-col space-y-1.5">
							<Label htmlFor="password">Password</Label>
							<Input id="password" onChange={(e) => setUserForm({...userForm,password: e.target.value} as SignInInput)} placeholder="Password" />
						</div>
					</div>
				</form>
			</CardContent>
			<CardFooter className="flex justify-between">
				<Button variant="outline">Cancel</Button>
				<Button onClick={async () => await handleSignIn({
					username: userForm!.username,
					password: userForm!.password
				})}>Sign In</Button>
			</CardFooter>
		</Card> 
	);
}