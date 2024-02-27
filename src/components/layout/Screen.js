import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export const Screen = ({children}) => {

  return (
    // <LinearGradient colors={['#004226', '#00261d']} style={[styles.screen]}>
      <View style={styles.screen}>
          {children}
          <StatusBar style="light" />
      </View>
    //  </LinearGradient>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 15,
    flex: 1,
    backgroundColor: '#004226'
  },
});

export default Screen;
