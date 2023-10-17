import React from 'react';
import { View, Text, ImageBackground, StyleSheet, ScrollView, Image } from 'react-native';
import Navbar from '../components/navbar';


const Watch = () => {
  return (
    <View style={styles.container}>
      <View style={styles.upperScreen}>
        <ImageBackground
          source={require('../img/png-login.png')}
          style={styles.backgroundImage}
        >
          <View style={styles.overlay}>
            <Text style={styles.logoText}>CINETIE</Text>
              <Navbar />
            <Text style={styles.title}>SOLUTIONS</Text>
            <View style={styles.subtitleContainer}>
              <Text style={styles.subtitle}>Drama - Action - Everyone - Movie</Text>
            </View>
            <View style={styles.buttonContainer}>
              <View style={[styles.button, styles.redBackground]}>
              <Image source={require('../img/play.png')} style={styles.playArrow} resizeMode="contain" />
                <Text style={styles.buttonText}>Play</Text>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.lowerScreen}>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Summary</Text>
            <Text style={styles.sectionText}>
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
            </Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Cast</Text>
            <Text style={styles.sectionText}>
              It is a long established fact that a reader will be distracted by
            </Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Language</Text>
            <Text style={styles.sectionText}>English</Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
  },
  logoText: {
    position: 'absolute',
    top: 40,
    right: 10,
    fontSize: 30,
    fontWeight: 'bold',
    color: 'red',
  },
  menuContainer: {
    position: 'absolute',
    top: 40,
    left: 15,
  },
  dotsMenu: {
    width: 30,
    height: 30,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dotRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#8C0000',
  },
  title: {
    fontSize: 33,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  scrollViewContent: {
    paddingVertical: 10,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  sectionText: {
    fontSize: 16,
    color: 'white',
  },
  subtitleContainer: {
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    flexWrap: 'wrap',
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
    paddingVertical: 8,
    borderRadius: 5,
    marginHorizontal: 5,
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

export default Watch;