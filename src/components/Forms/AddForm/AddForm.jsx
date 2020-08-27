import React, { memo } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { useDispatch } from 'react-redux';
import addCard from 'Actions/addCard';

import FieldInput from 'Components/FieldInput';
import validation from 'Utils/validation';
import styles from './styles';

export const AddForm = ({
  classes,
  handleSubmit,
  reset
}) => {
  const dispatch = useDispatch();

  const submitForm = (values) => {
    validation(values);

    dispatch(addCard({
      ...values,
      id: Date.now(),
      isFavourite: false,
    }));
    dispatch(reset('createCard'));
  };
  
  return (
    <form
      noValidate
      onSubmit={handleSubmit(submitForm)}
    >
      <h1 className={classes.title}>Add Contact:</h1>

      <FieldInput name="name" id="name" label="name" type="text" variant="outlined" />
      <FieldInput normalize={(val) => val.replace(/\D+/g,"").slice(0, 9)} name="phone" id="phone" label="phone" type="tel" variant="outlined" />
      <FieldInput name="email" id="email" label="email" type="email" variant="outlined" />

      <Button
        type="submit"
        variant="contained"
        color="primary"
        size="large"
        startIcon={<AddIcon />}
      >
        Add
      </Button>
    </form>
  );
};

export default memo(withStyles(styles)(AddForm));
