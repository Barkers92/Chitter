import React, { Component } from 'react';
import { Text, View,Button, TextInput, Alert } from 'react-native';

class CreateUserScreen extends Component{
 
 constructor(props) {
    super(props);
    this.state =
	{
		given_name: "",
		family_name: "",
		email: "",
		password: ""
	};	
  }
 
 
 
 render(){
 return(
 <View>
 <Text>Create User</Text>

<TextInput
placeholder="First Name"
onChangeText={(given_name) => this.setState({given_name})}
value={this.state.given_name}
/>
<TextInput
placeholder="Second Name"
onChangeText={(family_name) => this.setState({family_name})}
value={this.state.family_name}
/>
<TextInput
placeholder="Email"
onChangeText={(email) => this.setState({email})}
value={this.state.email}
/>
<TextInput
placeholder="Password"
onChangeText={(password) => this.setState({password})}
value={this.state.password}
/>

 <Button
 title="Create User"
 onPress={this.addUser}
/>


</View>
 );
 }
 addUser = () => {
	return fetch("http://10.0.2.2:3333/api/v0.0.5/user",
	{
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			given_name: this.state.given_name,
			family_name: this.state.family_name,
			email: this.state.email,
			password: this.state.password
		})
	})
		.then((response) => {
			Alert.alert("User Created");
			this.props.navigation.navigate('Login')
		})
		.catch((error) => {
			console.error(error);
		});
	}
}
 





export default CreateUserScreen