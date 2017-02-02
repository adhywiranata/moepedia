import React, { Component } from 'react';
import {
  Text,
  Image,
  View,
  StyleSheet,
  Dimensions
} from 'react-native';

const ItemCard = (item) => (
  <View key={item._id} style={styles.grid}>
    <View style={styles.innerGrid}>
      {(item.name === 'Menma'
          ? <Image
        source={require('../../images/menma-nendo.jpg')}
        style={styles.gridImage}/>
      : <Text></Text>
      )}

      {(item.name === 'Asuna'
          ? <Image
        source={require('../../images/asuna-nendo.jpg')}
        style={styles.gridImage}/>
      : <Text></Text>
      )}

      {(item.name === 'Homura'
          ? <Image
        source={require('../../images/homura-nendo.jpg')}
        style={styles.gridImage}/>
      : <Text></Text>
      )}

      {(item.name === 'Irine'
          ? <Image
        source={require('../../images/irine-nendo.jpg')}
        style={styles.gridImage}/>
      : <Text></Text>
      )}

      {(item.name === 'Kudd'
          ? <Image
        source={require('../../images/kudd_nendo.jpeg')}
        style={styles.gridImage}/>
      : <Text></Text>
      )}

      {(item.name === 'Rem'
          ? <Image
        source={require('../../images/rem-nendo.jpg')}
        style={styles.gridImage}/>
      : <Text></Text>
      )}

      {(item.name === 'Saber'
          ? <Image
        source={require('../../images/saber-nendo.jpg')}
        style={styles.gridImage}/>
      : <Text></Text>
      )}

      <View style={styles.gridContent}>
        <Text style={styles.gridTitle}>{item.name}</Text>
        <Text style={styles.gridPrice}>Rp. {item.price}</Text>
        <View style={styles.gridSeparator} />
        <Text style={styles.gridStore}>{item.store}</Text>
      </View>
    </View>
  </View>
);

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  gridList: {
  },
  grid: {
    height: 150,
    width: windowWidth * 1,
    padding: 0,
    paddingLeft: 10,
    paddingRight: 10,
    marginTop:20
  },
  innerGrid: {
    backgroundColor: '#FFFFFF',
    borderColor: 'rgba(0,0,0, .1)',
    borderWidth: 1,
    flex: 1,
    alignItems: 'center',
    flexDirection:'row',
  },
  gridImage: {
    width: windowWidth * 0.445,
    height: 150
  },
  gridContent: {
    paddingLeft: 20,
    paddingTop: 5,
    alignSelf: 'flex-start'
  },
  gridTitle: {
    color: '#26A65B',
    fontWeight: 'bold',
    fontSize: 15,
    paddingTop: 5
  },
  gridPrice: {
    color: '#E87E04',
    marginTop: 5
  },
  gridSeparator: {
    backgroundColor: 'rgba(0,0,0, .1)',
    height: 1,
    marginTop: 5,
    marginBottom: 5
  },
  gridDesc: {
    color: '#666',
    width: 50,
  },
  gridStore: {
    marginTop: 5,
    color: '#666'
  },
});

export default ItemCard;
