import { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

export const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setError] = useState('');

  const { name, email, message } = formState;

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setError('Please enter a valid email');
      } else {
        setError('');
      }
    } else {
      if (!e.target.value.length) {
        setError(`A name and message is required.`);
      } else {
        setError('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  };

  return (
    <div>
      <p className="content">Contact Me</p>
      <hr />
      <form id="contact-form">
        <div className="field">
          <label className="label" htmlFor="name">Name</label>
          <input className="input" type="text" name="name" defaultValue={name} onBlur={handleChange} />
        </div>
        <div className="field">
          <label className="label" htmlFor="email">Email Address</label>
          <input className="input" type="email" name="email" defaultValue={email} onBlur={handleChange} />
        </div>
        <div className="field">
          <label className="label" htmlFor="message">Message</label>
          <textarea className="textarea" name="message" rows="5" defaultValue={message} onBlur={handleChange} />
        </div>
        {errorMessage && (
          <div>
            <p className="message">{errorMessage}</p>
          </div>
        )}
        <button className="button" data-testid="button" type="submit">Submit</button>
      </form>
    </div>
  );
}
