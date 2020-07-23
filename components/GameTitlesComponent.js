import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Card} from 'react-native-elements';
import {GAMES} from '../shared/games';


function RenderGames({item}) {
    if (item) {
        return(
            <View>
            <Card
            featuredTitle={item.name}
            image={require('../assets/images/OriginalRE1.png')}
            >
            <Text style={{margin: 10}}>
            {item.description}
            </Text>
            </Card>
            </View>
        )
    }

    return <View/>;
}


class GameTitles extends Component {
    constructor(props) {
        super(props);
        this.state = {
            games: GAMES
        };
    }
    static navigationOptions = {
        title: 'Main Line Series'
    };

    render() {
        return( 
            <RenderGames item={this.state.games[0]}/>
            );
    }
}

export default GameTitles;