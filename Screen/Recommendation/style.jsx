import { StyleSheet, useWindowDimensions } from "react-native";


const stylesComponent = () =>{
    const { height, width } = useWindowDimensions();
    return StyleSheet.create({
        recommendationContainer: {
            height: height,
            flex: 1
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
            marginHorizontal: 10,
            marginBottom: 50,
        },
        singleRecommendationContainer: {
            minheight: 100,
            borderWidth: 1,
            borderColor: 'lightgrey',
            flexDirection: 'row',
            alignItems: 'flex-start',
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
            maxWidth: width / 1.6,
            maxHeight: 60,
        }
    })
}


export default stylesComponent;