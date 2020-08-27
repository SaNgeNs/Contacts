import { SubmissionError } from 'redux-form'

export const validation = values => {
  const {
    name,
    phone,
    email,
  } = values;

  const emailRe = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const phoneRe = /^\d{9}$/;

  if (!name) {
    throw new SubmissionError({
      name: 'name required',
    })
  }

  if (!phone) {
    throw new SubmissionError({
      phone: 'phone required',
    })
  } else if (!phone.match(phoneRe)) {
    throw new SubmissionError({
      phone: 'invalid phone',
    })
  }

  if (!email) {
    throw new SubmissionError({
      email: 'email required',
    })
  } else if (!emailRe.test(email) || /\@.*\@/.test(email) || /\@.*_/.test(email)) {
    throw new SubmissionError({
      email: 'invalid email',
    })
  }

  return true;
};

export default validation;
