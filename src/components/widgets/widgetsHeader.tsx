import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from '../../theme/colors';

const WidgetsHeader: React.FC = ({widget, navigate}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{widget.title}</Text>
      <Pressable onPress={() => navigate()}>
        <Text style={styles.seeall}>See All</Text>
      </Pressable>
    </View>
  );
};

export default WidgetsHeader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
    color: Colors.BLACK,
    fontWeight: 600,
  },
  seeall: {
    color: Colors.PRIMARY,
    fontSize: 20,
  },
});
