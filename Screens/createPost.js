import { Component } from "react";
import {Text,View} from 'react-native';

export default class createPost extends Component {
    render() {
        return (
            <View
                style={{
                    flex:1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <Text>Create Post</Text>
            </View>
        )
    }
}