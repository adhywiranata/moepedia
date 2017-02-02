import React, { Component } from 'react';
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  Dimensions
} from 'react-native';

const LowerHeader = (props) => (
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
);

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
});

export default LowerHeader;
