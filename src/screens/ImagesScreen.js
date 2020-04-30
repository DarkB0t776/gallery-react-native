import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {connect} from 'react-redux';

const ImagesScreen = props => {
  const renderImages = () => {
    return props.images.map(img => {
      return 1;
    });
  };

  return <View />;
};

const styles = StyleSheet.create({});

const mapStateToProps = state => ({images: state.images});

export default connect()(ImagesScreen);
