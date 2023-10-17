import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  upperHalf: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lowerHalf: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 50,
  },
  welcomeText: {
    fontSize: 40,
    color: 'white',
  },
  cinetieText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'red',
  },
  input: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    width: '100%',
    marginBottom: 10,
    padding: 20,
    color: 'white',
    borderRadius: 10,
  },
  button: {
    backgroundColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 50,
    borderRadius: 10,
  },
  buttonWelcome: {
    backgroundColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 50,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  forgotPasswordText: {
    color: 'red',
    textDecorationLine: 'underline',
  },
  newUserText1: {
    color: 'red',
    paddingTop: 20,
  },
  newUserText: {
    color: 'red',
  },
  
});



export default styles;