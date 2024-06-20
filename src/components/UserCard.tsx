import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React from "react";
import { RouteProp, useRoute } from "@react-navigation/native";
import { StackParamList } from "../types/navigation";
import { User } from "../types/user";

type UserDetailsRouteProp = RouteProp<StackParamList, 'UserDetails'>;

const UserCard = () => {
  const route = useRoute<UserDetailsRouteProp>();
  const { user } = route.params;

  const additionalUsers: User[] = [
    { id: 2, fname: 'Jane', lname: 'Doe', username: 'janedoe', avatar: 'https://example.com/avatar2.jpg' },
    { id: 3, fname: 'Jim', lname: 'Beam', username: 'jimbeam', avatar: 'https://example.com/avatar3.jpg' },
    { id: 4, fname: 'Jack', lname: 'Daniels', username: 'jackdaniels', avatar: 'https://example.com/avatar4.jpg' },
    { id: 5, fname: 'Johnny', lname: 'Walker', username: 'johnnywalker', avatar: 'https://example.com/avatar5.jpg' },
    { id: 6, fname: 'Jill', lname: 'Valentine', username: 'jillvalentine', avatar: 'https://example.com/avatar6.jpg' },
  ];

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.outerContainer}>
        <View style={styles.container}>
          <Text style={styles.text}>Complete Name: {user.fname} {user.lname}</Text>
          <Text style={styles.text}>Username: {user.username}</Text>
          <Image style={styles.image} source={{ uri: user.avatar }} />
          <Text style={styles.text}>ID: {user.id}</Text>
        </View>
      </View>
      {additionalUsers.map((additionalUser) => (
        <View key={additionalUser.id} style={styles.outerContainer}>
          <View style={styles.container}>
            <Text style={styles.text}>Complete Name: {additionalUser.fname} {additionalUser.lname}</Text>
            <Text style={styles.text}>Username: {additionalUser.username}</Text>
            <Image style={styles.image} source={{ uri: additionalUser.avatar }} />
            <Text style={styles.text}>ID: {additionalUser.id}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

export default UserCard;

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333', // Cor de fundo mais escura para destacar
  },
  outerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333', // Cor de fundo mais escura para destacar
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#444', // Cor de fundo ainda mais escura para os containers
    borderRadius: 20,
    padding: 20,
    margin: 10,
    width: '90%',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    margin: 10,
  },
  text: {
    color: '#eee', // Texto em cor clara para bom contraste com fundo escuro
    margin: 5,
    fontSize: 18,
  },
});
