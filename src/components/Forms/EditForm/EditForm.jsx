import React, { memo } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import { useDispatch } from 'react-redux';

import updateCard from 'Actions/updateCard';
import FieldInput from 'Components/FieldInput';
import validation from 'Utils/validation';

import styles from './styles';

export const EditForm = ({
  classes,
  handleSubmit,
  cardInfo = {},
  onClickAfterSubmit = () => {},
  initialValues = {
    name: '',
    phone: '',
    email: '',
  },
}) => {
  const dispatch = useDispatch();

  const submitForm = (values) => {
    validation(values);

    dispatch(updateCard({
      ...cardInfo,
      ...values,
    }));

    onClickAfterSubmit();
  };

  return (
    <form
      className={classes.form}
      noValidate
      onSubmit={handleSubmit(submitForm)}
    >
      <FieldInput name="name" id="editName" label="name" type="text" variant="outlined" />
      <FieldInput normalize={(val) => val.replace(/\D+/g,"").slice(0, 9)} name="phone" id="editPhone" label="phone" type="tel" variant="outlined" />
      <FieldInput name="email" id="editEmail" label="email" type="email" variant="outlined" />

      <Button
        type="submit"
        variant="contained"
        color="primary"
        size="large"
        startIcon={<SaveIcon />}
      >
        Save
      </Button>
    </form>
  );
};

export default memo(withStyles(styles)(EditForm));
