import { GENDER, LOGIN } from "./ActionTypes";
import React from 'react';
import {IUser} from '../types/types';
import { useQuery, gql } from '@apollo/client';



export const gender = (gender: string) => (dispatch: any) => {
  let newUser: IUser = {
      id: 0,
      firstName: "",
      lastName: "",
      email: "",
      username: "",
      password: "",
      gender: gender,
      cart: {
          numberOfItems: 0,
          totalPrice: 0,
      },
      favorites: []

  }
  return(
      dispatch({
          type: GENDER,
          payload: newUser,
      })
  )
}