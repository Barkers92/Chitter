import React, { Component } from 'react';
import { Text, View,Button, TextInput, Alert } from 'react-native';
class PostChitScreen extends Component{
	
	constructor(props){
		super(props);
		this.state ={
			isLoading:true,
			userListData:[],
			chit: ""
		}
	}
	
 render(){
 return(
 <View>
			<TextInput
				placeholder="Post Chit"
				onChangeText={(chit) => this.setState({chit})}
				maxLength={141}
				value={this.state.chit}
			/>
		  <Button
				title="Post Chit"
				onPress={this.PostChit}
			/>		
 </View>
 );
 }
 
 PostChit = () => {
	return fetch("http://10.0.2.2:3333/api/v0.0.5/chits",
	{
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'X-Authorization': key
		},
		body: JSON.stringify({
			chit_id: 0,
			timestamp: 0,
			chit_content: this.state.chit,
			location: {
				longitude: 0,
				latitude: 0
			},
			user: {
			user_id: user_id,
			given_name: this.state.given_name,
			family_name: this.state.family_name,
			email: this.state.email
			}
		})
	})
		.then((response) => {
			Alert.alert("chitted");
		})
		.catch((error) => {
			console.error(error);
			Alert("incorrect chit");
		});
	}
	
}
export default PostChitScreen;