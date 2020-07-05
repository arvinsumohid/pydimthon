import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';



const Popup = ( type ) => {

    const [signIn, setSignIn] = useState(false);
    const [signUp, setSignUp] = useState(false);

    //modal show
    const handleShow = (type) => {
        if( type === 'signIn' ) {
            setSignIn(true)
        } else if( type === 'signUp' ) {
            setSignUp(true)
        }
    }
    
    //modal hide
    const handleHide = (type) => {
        if( type === 'signIn' ) {
            setSignIn(false)
        } else if( type === 'signUp' ) {
            setSignUp(false)
        }
    }

    const title = () => {
        if( type === 'signIn' )
            return 'Sign In'
        else if( type === 'signUp' )
            return 'Sign Up'
    }

    const show = () => {
        if( type === 'signIn' )
            return signIn
        else if( type === 'signUp' )
            return signUp
    }


    return (
        <>
            <Button variant="primary" className="mx-1" onClick={handleShow(type)}>{title}</Button>

            <Modal show={show}  onHide={handleHide}>
                <Modal.Dialog>
                    <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                    <p>Modal body text goes here.</p>
                    </Modal.Body>

                    <Modal.Footer>
                    <Button variant="secondary">Close</Button>
                    <Button variant="primary">Save changes</Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </Modal>
        </>
    )
}

export default Popup;