import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

export default class Detail extends Component{
	render() {
		return(
			<View
				style={{
					flex: 1,
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<Text>This is Detail</Text>
				<Button 
					title="go to home" 
					onPress={ () => this.props.navigation.goBack() }
				/>
			</View>
		);
	}
}