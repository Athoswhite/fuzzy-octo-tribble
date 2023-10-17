import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  TextInput,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from '../style';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [isLandingPage, setIsLandingPage] = useState(true);


  // THIS IS THE WELCOME PAGE
  const renderLandingPage = () => {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('../img/png-login.png')}
          style={styles.backgroundImage}>
          <LinearGradient
            colors={['rgba(0, 0, 0, 0.2)', 'rgba(0, 0, 0, 0.9)']}
            style={styles.upperHalf}>
            <Text style={styles.welcomeText}>Welcome to</Text>
            <Text style={styles.cinetieText}>CINETIE</Text>
          </LinearGradient>
          <LinearGradient
            colors={['rgba(0, 0, 0, 0.9)', 'rgba(0, 0, 0, 1)']}
            style={styles.lowerHalf}>
            <TouchableOpacity
              style={[styles.buttonWelcome, {alignSelf: 'center'}]}
              onPress={() => setIsLandingPage(false)}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{alignItems: 'center'}}>
              <Text style={styles.newUserText1}>Privacy Policy</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{alignItems: 'center'}}>
              <Text style={styles.newUserText}>Term of Use</Text>
            </TouchableOpacity>
          </LinearGradient>
        </ImageBackground>
      </View>
    );
  };


// THIS IS THE LOGIN PAGE

  const renderLoginForm = () => {
    const navigation = useNavigation();
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('../img/png-login.png')}
          style={styles.backgroundImage}>
          <LinearGradient
            colors={['rgba(0, 0, 0, 0.2)', 'rgba(0, 0, 0, 0.9)']}
            style={styles.upperHalf}>
            <Text style={styles.welcomeText}>Welcome to</Text>
            <Text style={styles.cinetieText}>CINETIE</Text>
          </LinearGradient>
          <LinearGradient
            colors={['rgba(0, 0, 0, 0.9)', 'rgba(0, 0, 0, 1)']}
            style={styles.lowerHalf}>
            <View style={styles.content}>
              {/* Name Input */}
              {isSignUp && (
                <TextInput
                  style={styles.input}
                  placeholder="Name"
                  placeholderTextColor="white"
                />
              )}
              {/* Email Input */}
              {!isForgotPassword && (
                <TextInput
                  style={styles.input}
                  placeholder="Email"
                  placeholderTextColor="white"
                />
              )}
              {/* Password Input */}
              {!isForgotPassword && (
                <TextInput
                  style={styles.input}
                  placeholder="Password"
                  placeholderTextColor="white"
                  secureTextEntry={true}
                />
              )}
              {/* Forgot Password Link */}
              {!isSignUp && !isForgotPassword && (
                <View style={{flexDirection: 'row', marginBottom: 10}}>
                  <TouchableOpacity onPress={() => setIsForgotPassword(true)}>
                    <Text
                      style={[styles.forgotPasswordText, {marginRight: 50}]}>
                      Forgot Password?
                    </Text>
                  </TouchableOpacity>
                  {/* New User Link */}
                  <TouchableOpacity onPress={() => setIsSignUp(true)}>
                    <Text style={styles.newUserText}>Are you new here?</Text>
                  </TouchableOpacity>
                </View>
              )}
              {/* Login/Sign Up/Forgot Password Button */}
              {!isForgotPassword && (
                <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.button}>
                  <Text style={styles.buttonText}>
                    {isSignUp ? 'Sign Up' : 'Login'}
                  </Text>
                </TouchableOpacity>
              )}
              {/* Forgot Password Screen */}
              {isForgotPassword && (
                <>
                  {/* Email Input */}
                  <TextInput
                    style={styles.input}
                    placeholder="Email"
                    placeholderTextColor="white"
                  />
                  {/* Reset Password Button */}
                  <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Reset Password</Text>
                  </TouchableOpacity>
                  {/* Back to Login Link */}
                  <TouchableOpacity onPress={() => setIsForgotPassword(false)}>
                    <Text style={[styles.newUserText, {marginTop: 10}]}>
                      Back to Login
                    </Text>
                  </TouchableOpacity>
                </>
              )}
              {/* Switch to Login/Sign Up */}
              {isSignUp && !isForgotPassword && (
                <TouchableOpacity onPress={() => setIsSignUp(false)}>
                  <Text style={[styles.newUserText, {marginTop: 10}]}>
                    Already have an account? Login here.
                  </Text>
                </TouchableOpacity>
              )}
            </View>
          </LinearGradient>
        </ImageBackground>
      </View>
    );
  };

  return isLandingPage ? renderLandingPage() : renderLoginForm();
};


export default Login;