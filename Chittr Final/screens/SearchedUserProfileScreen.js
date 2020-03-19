import React, { Component } from 'react';
import { Text, View,TextInput, FlatList, Alert, Button } from 'react-native';
import PasswordInputText from 'react-native-hide-show-password-input';
class SearchedUserProfileScreen extends Component{
	
	
	constructor(props) {
		super(props);
		this.state =
		{
			userDetails:[],
			Followers:[],
		};	
	  }
  
  
  getData(){
	return fetch('http://10.0.2.2:3333/api/v0.0.5/user/'+ this.props.navigation.state.params.SearchedUserId)
	.then((response)=>response.json())
	.then((responseJson)=> {
		this.setState({
			isLoading:false,
			userDetails:responseJson,
		});
	})
	.catch((error)=>{
		console.log(error);
	});
}

componentDidMount(){
	this.getData();
}
  
  
 render(){
	//const {navigation} = this.props;

	 
	 
	 if(this.state.isLoading){
		  return(
		  <View>
		  <ActivityIndicator/>
		  </View>
		  )
	  }
	 
 return(
 //const UserId = navigation.getParam('userId, 'userID')
 <View>
    <View >
			
			<View>
				<Text>{this.state.userDetails.given_name}</Text>
				<Text>{this.state.userDetails.family_name}</Text>
				<Text>{this.state.userDetails.email}</Text>
			</View>
			 <Button
					title="Follow"
					onPress={this.follow}
				/>
				<Button
					title="Unfollow"
					onPress={this.unFollow}
				/>
				<Button
					title="Current followers"
					onPress={this.showFollowers}
				/>
	</View>
	
	<FlatList 
			data={this.state.Followers}
			renderItem={({item})=><Text>{item.given_name}</Text>}
			keyExtractor={({id},index)=>id}
			/>
			
			
 </View>
 
 );
 }

follow = () => {
	return fetch("http://10.0.2.2:3333/api/v0.0.5/user/"+this.props.navigation.state.params.SearchedUserId+"/follow",
	{
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'X-Authorization': key
		},
	})
		.then((response) => {
			Alert.alert("following");
		})
		.catch((error) => {
			console.error(error);
		});
	}


unFollow = () => {
	return fetch("http://10.0.2.2:3333/api/v0.0.5/user/"+this.props.navigation.state.params.SearchedUserId+"/follow",
	{
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json',
			'X-Authorization': key
		},
	})
		.then((response) => {
			Alert.alert("Unfollowed");
		})
		.catch((error) => {
			console.error(error);
			Alert.alert("unable to unfollow")
		});
	}
	
	 showFollowers = () => {
	return fetch("http://10.0.2.2:3333/api/v0.0.5/user/"+this.props.navigation.state.params.SearchedUserId+"/followers")
	
		.then((response) => response.json())
			.then((responseJson) => {
				this.setState({
					Followers:responseJson,
				});
			})
		.catch((error) => {
			console.error(error);
			Alert("could not load followers list");
		});
	}

}










export default SearchedUserProfileScreen;