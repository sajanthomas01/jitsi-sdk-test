/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type { Node } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { JitsiMeetExtended, JitsiMeetView } from 'react-native-jitsi-meet-extended';

const Section = ({ children, title }): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [showMeet, setShowMeet] = React.useState(false);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const runMeet = () => {
    setShowMeet(true);
  }

  const leaveMeet = () => {
    JitsiMeetExtended.leaveMeet()
  }

  const runActivity = () => {
    JitsiMeetExtended.activityMode({
      roomId: "cowboybtr125d44d5",
      userInfo: {
        displayName: "APJ"
      }
    })
  }

  const muteAudio = () => {
    JitsiMeetExtended.muteAudio(true)
  }


  function conferenceTerminated(nativeEvent: any) {
    console.log(nativeEvent)
    setShowMeet(false);
  }

  return (
    <View style={styles.container}>
      {showMeet && (<JitsiMeetView
        style={{
          flex: 0.7,
          height: '100%',
          width: '100%',
        }}
        options={{
          roomId: "randomfox895678dc5d6",
          chatEnabled: false,
          inviteEnabled: false,
          meetingNameEnabled: false,
          userInfo: {
            displayName: "Nikola Tesla"
          }
        }}

      />
      )}
      <TouchableOpacity onPress={runMeet} style={styles.button}>
        <Text>Start meet as view inside app</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={runActivity} style={styles.button}>
        <Text>Start meet activity</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={leaveMeet} style={styles.button}>
        <Text>Leave call </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={muteAudio} style={styles.button}>
        <Text>Mute audio </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.9,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    borderRadius: 10,
    width: 250,
    height: 50,
    padding: 10,
    margin: 10,
    borderWidth: 2,
    borderColor: "gray",
    justifyContent: "center",
    alignItems: "center",
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
