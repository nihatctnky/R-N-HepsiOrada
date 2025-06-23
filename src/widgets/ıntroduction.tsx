import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {height, width} from '../utils/constants';
import {Colors} from '../theme/colors';

const Introduction: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.boxContainer}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontSize: 33, color: Colors.WHITE, fontWeight: '800'}}>
            Clearance Sales
          </Text>
          <View style={{backgroundColor:Colors.WHITE,marginTop:9,padding:12,paddingHorizontal:40, borderRadius:100,}}>
            <Text style={{color:Colors.PRIMARY}}>
              % Up to %50
            </Text>
          </View>
        </View>
        <View style={{flex: 1,alignItems:"flex-end"}}>
          <Image
            source={require('../assets/images/intro.png')}
            style={styles.images}
          />
        </View>
      </View>
    </View>
  );
};

export default Introduction;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: height / 4,
  },
  boxContainer: {
    width: width * 0.95,
    height: height * 0.20,
    backgroundColor: Colors.PRIMARY,
    borderRadius: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
  },
  images: {
    width: width * 0.39,
    height: height * 0.20,
    backgroundColor: Colors.PRIMARY,
    position: 'absolute',
    resizeMode: 'contain',
  },
});
