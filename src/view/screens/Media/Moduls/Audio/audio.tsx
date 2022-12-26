import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {windowWidth} from '../../../../constants/size';
import {colors} from '../../../../theme';
import { useAllApiContext } from '../../../../../context/allapi/AllApiContext';
import { useLangContext } from '../../../../../context/lang/LangContext';
import { TypeAllApiState } from '../../../../../context/allapi/TypeAllApi';
import { TypeLangState } from '../../../../../context/lang/TypeLang';

const Audio = () => {
  const {mediaAudios} = useAllApiContext() as TypeAllApiState;
  const {language} = useLangContext() as TypeLangState;
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{marginBottom: 80, marginTop: 10}}>
          <View style={styles.box}>
            <TouchableOpacity>
              <Image
                style={styles.playImage}
                source={require('../../../../assets/images/play.png')}
              />
            </TouchableOpacity>
            <View style={{marginHorizontal: 10}}>
              <Image
                style={styles.lineImage}
                source={require('../../../../assets/images/Line2.png')}
              />
              <View style={styles.textBox}>
                <Text style={styles.number}>00:00</Text>
                <Text style={styles.number}>01:23:20</Text>
              </View>
            </View>
          </View>
          <Text style={styles.text}>Lorem impsum</Text>
          <View style={styles.box}>
            <TouchableOpacity>
              <Image
                style={styles.playImage}
                source={require('../../../../assets/images/play.png')}
              />
            </TouchableOpacity>
            <View style={{marginHorizontal: 10}}>
              <Image
                style={styles.lineImage}
                source={require('../../../../assets/images/Line2.png')}
              />
              <View style={styles.textBox}>
                <Text style={styles.number}>00:00</Text>
                <Text style={styles.number}>01:23:20</Text>
              </View>
            </View>
          </View>
          <Text style={styles.text}>Lorem impsum</Text>
          <View style={styles.box}>
            <TouchableOpacity>
              <Image
                style={styles.playImage}
                source={require('../../../../assets/images/play.png')}
              />
            </TouchableOpacity>
            <View style={{marginHorizontal: 10}}>
              <Image
                style={styles.lineImage}
                source={require('../../../../assets/images/Line2.png')}
              />
              <View style={styles.textBox}>
                <Text style={styles.number}>00:00</Text>
                <Text style={styles.number}>01:23:20</Text>
              </View>
            </View>
          </View>
          <Text style={styles.text}>Lorem impsum</Text>
          <View style={styles.box}>
            <TouchableOpacity>
              <Image
                style={styles.playImage}
                source={require('../../../../assets/images/play.png')}
              />
            </TouchableOpacity>
            <View style={{marginHorizontal: 10}}>
              <Image
                style={styles.lineImage}
                source={require('../../../../assets/images/Line2.png')}
              />
              <View style={styles.textBox}>
                <Text style={styles.number}>00:00</Text>
                <Text style={styles.number}>01:23:20</Text>
              </View>
            </View>
          </View>
          <Text style={styles.text}>Lorem impsum</Text>
          <View style={styles.box}>
            <TouchableOpacity>
              <Image
                style={styles.playImage}
                source={require('../../../../assets/images/play.png')}
              />
            </TouchableOpacity>
            <View style={{marginHorizontal: 10}}>
              <Image
                style={styles.lineImage}
                source={require('../../../../assets/images/Line2.png')}
              />
              <View style={styles.textBox}>
                <Text style={styles.number}>00:00</Text>
                <Text style={styles.number}>01:23:20</Text>
              </View>
            </View>
          </View>
          <Text style={styles.text}>Lorem impsum</Text>
          <View style={styles.box}>
            <TouchableOpacity>
              <Image
                style={styles.playImage}
                source={require('../../../../assets/images/play.png')}
              />
            </TouchableOpacity>
            <View style={{marginHorizontal: 10}}>
              <Image
                style={styles.lineImage}
                source={require('../../../../assets/images/Line2.png')}
              />
              <View style={styles.textBox}>
                <Text style={styles.number}>00:00</Text>
                <Text style={styles.number}>01:23:20</Text>
              </View>
            </View>
          </View>
          <Text style={styles.text}>Lorem impsum</Text>
          <View style={styles.box}>
            <TouchableOpacity>
              <Image
                style={styles.playImage}
                source={require('../../../../assets/images/play.png')}
              />
            </TouchableOpacity>
            <View style={{marginHorizontal: 10}}>
              <Image
                style={styles.lineImage}
                source={require('../../../../assets/images/Line2.png')}
              />
              <View style={styles.textBox}>
                <Text style={styles.number}>00:00</Text>
                <Text style={styles.number}>01:23:20</Text>
              </View>
            </View>
          </View>
          <Text style={styles.text}>Lorem impsum</Text>
          <View style={styles.box}>
            <TouchableOpacity>
              <Image
                style={styles.playImage}
                source={require('../../../../assets/images/play.png')}
              />
            </TouchableOpacity>
            <View style={{marginHorizontal: 10}}>
              <Image
                style={styles.lineImage}
                source={require('../../../../assets/images/Line2.png')}
              />
              <View style={styles.textBox}>
                <Text style={styles.number}>00:00</Text>
                <Text style={styles.number}>01:23:20</Text>
              </View>
            </View>
          </View>
          <Text style={styles.text}>Lorem impsum</Text>
          <View style={styles.box}>
            <TouchableOpacity>
              <Image
                style={styles.playImage}
                source={require('../../../../assets/images/play.png')}
              />
            </TouchableOpacity>
            <View style={{marginHorizontal: 10}}>
              <Image
                style={styles.lineImage}
                source={require('../../../../assets/images/Line2.png')}
              />
              <View style={styles.textBox}>
                <Text style={styles.number}>00:00</Text>
                <Text style={styles.number}>01:23:20</Text>
              </View>
            </View>
          </View>
          <Text style={styles.text}>Lorem impsum</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Audio;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  box: {
    height: 70,
    borderRadius: 5,
    marginVertical: 15,
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 30,
    paddingHorizontal: 15,
    width: windowWidth - 60,
    backgroundColor: '#EFF8F3',
  },
  text: {
    fontSize: 16,
    marginHorizontal: 30,
  },
  playImage: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  lineImage: {
    width: windowWidth / 1.9,
    borderRadius: 10,
  },
  textBox: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  number: {
    fontSize: 10,
    marginVertical: 5,
  },
});
