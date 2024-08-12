import React from 'react';
import {View, Text, Image, ScrollView, TextInput} from 'react-native';

const App = () => {
    return (
        <ScrollView>
            <Text>example text</Text>
            <View>
                <Text>more text</Text>
                <Image
                    source={{
                        uri: 'https://reactnative.dev/docs/assets/p_cat.png',
                    }}
                    style={{
                        width: 200,
                        height: 200,
                    }}
                />
            </View>
            <TextInput
                style={{
                    height: 40,
                    borderColor: 'darkgreen',
                    borderWidth: 1,
                }}
                defaultValue="You can type in me"
            />
        </ScrollView>
    );
};

export default App;