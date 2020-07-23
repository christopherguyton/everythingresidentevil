import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Card} from 'react-native-elements';
import {GAMES} from '../shared/games';


function RenderGames({game}) {
    if (game) {
        return(
            <View>
            <Card
            featuredTitle={games.name}
            image={require('../assets/images/OriginalRE1.png')}
            >
            <Text style={{margin: 10}}>
            {games.description}
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
        title: 'Content Information'
    };

    render() {
        const gameId = this.props.navigation.getParam('gameId');
        const game = this.state.games.filter(game => game.id === gameId)[0];
        return <RenderGames game={games}/>;
    }
}

export default GameTitles;