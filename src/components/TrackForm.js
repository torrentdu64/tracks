import React,{ useContext } from 'react';
import { Input, Button } from 'react-native-elements';
import Spacer from './Spacer';
import { Context as LocationContext } from '../context/LocationContext';
import useSaveTrack from '../hooks/useSaveTrack';

const TrackForm = () => {

  const {
    state: { name, recording, locations},
    changeName,
   startRecording,
    stopRecording
  } = useContext(LocationContext);

  const [savetrack] = useSaveTrack();

  return (
    <>
    <Spacer >
      <Input
      placeholder="enter a name "
      onChangeText={changeName}
      value={name}
      />
    </Spacer >
    <Spacer>
    { recording
      ?  <Button title="stop" onPress={stopRecording}/>
      :   <Button title="start record" onPress={startRecording}/>
    }
    </Spacer>
    <Spacer>
    {
          !recording && locations.length
          ? <Button title="save" onPress={savetrack}/>
          : null
        }
        </Spacer>
    </>
    );

};


export default TrackForm;
