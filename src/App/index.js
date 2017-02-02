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
import ItemCard from './routes/home/ItemCard'

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
