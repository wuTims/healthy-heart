import React, { Component } from 'react';

import { AppRegistry, Text, StyleSheet, View} from 'react-native';
import {Container, Content, Input, Icon, Button,Left, Right, Body, Header, Title, ListItem  } from 'native-base';
import FooterComponent from '../../../app/FooterComponent'; 

/**
* Question template for Week 3 Question 1
*
*/
export default class Week3Q1 extends Component {

  navigate(routeName) {
      this.props.navigator.push({
          name: routeName
      })
  }

  render(){
      return (
         <Container>

                 <Header>
                     <Left>
                        <Button transparent onPress={() => {this.navigate('Week3Content')}} >
                            <Icon name='ios-arrow-round-back'  />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Question 1 </Title>
                    </Body>
                    <Right />
                </Header>

                <Content>
                <View style={{flex: 1, flexDirection: 'column'}}> 
                  <View style={{ height: 500}}> 
                    <Text style={{ textAlign: 'center', fontSize: 20}}> Describe your system keep you on track with taking your medications at the right time and day.  </Text>
                   
                    <Input placeholder=" Answer"  style={{color: '#00c497', height: 200}} />
                  </View> 
                    
                  <View style={styles.buttonContainer} >
                   <Button rounded info onPress= {() => {this.props.navigator.pop()}}  ><Text style={{color: '#FFFFFF'}}>  Previous</Text></Button>
                    <Button rounded info onPress= {() => {this.navigate('Week3Q2')}}  ><Text style={{color: '#FFFFFF'}}> Next</Text></Button>
                  </View>
                </View> 
                    
                </Content>
    
            </Container>
      );
    }
}

const styles = StyleSheet.create({

  buttonContainer: {
    height: 50,
    flexDirection: 'row', 
    justifyContent: 'space-between', 
     marginBottom: 0,

   
  
  }
    
})
