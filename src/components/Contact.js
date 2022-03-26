import React, { useState } from 'react'
import styled from 'styled-components/macro'

const StyledContactWrapper = styled.section`
  width: 100%;
  box-sizing: border-box;
`
const StyledContact = styled.div`
  width: 80%;
  max-width: 800px;
  margin: 0 auto;

  .external-link {
    font-size: 18px;
    color: ${(props) => props.theme.lightText};
    text-decoration: none;
    &:hover {
      color: ${(props) => props.theme.body};
      background-color: ${(props) => props.theme.text};
    }
  }
`

const H1 = styled.h1`
  font-size: clamp(35px, 5vw, 60px);
  text-align: center;
  margin: 7rem 0 5rem 0;
  font-family: 'Inter', sans-serif;
  color: ${(props) => props.theme.text};

  @media (max-width: 500px) {
    margin: 5rem 0;
  }
`
const P = styled.p`
  padding: 0.4rem 0;
  font-size: 20px;
  font-weight: 500;
  color: ${(props) => props.theme.lightText};
  line-height: 1.5;
  letter-spacing: 0.8px;
  margin-top: 5px;
  @media (max-width: 500px) {
    font-size: 18px;
  }
`
const Form = styled.form`
  div {
    display: flex;
    flex-direction: column;
    margin: 1.3rem 0;
    letter-spacing: 1px;
  }
  div:nth-last-of-type(1) {
    padding-top: 2rem;
  }

  label {
    font-size: 22px;
    padding: 5px 0;
    font-weight: 600;
    color: ${(props) => props.theme.text};
    transition: color 0.5s linear;
  }
  input {
    font-size: 20px;
  }
  textarea {
    font-size: 18px;
  }
  input,
  textarea {
    letter-spacing: 1px;
    border-radius: 5px;
    padding: 0.8rem 1rem;
    border: 2px solid gray;
    outline: transparent;
    transition: border 0.5s linear;
  }
`

const Button = styled.button`
  display: block;
  color: ${(props) => props.theme.body};
  padding: 1.25rem;
  width: 100px;
  margin-top: 2rem;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  font-family: 'Roboto Mono', monospace;
  border: none;
  border-radius: 4px;
  transition: ${(props) => props.theme.themeTransition.transition};
  background-color: ${(props) => props.theme.buttonColor};
  &:hover {
    filter: brightness(1.2);
  }
`

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const { name, email, message } = formData
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }
  const handleOnSubmit = async (e) => {
    e.preventDefault()
    const details = {
      name: name,
      email: email,
      message: message,
    }
    try {
      let response = await fetch('/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(details),
      })
        let data = await response.json()
        console.log(data);
    } catch {
        console.log('error')
    }
  }
  return (
    <>
      <StyledContactWrapper>
        <StyledContact>
          <H1>Ping Me!</H1>
          <P>
            Want to say "Hey!"? Got something you'd like to ask? New project or
            opportunity? Want to hire me? Ping me!
          </P>
          <P>
            Use the form below. Or, for a quicker response, ping me over on{' '}
            <a
              href='https://www.linkedin.com/in/aryaman-singh2803/'
              aria-label='linkedin'
              target='_blank'
              rel='noreferrer'
              className='external-link'
            >
              Linkedin
            </a>
            .
          </P>
          <P>
            Alternatively, shoot me an email at{' '}
            <a
              href='mailto:aryamansingh2803@gmail.com'
              aria-label='email'
              target='_blank'
              rel='noreferrer'
              className='external-link'
            >
              aryamansingh2803@gmail.com
            </a>
            .
          </P>

          <Form>
            <div>
              <label htmlFor='name'>Name*</label>
              <input
                type='text'
                id='name'
                name='name'
                onChange={onChange}
                required
              />
            </div>
            <div>
              <label htmlFor='email'>Email*</label>
              <input
                type='email'
                id='email'
                name='email'
                onChange={onChange}
                required
              />
            </div>
            <div>
              <label htmlFor='message'>Message*</label>
              <textarea
                id='message'
                rows={5}
                name='message'
                onChange={onChange}
                required
              />
            </div>
            <Button type='submit' onClick={handleOnSubmit}>
              Send
            </Button>
          </Form>
        </StyledContact>
      </StyledContactWrapper>
    </>
  )
}

Contact.propTypes = {}

export default Contact
