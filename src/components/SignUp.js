import React, { useRef, useState } from 'react'
import { Card, Form, Button } from 'react-bootstrap'

const SignUp = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e){

    }

  return (
    <div className="w-100" style={{maxWidth: "400px"}}>
        <Card>
            <Card.Body>
            <h2 className="text-center mb-4">Sign Up</h2>
            </Card.Body>
            <Form>
                <Form.Group id="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type='email' required ref={emailRef}></Form.Control>
                </Form.Group>
                <Form.Group id='password'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' required ref={passwordRef}></Form.Control>
                </Form.Group>
                <Form.Group id='password-confirm'>
                    <Form.Label>Password Confirmation</Form.Label>
                    <Form.Control type='password' required ref={passwordConfirmRef}></Form.Control>
                </Form.Group>
                <Button type='submit' disabled={loading} className='w-100 mt-2' 
                    onClick={handleSubmit}> Sign Up
                </Button>
                <Form.Group>
                    <Form.Label id="form-error" className='w-100'></Form.Label>
                </Form.Group>
            </Form>
        </Card>
        <div className='w-100 text-center mt-10'>
            Already have an account? Login
        </div>
    </div>
  )
}

export default SignUp