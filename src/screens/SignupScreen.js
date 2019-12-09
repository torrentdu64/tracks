import React, { useContext } from 'react';
import {View,StyleSheet, TouchableOpacity } from 'react-native';
import {NavigationEvents} from 'react-navigation';

import { Text, Input, Button} from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Context as authContext} from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';


const SignupScreen = ({navigation}) => {
    const { state, signup, clearErrorMessage } = useContext(authContext);



    return (
      <View style={styles.container}>
      <NavigationEvents onWillBlur={ () => { clearErrorMessage()}} />
      <AuthForm
      headerText="Sign Up for Traker"
      errorMessage={state.errorMessage}
      onSubmit={signup}
      submitTitle="Sign UP"
      />
        <NavLink
          routeName="Signin"
          text= "Sign in link"
        />

      </View>
    );

}

SignupScreen.navigationOptions = ( ) => {
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

export default SignupScreen;
