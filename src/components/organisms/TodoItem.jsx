import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column-reverse',
      flexWrap: 'wrap',
      listStyle: 'none',
      padding: theme.spacing(0.5),
      margin: 0,
    },
    chip: {
      margin: theme.spacing(0.5),
    },
}));

export default function TodoItem(props) {

    const classes = useStyles();

    return (
        <Paper component='ul' className={classes.root}>
            {props.todos.map((data, index) => {
                return (
                    <li key={index}>
                      <Chip
                        label={data.task}
                        onDelete={props.handleDelete(data)}
                        className={classes.chip}
                      />
                    </li>
                );
            })}
        </Paper>
    );
}