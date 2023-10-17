import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const Navbar = () => {
  const navigation = useNavigation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuAnimation = useState(new Animated.Value(-300))[0];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    Animated.timing(menuAnimation, {
      toValue: isMenuOpen ? -300 : 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const handleHomeMenuPress = () => {
    navigation.navigate('Home');
  };

  const handleSeriesMenuPress = () => {
    navigation.navigate('Series');
  };

  const handleMoviesMenuPress = () => {
    navigation.navigate('Movies');
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    Animated.timing(menuAnimation, {
      toValue: -300,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleMenu} style={styles.menuContainer}>
        <View style={[styles.dotsMenu, isMenuOpen && styles.openMenu]}>
          <View style={styles.dotRow}>
            <View style={styles.dot} />
            <View style={styles.dot} />
            <View style={styles.dot} />
          </View>
          <View style={styles.dotRow}>
            <View style={styles.dot} />
            <View style={styles.dot} />
            <View style={styles.dot} />
          </View>
          <View style={styles.dotRow}>
            <View style={styles.dot} />
            <View style={styles.dot} />
            <View style={styles.dot} />
          </View>
        </View>
      </TouchableOpacity>
      <Modal visible={isMenuOpen} animationType="none" transparent={true}>
        <View style={styles.drawer}>
          <TouchableOpacity onPress={closeMenu} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>X</Text>
          </TouchableOpacity>
          <Animated.View
            style={[
              styles.drawerContent,
              {
                transform: [
                  {
                    translateX: menuAnimation,
                  },
                ],
              },
            ]}
          >
            <TouchableOpacity onPress={handleHomeMenuPress} >
             <Text style={styles.drawerItem}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleSeriesMenuPress} >
            <Text style={styles.drawerItem}>Series</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleMoviesMenuPress} >
            <Text style={styles.drawerItem}>Movies</Text>
            </TouchableOpacity>
            <Text style={styles.drawerItem}>Search</Text>
            <Text style={[styles.drawerItem, styles.searchItem]}></Text>
            <Text style={[styles.drawerItem, styles.genreItem]}>Genres</Text>
            <Text style={styles.drawerItem}>Romantic</Text>
            <Text style={styles.drawerItem}>Action</Text>
            <Text style={styles.drawerItem}>Drama</Text>
          </Animated.View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  menuContainer: {
    position: 'absolute',
    top: 40,
    left: -200,
  },
  dotsMenu: {
    width: 30,
    height: 30,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  openMenu: {
    backgroundColor: 'none',
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
    backgroundColor: 'red',
  },
  drawer: {
    flex: 1,
    backgroundColor: '#1F2120',
    alignItems: 'flex-start',
    paddingTop: 80,
    overflow: 'hidden',
    width: '60%',
  },
  closeButton: {
    position: 'absolute',
    top: 20,
    left: 5,
    backgroundColor: 'transparent',
    padding: 10,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 30,
  },
  drawerContent: {
    paddingLeft: 10,
    width: 300,
    height: '100%',
  },
  drawerItem: {
    color: 'white',
    fontSize: 30,
    marginTop: 10,
    marginRight: 150,
  },
  searchItem: {
    marginBottom: 3,
  },
  genreItem: {
    color: 'red',
  },
});

export default Navbar;