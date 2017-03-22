import React, { Component } from 'react';
import { AppRegistry, Text, StyleSheet, View} from 'react-native';
import { Content, Title, ListItem, Right, Left, Radio, Icon, Body, Switch } from 'native-base';
import FooterComponent from '../app/FooterComponent'; 
import NavigatorComponent from '../app/NavigatorComponent'
import HeaderComponent from '../app/HeaderComponent';

export default class SettingScreen extends Component {
	render() {
		return (
      		<View style={{flex: 1}}>
				<HeaderComponent navigator={this.props.navigator} active=''/>
				<Content>
					<ListItem icon>
                        <Right>
                            <Icon name="arrow" />
                        </Right>
                        <Body>
                          <Text>Airplane Mode</Text>
                        </Body>
                        
                    </ListItem>
				</Content>
				<FooterComponent activeTab='tabFour' navigator={this.props.navigator}/>
			</View>
		);
	}
}


const styles = StyleSheet.create({
  testStyle: {
    textAlign: 'center',
  }
})
