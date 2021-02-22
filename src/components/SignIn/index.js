import React from "react";
import { Container, FormButton, FormContent, FormInput, FormLabel, Text, Icon, FormWrap, FormH1, Form } from "./SigninElements";
const SignIn = () => {
  return (
    <>
      <Container>
          <FormWrap>
              <Icon to='/'>dolla</Icon>
              <FormContent>
                  <Form action='#'>
                      <FormH1>Sign in to your acount</FormH1>
                      <FormLabel htmlFor='for'>Email</FormLabel>
                      <FormInput type='email' required />
                      <FormLabel htmlFor='for'>Password</FormLabel>
                      <FormInput type='password' required />
                      <FormButton type='submit'>Log In</FormButton>
                      <Text>Forgot password</Text>
                  </Form>
              </FormContent>
          </FormWrap>
      </Container>
    </>
  );
};

export default SignIn;
