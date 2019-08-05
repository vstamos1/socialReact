import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import propTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import AppIcon from '../images/icon.png'
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

const styles = {
    form: {
        textAlign: 'center'
    },

    image :{
        margin: '20px auto'
    }
}



class Login extends Component {
    handleSubmit = (event) => {
        console.log('hi')
    }
    
    render() {
        const {classes} = this.props;
        return (
            <Grid container className={classes.form}>
                <Grid item sm>A</Grid>
                <Grid item sm><img src={AppIcon} alt="Monkey" className={classes.image}/>
                    <Typography variant='h3' color="primaryText" className={classes.pageTitle}>Login</Typography>
                    <form noValidate onSubmit={this.handleSubmit}>
                        <TextField id='email' name='email' type='email' label='email' className={classes.textField}/>
                        <TextField id='password'name='password' type='password' label='password' className={classes.textField}/>
                    </form>
                </Grid>
                <Grid item sm>C</Grid>
            </Grid>
        )
    }
}
Login.propTypes = {
    classes: propTypes.object.isRequired
}

export default withStyles(styles)(Login);
