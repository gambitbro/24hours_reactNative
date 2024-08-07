import React, {Component} from 'react';
import {
    Alert,
    Platform,
    Button, 
    StyleSheet,
    Text,
    TouchableHighlight,
    TouchableOpacity,
    TouchableNativeFeedback,
    TouchableWithoutFeedback, 
    View,
} from 'react-native';

export default class Touchables extends Component {
    _onPressButton() {
        Alert.alert('You tapped the button!');
    }

    _onLongPressButton() {
        Alert.alert('You long-pressed the button!');
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
                    <View style={styles.button}>
                        
                    </View>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 60,
        alignItems: 'center',
    },
    button: {
        marginBottom: 30,
        width: 260,
        alignItems: 'center',
        backgroundColor: '#2196F3',
    },
    buttonText: {
        textAlign: 'center',
        padding: 20,
        color: 'white',
    },
});