import React, { useRef, useState } from 'react'
import { Card, Form, Button, Container, Alert } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

const Login = () => {

        // following "ref" variables are persisted in the component ( no re-render)
        const emailRef = useRef();
        const passwordRef = useRef();
    
        // persisted in the component. re-renders when there is a change.
        const [loading, setLoading] = useState(false);
        const [error, setError] = useState("");
    
        // global state 
        const {login} = useAuth();
        const navigate = useNavigate();

        async function handleSubmit(e){
            e.preventDefault();

            const email = emailRef.current.value;
            const password = passwordRef.current.value;

            //alert("clicked "+ email + ":"+ password);
            const loginPromise  = login( email, password);
            
            loginPromise.then((result) => {
                //alert(JSON.stringify(result));
                navigate("/");
            })
            .catch((error)=>{
                alert(JSON.stringify(error));
            })
            .finally(()=>{

            });
        }

  return (
    <Container className="d-flex flex-wrap justify-content-center">
        <Card className="px-3" style={{minWidth: "400px"}}>
            <Card.Body>
            <h2 className="text-center mb-4">Login</h2>
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
                <Button type='submit' disabled={loading} className='w-100 mt-2' 
                    onClick={handleSubmit}> Login
                </Button>
                <Form.Group>
                    <Form.Label id="form-error" className='w-100'></Form.Label>
                </Form.Group>
            </Form>
        </Card>
        <div className='w-100 text-center mt-10'> Forgot password? <Link to='/forgot'>reset</Link></div>
        <div className='w-100 text-center mt-10'> 
         Register <Link to='/signup'>here</Link>
        </div>
    </Container>
  )
}

export default Login