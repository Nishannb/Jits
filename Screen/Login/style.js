import {StyleSheet, useWindowDimensions} from 'react-native';

const stylesComponent = () => {
  const {height, width} = useWindowDimensions();
  return StyleSheet.create({
    screenContainer: {
      backgroundColor: '#0C2D57',
      height: height,
    },
    contentContainer: {
      position: 'absolute',
      bottom: height / 7,
      margin: 30,
    },
    brandNameHeader: {
      fontSize: 50,
      fontWeight: 'bold',
      color: '#fff',
      textTransform: 'uppercase',
      letterSpacing: 3,
    },
    brandTagText: {
      color: '#fff',
      marginTop: 10,
      fontSize: 20,
      textTransform: 'capitalize',
      fontWeight: 'medium',
      marginBottom: 15,
    },
    loginwithspotifybutton: {
      backgroundColor: '#000',
      height: 60,
      padding: 15,
      marginTop: 20,
      borderRadius: 30,
      alignContent: 'center',
      alignItems: 'center',
      width: width / 1.2,
    },
    buttonText: {
      color: '#fff',
      fontSize: 20,
      fontWeight: '600',
    },
    textInput: {
      width: '100%',
      height: 45,
      borderColor: 'white',
      borderWidth: 1,
      padding: 10,
      margin: 10,
      borderRadius: 10,
    },
  });
};

export default stylesComponent;
