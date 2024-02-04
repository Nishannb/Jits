import { StyleSheet, useWindowDimensions } from "react-native";


const stylesComponent = () =>{
    const { height, width } = useWindowDimensions();
    return StyleSheet.create({
        recommendationContainer: {
            height: height,
            flex: 1,
            marginTop:20,
            alignItems: 'center'
        }, 
        recommendationHeaderContainer: {
            marginTop: 10
        }, 
        recommendationHeaderText: {
            fontWeight: '500',
            fontSize: 20,
            margin: 15
        },
        recommendationListSection: {
            marginBottom: 50,
            width: width /1.02
        },
        singleRecommendationContainer: {
            minheight: 100,
            borderWidth: 1,
            borderColor: 'lightgrey',
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 5,
            borderRadius: 3,
        },
        singleRecommendationImage: {
            width: 100,
            height: 100,
            marginRight: 10
        },
        singleRecommendationTextSection: {
            marginTop: 10
        },
        singleRecommendationTextHeader: {
            fontSize: 18,
            fontWeight: '500'
        }, 
        singleRecommendationTextDescription: {
            color: 'grey',
            maxWidth: width / 1.5,
            maxHeight: 60,
        },
        button: {
            backgroundColor: '#000',
            width: width / 2,
            padding: 15,
            borderRadius: 10,
            alignItems: 'center',
            marginVertical: 20,
        },
        buttonText: {
            color: '#fff',
            fontSize: 16
        }
    })
}


export default stylesComponent;