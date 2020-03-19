import React, { Component } from 'react';
import { Text, View,TextInput, Alert, Button } from 'react-native';
import PasswordInputText from 'react-native-hide-show-password-input';
class LoginScreen extends Component{
	
	
	
	constructor(props) {
		super(props);
		this.state =
		{
			email: "",
			password: ""
		};	
	  }
  
  
 render(){
 return(
 <View>

 

<TextInput
placeholder="Email"
onChangeText={(email) => this.setState({email})}
value={this.state.email}
/>

 <PasswordInputText
    value={this.state.password}
    onChangeText={ (password) => this.setState({ password }) }
/>

  <Button
 title="Login"
 onPress={this.Login}
/>
 
 
 </View>
 );
 }
 
 Login = () => {
	return fetch("http://10.0.2.2:3333/api/v0.0.5/login",
	{
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			email: this.state.email,
			password: this.state.password
		})
	})
		.then((response) => response.json())
			.then((responseJson) => {
				
				let object = responseJson;
				global.key = object.token;
				global.user_id = object.id;
				console.log(object.token);
				Alert.alert("login");
				this.props.navigation.navigate('Profile')
			})

		.catch((error) => {
			console.error(error);
			Alert("incorrect login details");
		});
	}
	
	
	
}
export default LoginScreen;