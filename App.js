import React from 'react';
import { StyleSheet, Text, View , Image } from 'react-native';
import Card from 'react-native-swiping-cards';


const cars = [
    "http://durcidesign.com/wp-content/uploads/2015/02/BASE.jpg",
    "https://steemitimages.com/DQmUc6kgNx2KCnV1FknVd1rgdP32pGCLDCway93qtvgyXuX/bmw-e46-m3-alpine-white.jpg",
    "https://images.honestjohn.co.uk/imagecache/file/width/640/media/11545575/bmw-3-series-e46-2.jpg",
    "http://d39jj55bl6wreq.cloudfront.net/image-thumb?w=534&h=345&p=/files/lot-images/SA-0006987/15.jpg",
];



const CarsCard = (props)=>{
    return(
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
            <View  style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Image
                    style={{width: 300, height: 300}}
                    source={{uri: props.car}}
                />
            </View>
        </Card>
    );
}

export default class App extends React.Component {
    constructor(){
        super();
        this.state =  {
            car: "http://durcidesign.com/wp-content/uploads/2015/02/BASE.jpg",
        }
        this.randomChoice = this.randomChoice.bind(this);
    }
    randomChoice(){
        let rand = Math.floor(Math.random()*4)+1;
        this.setState({
            car: cars[rand]
        });
    }
  render() {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor: "white"}}>
            <CarsCard car={this.state.car}/>
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
