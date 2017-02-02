import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableHighlight,
  Dimensions,
  ScrollView,
  ListView
} from 'react-native';

import itemsDataObj from '../data/itemsData.json';

import UpperHeader from './components/UpperHeader';
import LowerHeader from './components/LowerHeader';

const ItemCard = (item) => (
  <View key={item._id} style={styles.grid}>
    <View style={styles.innerGrid}>
      {(item.name === 'Menma'
          ? <Image
        source={require('../images/menma-nendo.jpg')}
        style={styles.gridImage}/>
      : <Text></Text>
      )}

      {(item.name === 'Asuna'
          ? <Image
        source={require('../images/asuna-nendo.jpg')}
        style={styles.gridImage}/>
      : <Text></Text>
      )}

      {(item.name === 'Homura'
          ? <Image
        source={require('../images/homura-nendo.jpg')}
        style={styles.gridImage}/>
      : <Text></Text>
      )}

      {(item.name === 'Irine'
          ? <Image
        source={require('../images/irine-nendo.jpg')}
        style={styles.gridImage}/>
      : <Text></Text>
      )}

      {(item.name === 'Kudd'
          ? <Image
        source={require('../images/kudd_nendo.jpeg')}
        style={styles.gridImage}/>
      : <Text></Text>
      )}

      {(item.name === 'Rem'
          ? <Image
        source={require('../images/rem-nendo.jpg')}
        style={styles.gridImage}/>
      : <Text></Text>
      )}

      {(item.name === 'Saber'
          ? <Image
        source={require('../images/saber-nendo.jpg')}
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

export class App extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: '',
      items: itemsDataObj
    }
  }

  handleChange(searchTerm) {
    this.setState({searchTerm: searchTerm});
  }

  handlePress() {
    const searchTerm = '';
    this.setState({searchTerm});
  }

  render() {

    let isRem = true;

    return (
      <View style={styles.container}>

        <View style={styles.header}>
          <UpperHeader />
          <View style={styles.lowerHeader}>
            <View>
              <TextInput
                style={styles.input}
                onChangeText={this.handleChange.bind(this)}
                value={this.state.searchTerm}
                autoCapitalize="none"
                placeholder="Search for your waifus here"
              />
            </View>
            <ScrollView style={styles.bottomMenu} horizontal={true}>
              <View style={styles.bottomMenuTab}>
                <Text style={styles.bottomMenuTabActive}>New Items</Text>
              </View>
              <View style={styles.bottomMenuTab}>
                <Text style={styles.bottomMenuTabInactive}>Popular</Text>
              </View>
              <View style={styles.bottomMenuTab}>
                <Text style={styles.bottomMenuTabInactive}>Nendoroid</Text>
              </View>
              <View style={styles.bottomMenuTab}>
                <Text style={styles.bottomMenuTabInactive}>Figma</Text>
              </View>
              <View style={styles.bottomMenuTab}>
                <Text style={styles.bottomMenuTabInactive}>Scale Figures</Text>
              </View>
              <View style={styles.bottomMenuTab}>
                <Text style={styles.bottomMenuTabInactive}>Accesories</Text>
              </View>
              <View style={styles.bottomMenuTab}>
                <Text style={styles.bottomMenuTabInactive}>Others</Text>
              </View>
            </ScrollView>
          </View>
        </View>

        <View style={styles.content}>

          <ScrollView style={styles.gridList}>
            {
              this.state.items
                .filter(item => {
                  return (item.name.indexOf(this.state.searchTerm) !== -1 || item.name.indexOf(this.state.searchTerm.toUpperCase()) !== -1)
                })
                .map(item => {
                return <ItemCard key={item._id} {...item}></ItemCard>
                })
            }
          </ScrollView>

        </View>

      </View>

    );
  }
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F5F5',
    flex: 1,
    flexDirection:'column',
  },
  header: {
    flex: 1,
    flexDirection:'column',
    alignSelf: 'stretch',
    backgroundColor: '#26A65B',
    height: windowHeight * 0.3
  },
  content: {
    height: windowHeight * 0.7,
    backgroundColor: '#DDD',
    flex: 1,
    flexDirection:'column',
    alignSelf: 'stretch',
  },
  bottomMenu:{
    backgroundColor: '#FFFFFF',
  },
  bottomMenuTab: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  bottomMenuTabActive: {
    color: '#26A65B',
    fontWeight: 'bold'
  },
  bottomMenuTabInactive: {
    color: '#666',
    fontWeight: 'bold'
  },
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
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  input: {
    height: 35,
    fontSize: 14,
    borderColor: 'rgba(0,0,0, .0)',
    borderWidth: 1,
    padding: 10,
    backgroundColor: '#fff',
    margin: 20,
    borderRadius: 2
  },
  button: {
    backgroundColor: '#353535',
    padding: 10,
    margin:10
  },
  buttonText: {
    color: '#fff'
  }
});
