import 'react-native-gesture-handler';
import React from 'react';
import { useEffect } from 'react';
import { LoginStack } from './Components/Login/LoginStack';
import { client } from './client';
import { ApolloProvider } from '@apollo/client';
import { initStripe } from '@stripe/stripe-react-native';

export default function App() {

  useEffect(() => {
    initStripe({
      publishableKey: 'pk_test_51KF4eWB7ZPlD6HK6tssZiQyXtMfnC5ILEkqY8QhufVEo9DRmLYhFzoJhuh6wnLpc9CgXhbooTixRofremBeOw1dS00hkJEVvXb',
      merchantIdentifier: 'irish',
    });
  }, []);

  return (
    <ApolloProvider client={client}>
      <LoginStack />
    </ApolloProvider>
  )
};

