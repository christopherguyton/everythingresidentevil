import React, {Component} from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import {Card} from 'react-native-elements';
import {CONTENTS} from '../shared/content';


function RenderItem({item}) {
    if (item) {
        return(
            <Card
            featuredTitle={item.name}
            image={require('../assets/images/OriginalRE1.png')}>
            <Text
            style={{margin: 10}}>
            {item.description}
            </Text>
            </Card>
        );
    }
    return <View/>
}

class Home extends Component {

    constructor(props){
        super(props);
        this.state = {
            contents: CONTENTS,
            
        }
    }
    static navigationOptions = {
        title: 'Home'
    }

    render() {
        return(
      <ScrollView>
      <RenderItem
      item={this.state.contents[0]}
      onPress={()=> navigation.navigate.GameTitles()}/>
      <RenderItem
      item={this.state.contents[1]}/>
      <RenderItem
      item={this.state.contents[2]}/>
      <RenderItem
      item={this.state.contents[3]}/>
      </ScrollView>
        );
    }
}

export default Home;