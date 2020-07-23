import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Card} from 'react-native-elements';
import {CONTENTS} from '../shared/content';
//import SelectedGames from './GameDirectoryComponent';

function RenderContent({content}) {
    if (content) {
        return(
            <View>
            <Card
            featuredTitle={content.name}
            image={require('../assets/images/OriginalRE1.png')}
            >
            <Text style={{margin: 10}}>
            {content.description}
            </Text>
            </Card>
            </View>
        )
    }

    return <View/>;
}


class ContentInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contents: CONTENTS
        };
    }
    static navigationOptions = {
        title: 'Content Information'
    };

    render() {
        const contentId = this.props.navigation.getParam('contentId');
        const content = this.state.contents.filter(content => content.id === contentId)[0];
        return <RenderContent content={content}/>;
    }
}

export default ContentInfo;