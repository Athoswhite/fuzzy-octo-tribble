import React from 'react';
import { View, Text, ImageBackground, StyleSheet, FlatList, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Navbar from '../components/navbar';
import styles2 from '../style2';

const demoData = [
  { category: "New Movies", data: ["Movie 1", "Movie 2", "Movie 3", "Movie 4", "Movie 5", "Movie 6", "Movie 7", "Movie 8", "Movie 9", "Movie 10"] },
  { category: "New Series", data: ["Series 1", "Series 2", "Series 3", "Series 4", "Series 5", "Series 6", "Series 7","Series 8", "Series 9", "Series 10"] },
  { category: "Most Watched", data: ["Watched 1", "Watched 2", "Watched 3", "Watched 4", "Watched 5", "Watched 6", "Watched 7", "Watched 8", "Watched 9", "Watched 10"] },
  { category: "Recommended", data: ["Video 1", "Video 2", "Video 3", "Video 4", "Video 5", "Video 6"] },
];

const Home = () => {
  const navigation = useNavigation();

  const handleMoviePress = () => {
    navigation.navigate('Movies');
  };

  const handleSeriesPress = () => {
    navigation.navigate('Series');
  };

  const moviesData = demoData.find(item => item.category === 'New Movies');
  const seriesData = demoData.find(item => item.category === 'New Series');
  const recommendedData = demoData.find(item => item.category === 'Recommended');
  const mostWatchedData = demoData.find(item => item.category === 'Most Watched');

  return (
    <View style={styles2.container}>
      <View style={styles2.upperScreen}>
        <ImageBackground source={require('../img/png-login.png')} style={styles2.backgroundImage}>
          <View style={styles2.overlay}>
            <Text style={styles2.logoText}>CINETIE</Text> 
            <Navbar />
            <Text style={styles2.title}>SOLUTIONS</Text>
            <View style={styles2.subtitleContainer}>
              <Text style={styles2.subtitle}>Drama - Action - Everyone - Movie</Text>
            </View>
            <View style={styles2.buttonContainer}>
              <TouchableOpacity style={[styles2.button, styles2.redBackground]} onPress={handleMoviePress}>
              <Image source={require('../img/play.png')} style={styles2.playArrow} resizeMode="contain" />
                <Text style={styles2.buttonText}>Play</Text>
              </TouchableOpacity>
              <View style={[styles2.button, styles2.redBackground]}>
              <Image source={require('../img/info.png')} style={styles2.playArrow} resizeMode="contain" />
                <Text style={styles2.buttonText}>Info</Text>
                
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
      <ScrollView style={styles2.lowerScreen}>
        {moviesData && (
          <View style={styles2.row}>
            <Text style={styles2.heading}>{moviesData.category}</Text>
            <FlatList
              data={moviesData.data}
              keyExtractor={(item) => item}
              horizontal
              renderItem={({ item }) => (
                <TouchableOpacity style={styles2.rectangleBox} onPress={handleMoviePress}>
                  <Text style={styles2.rectangleText}>{item}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        )}
        {seriesData && (
          <View style={styles2.row}>
            <Text style={styles2.heading}>{seriesData.category}</Text>
            <FlatList
              data={seriesData.data}
              keyExtractor={(item) => item}
              horizontal
              renderItem={({ item }) => (
                <TouchableOpacity style={styles2.rectangleBox} onPress={handleSeriesPress}>
                  <Text style={styles2.rectangleText}>{item}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        )}
        {recommendedData && (
          <View style={styles2.row}>
            <Text style={styles2.heading}>{recommendedData.category}</Text>
            <FlatList
              data={recommendedData.data}
              keyExtractor={(item) => item}
              horizontal
              renderItem={({ item }) => (
                <TouchableOpacity style={styles2.rectangleBox}>
                  <Text style={styles2.rectangleText}>{item}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        )}
        {mostWatchedData && (
          <View style={styles2.row}>
            <Text style={styles2.heading}>{mostWatchedData.category}</Text>
            <FlatList
              data={mostWatchedData.data}
              keyExtractor={(item) => item}
              horizontal
              renderItem={({ item }) => (
                <TouchableOpacity style={styles2.rectangleBox}>
                  <Text style={styles2.rectangleText}>{item}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default Home;