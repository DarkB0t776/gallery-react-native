import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {Button} from 'react-native-elements';
import ImagePicker from 'react-native-image-picker';
import {connect} from 'react-redux';
import {saveImage} from '../actions/index';

const UploadScreen = props => {
  const options = {
    title: 'Select Avatar',
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };

  const getImage = () =>
    ImagePicker.showImagePicker(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = {uri: response.uri};
        props.saveImage(source);
      }
    });

  return (
    <View style={styles.container}>
      <Button
        title="Get Image"
        onPress={getImage}
        containerStyle={styles.btnContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnContainer: {
    width: '50%',
  },
});

export default connect(
  null,
  {saveImage},
)(UploadScreen);
