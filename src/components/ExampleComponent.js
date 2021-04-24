import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(6, 0, 3),
  },
  lightBulb: {
    verticalAlign: 'middle',
    marginRight: theme.spacing(1),
  },
}));

export default function ExampleComponent() {
  
  // ! FIXME: use the classes below
  // eslint-disable-next-line no-unused-vars
  const classes = useStyles();
  return (
    <p>Example Component</p>
  );
}