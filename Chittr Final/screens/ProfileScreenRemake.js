import React, { Component } from 'react';
import { Text, View,Button, StyleSheet } from 'react-native';
class ProfileScreenRemake extends Component{
 render(){
 return(
 
<View style = {styles.container}>

	<View style = {styles.headBar}>

	</View>

	<View style = {styles.centerBar}>

	</View>
	<View style = {styles.sideBar}>

	</View>


</View>
 );
 }
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor:'blue',
	},
	headBar: {
		flex: .1,
		flexDirection: 'column',
		backgroundColor: 'green',
	},
	centerBar: {
		flex:1,
		flexDirection: 'row',
		backgroundColor: 'red',
	},
	sideBar: {
		flex:1,
		flexDirection: 'row',
		backgroundColor: 'yellow',
	}

})


export default ProfileScreenRemake;