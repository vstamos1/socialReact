import React, { Component } from 'react'
import withStyles from '@material-ui/core/styles/withStyles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime'


import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom'


const styles ={
    card: {
        display: 'flex',
        marginBottom:10
    },

    image: {
        minWidth: 200
    },

    content: {
        padding:25,
        objectFit:'cover'
    }
}
class Scream extends Component {
    render() {
        dayjs.extend(relativeTime);
        const {classes, scream : {body, createdAt,userHandle, userImage ,screamId, likeCount, commentCount}} = this.props
        console.log(this.props)
        return (
           <Card className={classes.card}>
               <CardMedia image={userImage} title="profile image" className={classes.image}/>
               <CardContent className={classes.content}>
                   <Typography variant="h5" component={Link} to={`/user/${userHandle}`} color='primary'>{userHandle}</Typography>
                   <Typography variant="body2" color="textSecondary">{dayjs(createdAt).fromNow()}</Typography>
                   <Typography variant="body1" >{body}</Typography>
               </CardContent>
           </Card>
        )
    }
}

export default withStyles(styles)(Scream);
