import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core';
import { useHistory, useLocation } from 'react-router-dom';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import Icon from './icon';
import { signin, signup } from '../../actions/auth';
import { AUTH } from '../../constants/actionTypes';
import useStyles from './styles';
import Input from './input';

const initialState = { name:'', email: '', password: '', confirmPassword: '',year:'', userType:'' };


const CoursePopup = () => {
    const [form, setForm] = useState(initialState);
    const [isSignup, setIsSignup] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();
    const classes = useStyles();
    let location = useLocation();

    const userType=location.pathname.split("/auth/")[1];
    useEffect(() => {
        setForm({...form,userType:userType});
    }, [userType]);

    const [showPassword, setShowPassword] = useState(false);
    const handleShowPassword = () => setShowPassword(!showPassword);

    const switchMode = () => {

        setIsSignup((prevIsSignup) => !prevIsSignup);
        // console.log(isSignup);
        setShowPassword(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(isSignup)
        if (isSignup) {
            console.log('signup')
            dispatch(signup(form, history));
        } else {
            console.log('signin')
            dispatch(signin(form, history));
        }
    };

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    console.log(form)

    return (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                
                <Typography component="h1" variant="h5">Add Course</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Input name="Name" label="Name" handleChange={handleChange} autoFocus  />
                        <Input name="Sub_Code" label="Sub_Code" handleChange={handleChange} autoFocus  />
                        <Input name="Teacher_Name" label="Teacher_Name" handleChange={handleChange}  />
                        
                    </Grid>
                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                        Add Course
                    </Button>
                    
                </form>
            </Paper>
        </Container>
    );
};

export default CoursePopup;