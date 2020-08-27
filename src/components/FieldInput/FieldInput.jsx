import React, { memo } from 'react';
import { Field } from 'redux-form';
import withStyles from '@material-ui/core/styles/withStyles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';

const renderField = ({
  input: { onBlur, onFocus, ...inputProps },
  meta: { touched, error },
  ...fieldProps
}) => {
  return (
    <TextField
      {...inputProps}
      {...fieldProps}
      fullWidth
      helperText={error}
      error={!!touched && !!error}
    />
  );
};

export const FieldInput = ({
  classes,
  ...props
}) => {
  return (
    <FormControlLabel
      className={classes.control}
      control={(
        <Field
          { ...props }
          className={classes.input}
          component={renderField}
        />
      )}
    />
  );
};

export default memo(withStyles({
  input: {
    margin: '10px',
  },
  control: {
    marginLeft: 0,
    marginRight: 0,
  },
})(FieldInput));
