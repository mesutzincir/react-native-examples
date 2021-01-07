/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Pressable,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Share from 'react-native-share';
// Use prebuilt version of RNVI in dist folder
import Icon from 'react-native-vector-icons/AntDesign';

const shareonsocialMedia = async () => {
  const options = {
    message: 'share this message',
  };

  try {
    const result = await Share.open(options);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
const App = () => {
  return (
    <SafeAreaView>
      <Text
        style={{
          fontSize: 30,
          fontWeight: 'bold',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        react-native-share example
      </Text>
      <Pressable
        onPress={() => shareonsocialMedia()}
        style={styles.shareContainer}>
        <Icon name="sharealt" size={60} color="red" />
        <Text style={styles.shareTest}>Share with Friends</Text>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  shareContainer: {
    borderRadius: 8,
    borderWidth: 1,
    padding: 5,
    margin: 3,
    backgroundColor: '#fcfcfc',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  shareTest: {
    color: 'brown',
    fontWeight: 'bold',
  },
});
export default App;
