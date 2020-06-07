import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import useStyles from './SortFilterButtonStyle';

const Buttons = (props) => {
  const classes = useStyles();

  const [selectValue, setSelectValue] = useState(false);
  const [dollars, setDollars] = useState(null);
  
  /*for dollar sign */
  useEffect(() => {
    if(props.data){
      let dollars = [...props.data];
      let dollarsArray = dollars.map(res => {
        return res.price
      })
      let SetDollars = [...new Set(dollarsArray)];
      setSelectValue(true);
      setDollars(SetDollars);
    }
  },[props.data]);

  let value = null;
  if(selectValue){
    value = dollars.map((res, i) => (
      <MenuItem value={res} key={res+i}>{res}</MenuItem>
    ))
  }

  return (
    <React.Fragment>
      <Button
        variant="contained"
        color="primary"
        className={classes.Button}
        onClick={props.clicked}
      >{(props.sort)? "Unsorted" : "Sorted"}</Button>

      <FormControl className={classes.formControl}>
        <InputLabel id="select-label">Price</InputLabel>
        <Select
          labelId="select-label"
          id="select"
          value={props.filter || ''}
          onChange={props.changed}
        >
          {value}
        </Select>
      </FormControl>
    </React.Fragment>
  )}

export default Buttons;