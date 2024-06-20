import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { RouteProp, useRoute } from "@react-navigation/native";
import { StackParamList } from "../types/navigation";

type UserDetailsRouteProp = RouteProp<StackParamList, 'UserDetails'>;

const UserDetails = () => {
  const route = useRoute<UserDetailsRouteProp>();
  const { user } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Complete Name: {user.fname} {user.lname}</Text>
      <Text style={styles.text}>Username: {user.username}</Text>
      <Image style={styles.image} source={{ uri: user.avatar }} />
      <Text style={styles.text}>ID: {user.id}</Text>
    </View>
  );
};

export default UserDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#343a40",
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 2,
    margin: 10,
  },
  text: {
    color: "#FFFFFF",
    margin: 5,
    fontSize: 20,
  },
});
