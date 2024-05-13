import { StyleSheet, useWindowDimensions } from 'react-native';

const stylesComponent = ()=>{
    const { height, width } = useWindowDimensions();
    return StyleSheet.create({
        categoryLabel: {
            width: '90%',
            alignSelf: 'center',
            fontSize: 13,
            color: 'grey'
          },
          input: {
            color: 'white',
            paddingVertical: 10,
            paddingHorizontal: 20,
            marginVertical: 5,
            borderRadius: 20,
            fontSize: 20,
            fontFamily: 'Quicksand-Light',
          },
          inputBoxContainer: {
            marginVertical: 10,
            width: '90%',
            alignSelf: 'center',
          },
          inputBox: {
            borderWidth: 1,
            padding: 10,
            marginTop: 4,
            borderRadius: 5,
            borderColor: 'grey',
          },
          buttonContainer: {
            marginTop: 20,
            width: '90%',
            alignSelf: 'center',
          },
          button: {
            backgroundColor: 'lightgreen',
            padding: 15,
            borderRadius: 10,
          },
          buttonText: {
            alignSelf: 'center',
          },
      });
}

export default stylesComponent;