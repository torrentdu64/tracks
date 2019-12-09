
import React, { useContext } from 'react';

import {View
  ,StyleSheet,
  Text
} from 'react-native';

import {NavigationEvents} from 'react-navigation';

import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

import { Context } from '../context/AuthContext';

const SigninScreen = (props) => {
    const{ state, signin, clearErrorMessage } = useContext(Context);
    return (
      <View >
      <NavigationEvents

      onWillBlur={ () => {clearErrorMessage()}}

      />
        <AuthForm
            headerText="Sign in to your account"
            errorMessage={state.errorMessage}
            onSubmit={signin}
            submitTitle="Sign in"
        />
        <NavLink routeName="Signup" text="Sign up link" />
      </View>
    );

}

SigninScreen.navigationOptions = ( ) => {
  return {
    hearder: null
  }
}

const styles = StyleSheet.create({
   container:{
      flex: 1,
      justifyContent: 'center',
      marginBottom: 250
    }

});

export default SigninScreen;
