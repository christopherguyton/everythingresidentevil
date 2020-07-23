import React, {Component} from 'react';
import {FlatList} from 'react-native';
import {ListItem} from 'react-native-elements';
import { CONTENTS } from '../shared/content';

class Directory extends Component {

    constructor(props) {
        super(props);
        this.state = {
            contents: CONTENTS
        };
    }

    static navigationOptions = {
        title: 'Directory'
    };

    render() {
        const { navigate } = this.props.navigation;
        const renderDirectoryItem = ({item}) => {
            return (
                <ListItem
                    title={item.name}
                    subtitle={item.description}
                    onPress={() => navigate('ContentInfo', { contentId: item.id })}
                    leftAvatar={{ source: require('../assets/images/OriginalRE1.png')}}
                />
            );
        };

        return (
            <FlatList
                data={this.state.contents}
                renderItem={renderDirectoryItem}
                keyExtractor={item => item.id.toString()}
            />
        );
    }
}

export default Directory;