import React from 'react';
import styled from 'styled-components';

export default function Error404() {
  return (
    <ErrorContainer className='flex'>
      <ErrorContent>
        <ErrorTitle>:/ Page Not Found</ErrorTitle>
        <ErrorMessage>The page you are looking for does not exist.</ErrorMessage>
        <ErrorMessage>Please go back to the <StyledLink href="/">home page</StyledLink>.</ErrorMessage>
      </ErrorContent>
    </ErrorContainer>
  );
};

const ErrorContainer = styled.div`
    justify-content: center;
    height: 100vh;
    position: absolute;
    top: 0;
    max-width: 100%;
    left: 0;
    transform: translate(50%, -50%);
    top: 50%;
    right: 50%;
`;

const ErrorContent = styled.div`
    text-align: center;
`;

const ErrorTitle = styled.h1`
    color: #dc3545;
    font-size: 4rem;
`;

const ErrorMessage = styled.p`
    color: #6c757d;
    font-size: 1.5rem;
`;

const StyledLink = styled.a`
  color: #007bff;
    &:hover {
        text-decoration: underline;
    }
`;