import React, { Component } from 'react';
import { Text, Alert, View,Button,FlatList, ActivityIndicator, StyleSheet } from 'react-native';
class ProfileScreenRemake extends Component{
	
	
	 	constructor(props){
	super(props);
	this.state ={
		isLoading:true,
		userListData:[],
		userDetails:[],
		Followers:[],
		chit: ""
	}
}
	
	
	
	showFollowers = () => {
		return fetch("http://10.0.2.2:3333/api/v0.0.5/user/2/followers")
		
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
	
	
	getData(){
	return fetch('http://10.0.2.2:3333/api/v0.0.5/chits',
	{
	headers: {
			'Content-Type': 'application/json',
			'X-Authorization': key
			},
	})
	.then((response)=>response.json())
	.then((responseJson)=> {
		this.setState({
			isLoading:false,
			userListData:responseJson,
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
	 
	 	  if(this.state.isLoading){
		  return(
		  <View>
		  <ActivityIndicator/>
		  </View>
		  )
	  }
	 
	 
 return(
 
<View style = {styles.container}>

	<View style = {styles.headBar}>
		<View style = {styles.logoutButton}>
			<Button
				title="logout"
				onPress={this.Logout}	
			/>
		</View>
		<View style = {styles.postChitButton}>
			<Button
				title="Post Chit"
				onPress={() => this.props.navigation.navigate('PostChit')}	
			/>
		</View>
		<View style = {styles.searchUserButton}>
			<Button
				title="Search Users"
				onPress={() => this.props.navigation.navigate('SearchUser')}		
			/>
		</View>
	</View>



	<View style = {styles.centerContainer}>
    <View style = {styles.leftBar}>
			<View style = {styles.centerBox1}>
			<Button
					title="Current followers"
					onPress={this.showFollowers}
				/>
			</View>
			<View>
				<FlatList 
				data={this.state.Followers}
				renderItem={({item})=><Text style = {styles.listItem}>{item.given_name}</Text>}
				keyExtractor={({id},index)=>id}
			/>
			</View>
	</View>
	<View style = {styles.centerBar}>
			<View style = {styles.centerBox1}>
			<Text style = {styles.headerText}>Wall of chits</Text>
			</View>
			<View>
				<FlatList style = {styles.flatList}
				data={this.state.userListData}
				inverted={true}
				renderItem={({item})=><Text style = {styles.listItem}>{item.chit_content}</Text>}
				keyExtractor={({id},index)=>id}
				/>
			</View>
	</View>
	<View style = {styles.rightSideBar}>

	</View>
	
	</View>
</View>
 );
 }
 
 Logout = () => {
	return fetch("http://10.0.2.2:3333/api/v0.0.5/logout",
	{
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'X-Authorization': key
		},
	})
		.then((response) => {
			this.props.navigation.navigate('Home')
			Alert.alert("Logged Out");
		})

		.catch((error) => {
			console.error(error);
			Alert("incorrect Logout");
		});
	}
 
 
 	 
 
 
 
 
 
 
 
}


const styles = StyleSheet.create({
	listItem: {
		backgroundColor:'green',
		marginBottom: 1,
		textAlign:"center",
	},
	flatList: {
		
	},
	headerText: {
		textAlign: 'center',
		fontSize: 25,
		paddingTop: 10,
	},
	postChitButton: {
		width: 125,
		paddingTop:15,
	},
	searchUserButton: {
		width: 125,
		paddingTop:15,
	},
	logoutButton: {
		width: 125,
		paddingTop:15,
	},
	container: {
		flex: 1,
		backgroundColor:'blue',
	},
	headBar: {
		flex: .1,
		justifyContent: 'space-around',
		flexDirection: 'row-reverse',
		backgroundColor: 'green',
	},
	rightSideBar: {
		flex:0.6,
		flexDirection: 'row',
		backgroundColor: 'silver',
	},
	centerContainer: {
		flex:1,
		flexDirection: 'row',
		backgroundColor: 'red',
	},
	centerBar: {
		flex:1,
		flexDirection: 'column',
		backgroundColor: 'gray',
	},
	leftBar: {
		flex:0.6,
		flexDirection: 'column',
		backgroundColor: 'silver',
	},
	centerBox1: {
		flex:.1,
		flexDirection: 'column',
		backgroundColor: 'silver',
	},
	centerBox2: {
		flex:1,
		flexDirection: 'column',
		backgroundColor: 'silver',
	},
	leftSideBar: {
		flex:0.5,
		flexDirection: 'row',
		backgroundColor: 'silver',
	},
	leftBox1: {
		flex:.1,
		flexDirection: 'column',
		backgroundColor: 'purple',
	},
	leftBox2: {
		flex:1,
		flexDirection: 'column',
		backgroundColor: 'silver',
	},
})


export default ProfileScreenRemake;