import React from 'react';
import { useForm } from 'react-hook-form';
import Button from '@material-ui/core/Button';
import { object, string } from 'yup';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import useStyles from './SearchStyle';


const userSchema = object().shape({
  wanted: string().required('this field is required!'),
  location: string().required('this field is required'),
});

const Search = (props) => {

  const classes = useStyles();

  const { register, handleSubmit, errors } = useForm({
    mode: 'onBlur',
    validationSchema: userSchema,
  });

  const onSubmit = (data) => {
    props.clicked(data.wanted, data.location);
  };

  return (
    <Container component="main" maxWidth="xs">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={classes.form}
        noValidate
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              type="text"
              variant="outlined"
              required
              id="wanted"
              label="What you want"
              fullWidth
              name="wanted"
              autoComplete="wanted"
              error={!!errors.wanted}
              helperText={errors.wanted?.message}
              inputRef={register}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              name="location"
              label="location"
              fullWidth
              type="text"
              id="location"
              autoComplete="current-location"
              error={!!errors.location}
              helperText={errors.location?.message}
              inputRef={register}
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Search
        </Button>
      </form>
    </Container>
  )

}

export default Search;