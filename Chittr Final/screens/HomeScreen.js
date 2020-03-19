import React, { Component } from 'react';
import { Text, View,Button } from 'react-native';
class HomeScreen extends Component{
 render(){
 return(
 <View>
 
  <Button
 title="Login"
 onPress={() => this.props.navigation.navigate('Login')}
/>

 <Button
 title="Create User"
 color="green"
 onPress={() => this.props.navigation.navigate('CreateUser')}
/>

 <Button
 title="User Profile"
 onPress={() => this.props.navigation.navigate('Profile')}
/>

 <Button
 title="Search User"
 onPress={() => this.props.navigation.navigate('SearchUser')}
/>

 <Button
 title="Search User profile"
 onPress={() => this.props.navigation.navigate('UserProfile')}
/>

 <Button
 title="Designer page"
 onPress={() => this.props.navigation.navigate('Remake')}
/>


 </View>
 );
 }
}
export default HomeScreen;