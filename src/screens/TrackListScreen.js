
import React, { useContext } from 'react';

import {View
  ,StyleSheet,
  Text, Button, FlatList, TouchableOpacity
} from 'react-native';
import { ListItem } from 'react-native-elements';
import { NavigationEvents } from 'react-navigation';

import { Context as TrackContext } from '../context/TrackContext';

const TackListScreen = ({navigation}) => {

  const { state ,fetchTracks } = useContext(TrackContext);

    return (< >
        <NavigationEvents onWillFocus={() => fetchTracks()  } />
        <Text>track list </Text>
        <FlatList
        data={state}
        keyExtractor={item => item._id}
        renderItem={ ({item}) => {
          return <TouchableOpacity onPress={ () => navigation.navigate('TrackDetail', { _id: item._id}) } >
              <ListItem chevron={true} title={item.name} />
          </TouchableOpacity>
        } }
        />
      </>);


};

const styles = StyleSheet.create({

});

export default TackListScreen;
