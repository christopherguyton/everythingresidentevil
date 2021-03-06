import React, {Component} from 'react';
import Home from './HomeComponent';
import Directory from './DirectoryComponent';
import ContentInfo from './ContentInfoComponent';
import GameTitles from './GameTitlesComponent';
import GamesDirectory from './GameDirectoryComponent';
import {View, Platform} from 'react-native';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';


const DirectoryNavigator = createStackNavigator(
    {
        Directory: {screen: Directory},
        ContentInfo: {screen: ContentInfo}
    },
    {
        initialRouteName: 'Directory',
        navigationOptions: {
            headerStyle: {
                backgroundColor: 'black',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }
    }
);

const HomeNavigator = createStackNavigator(
    {
        Home: {screen: Home}
    },
    {
        navigationOptions: {
            headerStyle: {
                backgroundColor: 'black',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }
    }
);

const GameScreenNavigator = createStackNavigator(
    {
        Games: {screen: GamesDirectory},
        Titles: {screen: GameTitles}
    },
    {
        navigationOptions: {
            headerStyle: {
                backgroundColor: 'black',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }
    }
);

const MainNavigator = createDrawerNavigator(
    {
        Home: { screen: HomeNavigator },
        Directory: { screen: DirectoryNavigator },
        Games: { screen: GameScreenNavigator }
    },
    {
        drawerBackgroundColor: '#CEC8FF'
    }
);

class Main extends Component {
    render() {
        return (
            <View style={{flex: 1, paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight }}>
                <MainNavigator />
            </View>
        );
    }
}

export default Main;