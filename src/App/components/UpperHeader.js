import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions
} from 'react-native';

const UpperHeader = () => (
  <View style={styles.upperHeader}>

    <View>
      <Text style={styles.leftMenu}>MENU</Text>
    </View>

    <View style={styles.centerLogo}>
      <Text style={styles.logo}>
        Moepedia
      </Text>
    </View>

    <View>
      <Text style={styles.rightMenu}></Text>
    </View>

  </View>// upperHeader End
);

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  upperHeader: {
    flex: 1,
    paddingTop: 30,
    //height: windowHeight * 0.01,
    alignSelf: 'stretch',
    flexDirection:'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
  lowerHeader: {
    //height: windowHeight * 0.3,
  },
  centerLogo: {
    width: windowWidth * 0.6
  },
  logo: {
    fontSize: 20,
    textAlign: 'center',
    margin: 3,
    color: '#FFFFFF'
  },
  leftMenu: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    paddingLeft: 20,
    width: windowWidth * 0.2,
    textAlign: 'left',
    fontSize: 11,
  },
  rightMenu: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    paddingRight: 20,
    width: windowWidth * 0.2,
    textAlign: 'right',
    fontSize: 11,
  },
});

export default UpperHeader;
