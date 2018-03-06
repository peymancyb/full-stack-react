import React from 'react';
import { StyleSheet, Text, View , Image } from 'react-native';
import Card from 'react-native-swiping-cards';


export default class App extends React.Component {
  render() {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor: "black"}}>
            <Card
                onSwipeRight={() => true}
                onSwipeLeft={() => true}
                onSwipeCenter={() => true}
                onRelease={() => true}
                onRightAnimationEnd={() => true}
                onLeftAnimationEnd={() => true}
                onCenterAnimationEnd={() => true}
                onReleaseAnimationEnd={() => true}
            >
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <Image source={{uri: "https://source.unsplash.com/random"}} />
                </View>
            </Card>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
