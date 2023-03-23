import React, { useRef, useState } from 'react'
import { Card, Form, Button, Container, Alert } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

const SignUp = () => {

    // following "ref" variables are persisted in the component ( no re-render)
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();

    // persisted in the component. re-renders when there is a change.
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    // global state 
    const {signUp} = useAuth();
    const navigate = useNavigate();
    
    async function handleSubmit(e){
        e.preventDefault();

        setError("");
        setLoading(true);

        const email = emailRef.current.value;
        const pword = passwordRef.current.value;
        
        let authPromise = signUp(email, pword);

        authPromise.then((result) => {
            console.log(JSON.stringify(result))
            navigate("/login")
        }).catch((error) =>{
            handleError(error)
        }).finanlly(
            setLoading(false)
        );

    }

    function handleError(error ){
        if( error && error.customData && error.customData._tokenResponse && error.customData._tokenResponse.error  ){
            if( error.customData._tokenResponse.error.message && error.customData._tokenResponse.error.message=='EMAIL_EXISTS' ){
                setError( emailRef.current.value + " is already registered");
            }
        }
    }

  return (
    <Container className="d-flex flex-wrap justify-content-center"
        >
        <Card className="px-3" style={{minWidth: "400px"}}>
            <Card.Body className='w-100'>
            <h2 className="text-center mb-4">Register</h2>
            {error && <Alert variant="danger" className='w-100'>{error}</Alert> }
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
    </Container>
  )
}

export default SignUp