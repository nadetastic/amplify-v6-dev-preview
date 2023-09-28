import { useState } from 'react'
import type { ConfirmSignUpInput, SignInInput, SignUpInput } from 'aws-amplify/auth'

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

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


import { handleConfirmSignUp, handleSignIn, handleSignUp, handleCurrentUserCheck, handleSignOut, handleFetchUserAttributes, handleFetchSession } from './apihelpers'


function App() {


  return (
    <>
	
		<div className='container mx-auto'>
			<h1 className='text-4xl text-center my-8'>Amplify V6 Preview</h1>
			<div className='flex justify-center py-4'>
				<Tabs defaultValue="signup" className="w-[400px]">
					<TabsList className='flex justify-center'>
						<TabsTrigger value="signup">Sign Up</TabsTrigger>
						<TabsTrigger value="confirmsignup">Confirm Sign Up</TabsTrigger>
						<TabsTrigger value='signin'>Sign In</TabsTrigger>
					</TabsList>
					<TabsContent value="signup"><SignUp /></TabsContent>
					<TabsContent value="confirmsignup"><ConfirmSignUp /></TabsContent>
					<TabsContent value='signin'><SignIn /></TabsContent>
				</Tabs>
			</div>
			<div className='flex justify-center gap-4 py-4'>
				<Button onClick={handleCurrentUserCheck}>Current User</Button>
				<Button onClick={handleFetchUserAttributes}>Attributes</Button>
				<Button onClick={handleFetchSession}>Session</Button>
			</div>
			<div className='flex justify-center'>
				<Button variant='ghost' onClick={handleSignOut}>Sign Out</Button>
			</div>
		</div>
    </>
  )
}

export default App


const SignUp = () => {

	const [ userForm,setUserForm] = useState<SignUpInput>()
	return (
		<Card className="">
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
		<Card>
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
		<Card>
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