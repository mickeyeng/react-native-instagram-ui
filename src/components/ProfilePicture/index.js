import React from 'react';
import {Image, View} from 'react-native';
import styles from './styles';

const ProfilePicture = ({uri}) => (
  <View style={styles.container}>
    <Image style={styles.image} source={{uri}} />
  </View>
);

export default ProfilePicture;
