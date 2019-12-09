
import React, { useContext } from 'react';

import {View
  ,StyleSheet,
  Text
} from 'react-native';

import { Context as TrackContext } from '../context/TrackContext';

import MapView , {Polyline} from 'react-native-maps';

const TrackDetailScreen = ({navigation}) => {
  const {state} = useContext(TrackContext);
    const _id = navigation.getParam('_id');

    const track = state.find( t => t._id === _id );

    const initialCoords = track.locations[0].coords;
    return (
      <View >
        <Text>{track.name} </Text>
        <MapView style={styles.map}
        initialRegions={{
          longitudeDelta: 0.50,
          latitudeDelta: 0.50,
          ...initialCoords
        }}
         >
          <Polyline coordinates={track.locations.map( loc => loc.coords )} />
        </MapView>
      </View>
    );

}

const styles = StyleSheet.create({
  map: {

  }
});

export default TrackDetailScreen;
