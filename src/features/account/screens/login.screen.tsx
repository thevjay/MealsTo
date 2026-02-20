import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useContext, useState } from "react";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { SafeAreaView } from "react-native-safe-area-context";
import { ActivityIndicator, Button } from "react-native-paper";
import LottieView from 'lottie-react-native'

export default function LoginScreen({navigation}:any) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const context = useContext(AuthenticationContext);
  if (!context) return null;
  const { onLogin , isLoading, error} = context;
  return (
    <SafeAreaView className="flex-1">
      <ImageBackground
        className="flex-1 items-center justify-center"
        source={{
          uri: "https://th.bing.com/th/id/R.1d53b03aafefb947855d020a3a1d3627?rik=vdxr26C7QjVsfA&riu=http%3a%2f%2fwallpapercave.com%2fwp%2f1jNJMch.jpg&ehk=4Td%2b0%2f%2fUw65a8R98OkINQWcnetP1F3TUvKvlemkj5Yg%3d&risl=&pid=ImgRaw&r=0",
        }}
        resizeMode="cover"
      >
        <View className="w-full h-[40%] absolute top-7 p-">

        <LottieView
          key='animation'
          autoPlay
          loop
          resizeMode='cover'
          source={require("../../../../assets/Watermelon.json")}
        />
        </View>
        <View>

          <Text>Meals To Go</Text>
        </View>
        <View className="flex-1 bg-black/50 justify-center items-center">
          <View className="w-[85%] bg-white p-6 rounded-xl">
            <Text className='text-2xl font-bold text-center mb-6'>Login</Text>
            <TextInput
              className='border border-gray-300 p-3 mb-4 rounded-lg'
              placeholder="Email"
              placeholderTextColor='#999'
              value={email}
              autoCapitalize="none"
              keyboardType="email-address"
              onChangeText={(value) => setEmail(value)}
            />
            <TextInput
              className='border border-gray-300 p-3 mb-4 rounded-lg'
              placeholder="Password"
              placeholderTextColor='#999'
              value={password}
              secureTextEntry
              onChangeText={(value) => setPassword(value)}
            />
            {error && <Text>{error[0]}</Text>}
            <TouchableOpacity
              className='bg-blue-500 p-4 rounded-lg items-center'
              onPress={()=> onLogin(email,password)}
              disabled={isLoading}
            > 
              {isLoading ? (
                <ActivityIndicator color='#fff'/>
              ):(
                <Text className='text-white font-bold'>Login</Text>
              )}
            </TouchableOpacity>

          </View>
          <View>
            <Button
             mode="contained"
             onPress={()=> navigation.goBack()}
            >
              Back
            </Button>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
