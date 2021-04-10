import React, {useState } from 'react'
import Navibar from '../components/Navibar'
import Footer from '../components/Footer'
import { Container, Form, Button} from 'react-bootstrap'
import emailjs from 'emailjs-com'

const ContactScreen = () => {

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
        message: ''
    })

    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value})

    const {
        fullName,
        email,
        phoneNumber,
        message
    } = formData

    const handleSubmit = (e) => {
        e.preventDefault();

        let templateParams = {
            fullName: fullName,
            myName: 'Ryan Haire',
            email: email,
            phoneNumber: phoneNumber,
            message: message,
            reply_to: 'nothing'
        }


        emailjs.send("service_yxg45hm", "template_509md3w", templateParams, "user_c94zvWVL8qn9ku6nyUiBu")
        .then(
            result => {
                alert('Message sent, I\'ll get back to you shortly', result.text)
            },
            error => {
                alert('An error occured, Please try again', error.text)
                console.log(error.text)
            }
        )

        setFormData({
            fullName: '',
            email: '',
            phoneNumber: '',
            message: ''
        })
    }

    return (
        <>
         <Navibar/>   
         <main>
             <div className="center-hv">
                <h1 className="h1-title mt-5">Contact Ryan Haire</h1>
                <Container id="form-container" className="mt-2 w-75">
                    <Form id="ContactForm" onSubmit={(e) => handleSubmit(e)}>
                        <Form.Group>
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control name="fullName" type="text" placeholder="Full Name" value={fullName} onChange={(e) => onChange(e)}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control name="email" type="email" placeholder="Email: name@example.com" value={email} onChange={(e) => onChange(e)}/>
                            <Form.Text className="text-muted">
                                I'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control name="phoneNumber" type="text" placeholder="Phone Number" value={phoneNumber} onChange={(e) => onChange(e)}/>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Message</Form.Label>
                            <Form.Control name="message" as="textarea" rows={3} value={message} onChange={(e) => onChange(e)}/>
                        </Form.Group>
                        <Form.Group>
                            <Button style={{ width: '100%'}} className="mt-1 btn-primary-rh" type="submit">Send</Button>
                        </Form.Group>
                    </Form>
                </Container>
             </div>
         </main>
         <Footer/>
        </>
    )
}

export default ContactScreen
