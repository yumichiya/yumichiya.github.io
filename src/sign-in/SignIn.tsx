import "./SignIn.css";
import logo from "../assets/fetch.svg";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { getUser } from "../services/auth.service.ts";
import { FloatingLabel } from "react-bootstrap";

function SignIn({onUserSignIn} : {onUserSignIn: any})  {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [validated, setValidated] = useState(false);

  const handleSubmit = async (event: any) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    event.preventDefault();
    event.stopPropagation();
    setValidated(true);
    onUserSignIn(await getUser({name, email}));
  };

  return (
    <div className="main-signin-container">
      <div className="signin-container">
        <img className="logo" src={logo}></img>
        <Form className="signin-field-container" noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group className="form-group">
            <FloatingLabel label="Name">
              <Form.Control required type="text" placeholder="Enter name" value={name} onChange={e => setName(e.target.value)}></Form.Control>
              <Form.Control.Feedback type="invalid">Please provide a name.</Form.Control.Feedback>
            </FloatingLabel>
          </Form.Group>
          <Form.Group className="form-group">
            <FloatingLabel label="Email">
              <Form.Control required type="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)}></Form.Control>
            </FloatingLabel>
          </Form.Group>
          <Button className="purple-button" type="submit">Sign In</Button>
        </Form>
      </div>
    </div>
  )
}

export default SignIn
