import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { StackParamList } from '../types/navigation';
import { User } from '../types/user';

type HomeScreenNavigationProp = StackNavigationProp<StackParamList, 'Home'>;

const Home = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const user: User = {
    id: 1,
    fname: 'Teste',
    lname: 'Teste',
    username: 'Teste',
    avatar: 'https://example.com/avatar.jpg',
  };

  return (
    <View style={styles.outerContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Home Screen</Text>
      </View>
      <View style={styles.userInfoContainer}>
        <Image style={styles.avatar} source={{ uri: user.avatar }} />
        <Text style={styles.text}>Welcome, {user.fname} {user.lname}!</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Go to User Details"
          onPress={() => navigation.navigate('UserDetails', { user })}
          color="#444"
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333',
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#444',
    width: '100%',
    padding: 15,
    marginBottom: 10,
  },
  headerText: {
    fontSize: 24,
    color: '#eee',
  },
  userInfoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#555',
    borderRadius: 20,
    padding: 20,
    margin: 10,
    width: '90%',
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 15,
  },
  text: {
    fontSize: 18,
    color: '#eee',
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#444',
    width: '90%',
    padding: 15,
    borderRadius: 20,
    margin: 10,
  },
});
