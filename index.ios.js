var React = require('react-native');
var {AppRegistry, ScrollView, TouchableHighlight, Text } = React;

var TouchDemo = React.createClass({
  render: function() {
    return (
      <ScrollView>
        <TouchableHighlight onPress={() => console.log('pressed')}>
            <Text>Testerhome</Text>
        </TouchableHighlight>
      </ScrollView>
    );
  },
});

AppRegistry.registerComponent('HelloWorld', () => TouchDemo);
