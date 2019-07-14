import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

export default class Home extends Component{
	render() {
		return(
			<View
				style={{
					flex: 1,
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<Text>This is home</Text>
				<Button 
					title="go to detail" 
					onPress={ () => this.props.navigation.navigate('Detail') }
				/>
			</View>
		);
	}
}