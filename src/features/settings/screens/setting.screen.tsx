import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Avatar, Button, List } from "react-native-paper";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

export default function SettingScreen({ navigation }: any) {
  const { onLogout, user }: any = useContext(AuthenticationContext);
  return (
    <SafeAreaView>
      <View className="items-center">
        <Avatar.Icon size={180} icon="human" className="bg-[#2182BD]" />
      </View>
      <View>
        <Text>{user.email}</Text>
      </View>
      <List.Section>
        <List.Item
          title="Favourites"
          className="p-5"
          description="View your favourites"
          left={(props) => <List.Icon {...props} color="black" icon="" />}
          onPress={() => navigation.navigate("Favourites")}
        />
        <List.Item
          className="p-5"
          title="Logout"
          left={(props) => <List.Icon {...props} color="black" icon="" />}
          onPress={onLogout}
        />
      </List.Section>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
