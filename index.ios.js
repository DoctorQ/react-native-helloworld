/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} = React;

var HelloWorld = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Hello!Doctorq
        </Text>
            <Image style={styles.pic} source={{uri:'http://c.hiphotos.baidu.com/baike/c0%3Dbaike180%2C5%2C5%2C180%2C60/sign=e91338fe3a12b31bd361c57be7715d1f/622762d0f703918f3a729973523d269758eec4ec.jpg'}}></Image>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  pic:{
    width:100,
    height:100,
  }
});

AppRegistry.registerComponent('HelloWorld', () => HelloWorld);
