import React, { useState } from 'react';

import { StyleSheet , View} from 'react-native';

import {Text , Input, Button } from 'react-native-elements';

import Spacer from './Spacer';


const AuthForm = ({headerText, errorMessage, onSubmit, submitTitle}) => {

  const [ email, setEmail ] = useState('');
  const [ password , setPassword ] = useState('');

      return (
        <>
         <Spacer>
        <Text h3>{headerText}</Text>
      </Spacer>
        <Input label="Email"
        autoCapitalize="none"
        autoCorrect={false}
        value={email}
        onChangeText={ text => setEmail(text) }  />
        <Spacer />
        <Input label="Password"
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry
        />
        { errorMessage ? <Text style={styles.errorMessage} >{errorMessage}</Text> : null }
        <Spacer>
          <Button title={submitTitle} onPress={() => onSubmit({email, password}) }/>
        </Spacer>

        </>
        );
};

const styles = StyleSheet.create({
   errorMessage:{
      fontSize:16,
      color: 'red',
      marginLeft: 15,
      marginTop: 15
    }
});

export default AuthForm;
