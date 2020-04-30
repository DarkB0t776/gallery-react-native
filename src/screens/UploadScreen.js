import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
import ImagePicker from 'react-native-image-picker';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {saveImage, fetchImagesRequest} from '../actions/index';

const UploadScreen = props => {
  useEffect(() => {
    props.fetchImagesRequest();
  }, []);

  const options = {
    title: 'Upload Image',
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
      } else {
        const source = {uri: response.uri};
        props.saveImage(source);
      }
    });

  return (
    <View style={styles.container}>
      <Button
        title="Upload Image"
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

const mapDispatchToProps = dispatch =>
  bindActionCreators({fetchImagesRequest, saveImage}, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(UploadScreen);
