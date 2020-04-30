import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Image, Icon} from 'react-native-elements';
import {ActivityIndicator} from 'react-native';
import {connect} from 'react-redux';
import {likeImage} from '../actions/index';

const ImagesScreen = props => {
  console.log(props.images);
  //Function to render images
  const renderImages = () => {
    return props.images.map(img => {
      //Get icon depends on condition
      const heartIcon = img.liked ? (
        <Icon name="heart" type="font-awesome" size={30} color="red" />
      ) : (
        <Icon name="heart-o" type="font-awesome" size={30} />
      );

      return (
        <View key={img.id} style={styles.imageContainer}>
          <Image
            source={{uri: img.src}}
            style={{width: 250, height: 250}}
            PlaceholderContent={<ActivityIndicator />}
            containerStyle={{elevation: 5}}
          />
          <View style={styles.infoContainer}>
            <TouchableOpacity onPress={() => props.likeImage(img.id)}>
              {heartIcon}
            </TouchableOpacity>
            <Text>{img.date}</Text>
          </View>
        </View>
      );
    });
  };

  return (
    <View style={styles.container}>
      <ScrollView>{props.images ? renderImages() : null}</ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  imageContainer: {
    marginVertical: 10,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    height: 40,
    borderRadius: 2,
    elevation: 5,
  },
});

const mapStateToProps = state => ({images: state.images});

export default connect(
  mapStateToProps,
  {likeImage},
)(ImagesScreen);
