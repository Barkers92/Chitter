import React, { Component } from 'react';
import {
StyleSheet, 
Text, 
View,
FlatList,
ActivityIndicator,
} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'
import CreateUserScreen from './screens/CreateUserScreen'
import UserProfileScreen from './screens/UserProfileScreen'
import SearchUserScreen from './screens/SearchUserScreen'
import SearchedUserProfileScreen from './screens/SearchedUserProfileScreen'
import ProfileScreenRemake from './screens/ProfileScreenRemake'
import PostChitScreen from './screens/PostChitScreen'


const AppStackNav = createStackNavigator({
 Home: {
	screen: HomeScreen
 },
 PostChit: {
	 screen: PostChitScreen
 },
 Login: {
	screen: LoginScreen
 },
 CreateUser: {
	 screen: CreateUserScreen
 },
 Profile: {
	 screen: UserProfileScreen
 },
 SearchUser: {
	 screen: SearchUserScreen
 },
 UserProfile: {
	 screen: SearchedUserProfileScreen
 },
 Remake: {
	 screen: ProfileScreenRemake
 }
});



const AppContainer = createAppContainer(AppStackNav)

export default AppContainer;