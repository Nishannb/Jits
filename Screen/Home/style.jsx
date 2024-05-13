import { StyleSheet, useWindowDimensions } from 'react-native';

const stylesComponent = ()=>{
    const { height, width } = useWindowDimensions();
    return StyleSheet.create({
        homeScreenContainer:{
            height: height,
            alignItems: 'center',
            backgroundColor: '#fff',
            marginTop: 10,
        },
        welcomeBannerSection: {
            backgroundColor: "#436850",
            width: "90%",
            borderRadius: 5,
            marginTop: 45,
            padding: 15,
            shadowColor: '#000', 
            shadowOffset: { width: 0, height: 1 }, 
            shadowOpacity: 0.3, 
            shadowRadius: 4, 
            elevation: 4, 
        },
        welcomeText: {
            fontSize: 20,
            fontWeight: 'bold',
            color: '#fff',
        },
        messageText:{
            color: 'grey',
            marginTop: 5,
            color: '#fff',
        },
        featureListContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            height: 70,
            backgroundColor: 'white',
            width: width/1.09,
            marginTop: 10,
            borderRadius: 10,
            height: 85,
        },
        feature: {
            marginHorizontal: 5,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 10,
            borderWidth: 1,
            borderColor: 'lightgrey',
            borderRadius: 10,
            width: '30%',
            shadowColor: 'lightgrey', 
            shadowOffset: { width: 0, height: 10 }, 
            shadowOpacity: 1, 
            shadowRadius: 4, 
            elevation: 4, 
            paddingHorizontal: 10,
            backgroundColor: '#fff'
        },
        featureIcon: {
            height: 30,
            width: 30,
        },
        featureText: {
            marginTop: 10,
            fontWeight: '500',
        },
        serviceListContainer: {
            backgroundColor: 'wheat',
            width: width/1.09,
            justifyContent: 'space-around',
            padding: 15,
            marginTop: 15,
            borderRadius: 10,
            shadowColor: '#fff', 
            shadowOffset: { width: 0, height: 2 }, 
            shadowOpacity: 0.3, 
            shadowRadius: 4, 
            elevation: 4, 
            height: height /1.9
        },
        serviceListBanner: {
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between", 
        },
        serviceListBannerText: {
            fontWeight: '600',
            fontSize: 20,
            marginTop: 10,
        },
        serviceListBannerImage: {
           width: 60,
           height: 60,
           resizeMode: 'contain',
           marginRight: 30,
        },
        serviceList: {
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
        }, 
        service: {
            backgroundColor: '#fff',
            marginHorizontal: 5,
            marginVertical: 5,
            padding: 15, 
            borderRadius: 8,
            alignItems: 'center',
            shadowColor: '#000', 
            shadowOffset: { width: 0, height: 2 }, 
            shadowOpacity: 0.3, 
            shadowRadius: 4, 
            elevation: 4, 
            width: 90,
        },
        serviceIconImage: {
            width: 40,
            height: 30
        }, 
        serviceText: {
            fontWeight: '500',
            marginTop: 5,
            fontSize: 12,
        }
      });
}

export default stylesComponent;