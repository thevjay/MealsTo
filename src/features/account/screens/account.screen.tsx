import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'

export default function AccountScreen({ navigation }:any) {
  return (
    <View className='flex-1'>
      <ImageBackground className='flex-1 items-center justify-center' source={{uri:"https://th.bing.com/th/id/OIP.qkD9L5DJ462op4izzgRmPwHaEo?o=7&cb=defcachec2rm=3&rs=1&pid=ImgDetMain&o=7&rm=3"}}>
        <View>
            <Button 
                icon="lock-open-outline"
                color='red'
                mode='contained'
                onPress={()=> navigation.navigate('Login')}
            >
                Login
            </Button>
            <Button 
                icon="lock-open-outline"
                color='red'
                mode='contained'
                onPress={()=> navigation.navigate('Register')}
            >
                Register
            </Button>
        </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({})