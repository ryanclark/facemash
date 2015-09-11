'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TabBarIOS,
  StatusBarIOS
} = React;

var FaceMashTab = require('./tabs/FaceMash');

var facemash = React.createClass({
  getInitialState() {
    return {
      selectedTab: 'faceMash'
    }
  },
  changeTab(tabName) {
    this.setState({
      selectedTab: tabName
    });
  },
  render: function() {
    return (
      <TabBarIOS>
        <TabBarIOS.Item
          title="FaceMash"
          icon={ require('image!facemash') }
          onPress={ () => this.changeTab('faceMash') }
          selected={ this.state.selectedTab === 'faceMash' }>
          <FaceMashTab />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="Messages"
          icon={ require('image!messages') }
          onPress={ () => this.changeTab('messages') }
          selected={ this.state.selectedTab === 'messages' }>
          <View style={ styles.pageView }>
            <Text>Messages</Text>
          </View>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="Settings"
          icon={ require('image!settings') }
          onPress={ () => this.changeTab('settings') }
          selected={ this.state.selectedTab === 'settings' }>
          <View style={ styles.pageView }>
            <Text>Settings</Text>
          </View>
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
});

var styles = StyleSheet.create({
  pageView: {
    backgroundColor: '#fff',
    flex: 1
  }
});

AppRegistry.registerComponent('facemash', () => facemash);
