
import React from 'react';

import {View
  ,StyleSheet,
  Text, Button
} from 'react-native';

const TackListScreen = ({navigation}) => {

    return (< >

        <Text>track list </Text>
        <Button title="got to Track detail" onPress={()=> navigation.navigate('TrackDetail')} />
      </>);


};

const styles = StyleSheet.create({

});

export default TackListScreen;
