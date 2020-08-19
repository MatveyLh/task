import React, {useState} from 'react';
import {Modal} from "react-bootstrap";
import { Button } from 'react-bootstrap';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import './ThirdComponent.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

const ThirdComponent = () => {
    const classes = useStyles();
    const [success, setSuccess] = useState(false);
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(String(email).toLowerCase()) || !message.length) setError(true);
        else {
            setSuccess(true);

        }
    };

    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
    };

    const handleChangeMessage = (event) => {
        setMessage(event.target.value)
    };

    return (
        <React.Fragment>
            <form className={classes.root} onSubmit={handleSubmit} id={'form'} noValidate autoComplete="off">
                <TextField id="standard-basic" label="Email" required={true} onChange={handleChangeEmail} />
                <TextField
                    id="filled-multiline-static"
                    label="Ваше сообщение"
                    multiline
                    rows={4}
                    required={true}
                    onChange={handleChangeMessage}
                    variant="filled"
                />
                <Button variant="success" type={'submit'} color="primary">
                    Отправить
                </Button>
            </form>
            <Modal show={success} onHide={()=>{
                setSuccess(false)}}>
                <Modal.Body>Письмо отправлено успешно!</Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={()=>{
                        setSuccess(false)}}>
                        Ок
                    </Button>
                </Modal.Footer>
            </Modal>
            <Modal show={error} onHide={()=>{
                setError(false)}}>
                <Modal.Header>Ошибка</Modal.Header>
                <Modal.Body>Неверно заполнены поля!</Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={()=>{
                        setError(false)}}>
                        Ок
                    </Button>
                </Modal.Footer>
            </Modal>
        </React.Fragment>
    )
};

export default ThirdComponent;