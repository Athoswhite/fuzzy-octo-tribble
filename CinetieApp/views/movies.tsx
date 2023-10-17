import React, { useState } from 'react';
import { View, Text, ImageBackground, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import Navbar from '../components/navbar';
import { useNavigation } from '@react-navigation/native';

const demoData = [
  {
    category: 'Movies',
    data: [
      'It is a long established fact that a reader Content here, content here 1, making it look like readable English.',
      'It is a long established fact that a reader Content here, content here 2, making it look like readable English.',
      'It is a long established fact that a reader Content here, content here 3, making it look like readable English.',
      'It is a long established fact that a reader Content here, content here 4, making it look like readable English.',
      'It is a long established fact that a reader Content here, content here 5, making it look like readable English.',
      'It is a long established fact that a reader Content here, content here 6, making it look like readable English.',
      'It is a long established fact that a reader Content here, content here 7, making it look like readable English.',
      'It is a long established fact that a reader Content here, content here 8, making it look like readable English.',
      'It is a long established fact that a reader Content here, content here 9, making it look like readable English.',
      'It is a long established fact that a reader Content here, content here 10, making it look like readable English.',
    ],
  },
];


const Movies = () => {
  const navigation = useNavigation();
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedSeason, setSelectedSeason] = useState('Parts');
  const toggleDropdown = () => setShowDropdown(!showDropdown);
  const selectSeason = (season: string) => {
    setSelectedSeason(season);
    setShowDropdown(false);
  };

  const handlePlayPress = () => {
    navigation.navigate('Watch');
  };


  // Create an array of seasons
  const seasons = ['', 'Part 1', 'Part 2', 'Part 3']; // Add more seasons here

  return (
    <View style={styles.container}>
      <View style={styles.upperScreen}>
        <ImageBackground source={require('../img/png-login.png')} style={styles.backgroundImage}>
          <View style={styles.overlay}>
            <Text style={styles.logoText}>CINETIE</Text>
            <Navbar />
            <Text style={styles.title}>SOLUTIONS</Text>
            <View style={styles.subtitleContainer}>
              <Text style={styles.subtitle}>Drama - Action - Everyone - Movie</Text>
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={[styles.button, styles.redBackground]} onPress={handlePlayPress}>
              <Image source={require('../img/play.png')} style={styles.playArrow} resizeMode="contain" />
                <Text style={styles.buttonText}>Play</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.lowerScreen}>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          {demoData.map((item) => (
            <View key={item.category} style={styles.row}>
              <Text style={styles.heading}>{item.category}</Text>
              {item.data.map((item, index) => (
                <View key={item} style={styles.rowItem}>
                  <View style={styles.rectangleNumberContainer}>
                    <Text style={styles.rectangleNumber}>{index + 1}</Text>
                  </View>
                  <View style={styles.rectangleBox} />
                  <View style={styles.textContainer}>
                    <Text style={styles.text}>{item}</Text>
                  </View>
                </View>
              ))}
            </View>
          ))}
        </ScrollView>
      </View>
      {showDropdown && (
        <View style={styles.dropdown}>
          <TouchableOpacity onPress={toggleDropdown} style={styles.dropdownBackground}>
            {seasons.map((season) => (
              <TouchableOpacity key={season} onPress={() => selectSeason(season)}>
                <Text style={styles.dropdownText}>{season}</Text>
              </TouchableOpacity>
            ))}
          </TouchableOpacity>
        </View>
      )}
      <TouchableOpacity onPress={toggleDropdown} style={styles.dropdownToggle}>
        <Text style={styles.dropdownToggleText}>{selectedSeason}</Text>
        <Image source={require('../img/white-arrow-down.png')} style={styles.dropdownArrow} resizeMode="contain" />
      </TouchableOpacity>
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
  rowItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  rectangleNumberContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    width: 20,
    height: 20,
    borderRadius: 15,
    marginRight: 5,
  },
  rectangleNumber: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  rectangleBox: {
    width: '40%',
    height: 100,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  textContainer: {
    width: '50%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 15,
  },
  text: {
    fontSize: 15,
    color: 'white',
    textAlign: 'left',
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
  dropdown: {
    position: 'absolute',
    top: 462,
    right: 15,
    zIndex: 1,
  },
  dropdownBackground: {
    backgroundColor: '#1E1E1E',
    borderRadius: 5,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dropdownText: {
    fontSize: 16,
    color: 'white',
    marginBottom: 5,
    marginRight: 16,
  },
  dropdownToggle: {
    position: 'absolute',
    top: 462,
    right: 15,
    zIndex: 1,
    backgroundColor: '#191919',
    paddingHorizontal: 6,
    paddingVertical: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  dropdownToggleText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    paddingLeft: 0,
  },
  dropdownArrow: {
    marginLeft: 5,
    width: 20,
    height: 20,

  },
  playArrow: {
    marginLeft: -10,
    width: 25,
    height: 20,

  },
});

export default Movies;