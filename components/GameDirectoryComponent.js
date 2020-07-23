import React from 'react';
import {FlatList} from 'react-native';
import {ListItem} from 'react-native-elements';

function GamesDirectory(props) {
    const renderGameItem = ({item}) => {
        return(
        <ListItem
        title={item.name}
        subtitle={item.description}
        leftAvatar={{source: require('../assets/images/OriginalRE1.png')}}
        onPress={() => props.onPress(item.id)}
        />
        );
    };

    return(
        <FlatList
        data={props.games}
        renderItem={renderGameItem}
        keyExtractor={item => item.id.toString()}
        />
    );
}

export default GamesDirectory;