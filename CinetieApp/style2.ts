import { StyleSheet } from 'react-native';

const styles2 = StyleSheet.create({
    container: {
      flex: 1,
    },
    upperScreen: {
      height: '50%',
    },
    lowerScreen: {
      flex: 1,
      backgroundColor: 'black',
    },
    backgroundImage: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
      alignItems: 'center',
    },
    overlay: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 1,
    },
    logoText: {
      position: 'absolute',
      top: 40,
      right: 10,
      fontSize: 30,
      fontWeight: 'bold',
      color: 'red',
    },
    
    title: {
      fontSize: 33,
      fontWeight: 'bold',
      color: 'white',
      marginBottom: 10,
    },
    row: {
      flexDirection: 'column',
      marginLeft: 7,
      marginTop: 10,
    },
    heading: {
      textAlign: 'left',
      fontSize: 17,
      fontWeight: 'bold',
      color: 'white',
      marginBottom: 5,
    },
    rectangleContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    rectangleBox: {
      width: 100,
      height: 150,
      backgroundColor: 'white',
      margin: 5,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
    },
    rectangleText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: 'black',
    },
    subtitleContainer: {
      padding: 10,
      borderRadius: 5,
      marginBottom: 10,
    },
    subtitle: {
      fontSize: 16,
      fontWeight: 'bold',
      color: 'white',
    },
    buttonContainer: {
      flexDirection: 'row',
      paddingLeft: 2,
      paddingBottom: 50,
    },
    button: {
      paddingHorizontal: 10,
      paddingVertical: 6,
      borderRadius: 5,
      marginHorizontal: 15,
      flexDirection: 'row',
    },
    redBackground: {
      backgroundColor: '#8C0000',
    },
    buttonText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: 'white',
    },
    playArrow: {
      marginLeft: -10,
      width: 25,
      height: 20,
  
    },
    
  });
  


  export default styles2;