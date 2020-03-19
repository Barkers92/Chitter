import React, { Component } from 'react';
import { Text, View, FlatList, TextInput, Alert, Button } from 'react-native';
class SearchUserScreen extends Component{
	
	
	
	constructor(props) {
		super(props);
		this.state =
		{
			searchTerm: "",
			userList:[],
		};	
	  }
  
  
 render(){
 return(
 <View>

 

<TextInput
placeholder="enter name of user"
onChangeText={(searchTerm) => this.setState({searchTerm})}
value={this.state.searchTerm}
/>


  <Button
 title="Search User"
 onPress={this.Searchuser}
/>
 
    
			<FlatList
			data={this.state.userList}
			renderItem={({item})=>
			(
			<View>
				<Text>{item.given_name} {item.family_name}</Text>
				    <Button
						title="look at em"
						onPress={() => this.props.navigation.navigate('UserProfile', { SearchedUserId: item.user_id})}
					/>
			</View>
			)}
			keyExtractor={({id},index)=>id}
			/>	
 </View>
 
 );
 }
 
 Searchuser = () => {
	return fetch("http://10.0.2.2:3333/api/v0.0.5/search_user?q="+this.state.searchTerm)
	
		.then((response) => response.json())
			.then((responseJson) => {
				this.setState({
					userList:responseJson,
				});
			})
		.catch((error) => {
			console.error(error);
			Alert("incorrect login details");
		});
	}
	
	
	
}
export default SearchUserScreen;