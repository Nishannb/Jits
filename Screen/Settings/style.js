import { StyleSheet, useWindowDimensions } from 'react-native';

const stylesComponent = ()=>{
    const { height, width } = useWindowDimensions();
    return StyleSheet.create({
        settingsContainer: {
            alignContent: 'space-between',
            height: height,
            backgroundColor: 'lightgrey',
        },
        detailBox: {
            flexDirection: 'row',
            width: width / 1.03,
            justifyContent: 'space-between',
            alignSelf: 'center',
            marginTop: 10,
            backgroundColor: '#fff',
            paddingHorizontal: 10,
            paddingVertical: 15,
            borderRadius: 5
        },
        actionButtonsSection:{
            marginTop: 20,
        },
        logoutBtn: {
            backgroundColor: '#000',
            paddingVertical: 15,
            width: width,
            alignSelf: 'center',
            // borderRadius: 10
        },
        logoutBtnText: {
            color: '#fff',
            alignSelf: 'center',
            fontSize: 18
        },
        deleteBtn: {
            backgroundColor: '#fff',
            paddingVertical: 15,
            width: width ,
            alignSelf: 'center',
            // borderRadius: 10,
            marginTop: 30
        },
        deleteBtnText: {
            color: '#000',
            alignSelf: 'center',
            fontSize: 14
        },
      });
}

export default stylesComponent;