import React, { useState ,useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core';
import { useHistory ,useLocation} from 'react-router-dom';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import Icon from './icon';
import { signin, signup } from '../../actions/auth';
import { AUTH } from '../../constants/actionTypes';
import useStyles from './styles';
import Input from './input';

const initialState = { name:'', email: '', password: '', confirmPassword: '',userType:'' };


const AuthTeacher = () => {
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

    // setForm({...form,userType:userType});

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
            dispatch(signup(form, history));
        } else {
            dispatch(signin(form, history));
        }
    };

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    console.log(form)

    return (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">{isSignup ? 'Sign up' : 'Sign in'}</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {isSignup && (
                            <>
                                <Input name="name" label="Name" handleChange={handleChange} autoFocus  />
                            </>
                        )}
                        <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
                        <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
                        {isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" />}
                    </Grid>
                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                        {isSignup ? 'Sign Up' : 'Sign In'}
                    </Button>
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Button onClick={switchMode}>
                                {isSignup ? 'Already have an account? Sign in' : "Don't have an account? Sign Up"}
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    );
};

export default AuthTeacher;
