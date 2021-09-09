import '../App.css';
import {Col, Container, Form, Row } from 'react-bootstrap';

function UserForm(props) {

    const onHandleChange = (ev, el) => {
        el.value = ev.target.value;
    }

    return (
        <Container fluid>
            <Col>
                <Row className="justify-content-md-center main-content">
                        <Form className="text-left w-100">
                            {<h4 className=" mb-4">{props.userGroup?.displayName}</h4>}
                            {
                                props.userGroup ? props.userGroup.fields.map(el => {
                                    return (
                                        <Form.Group className="mb-3" controlId="formBasicPassword" key={el.id}>
                                            <Form.Label>{el.name}</Form.Label>
                                            <Form.Control type="text" name={el.keyToPost} defaultValue={el.value} onChange={(ev) => onHandleChange(ev, el)} autoComplete="off" />
                                        </Form.Group>
                                    )
                                }) : ""
                            }
                        </Form>
                        {props.showError ? <p className="error">Please fill all the details to proceed further</p> : ""}

                </Row>
            </Col>
             </Container>
    );
}

export default UserForm;
