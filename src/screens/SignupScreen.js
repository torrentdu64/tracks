
import React from 'react';

import {View
  ,StyleSheet,
  Text, Button
} from 'react-native';

const SignupScreen = ({navigation}) => {

    return (
      <>
        <Text>Sign up </Text>
        <Button title="go to sign in " onPress={ () => navigation.navigate('Signin')} />
         <Button title="go to Main flow " onPress={ () => navigation.navigate('mainFlow')} />
      </>
    );

}

const styles = StyleSheet.create({

});

export default SignupScreen;
