import React, {useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';
import {style} from './style';
import DropDownPicker from 'react-native-dropdown-picker';

//@ts-ignore
import details_header_bg from '../../assets/images/details_header_bg.png';
import DrawerItem from '../../components/Drawer/CostumDrawer';
import {SocialDATA} from '../../components/Drawer/data';
import {isIOS} from '../../constants/size';
import {useNavigation} from '@react-navigation/native';

const Details = () => {
  let navigation = useNavigation();

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana', selected: true},
  ]);

  return (
    <View style={style.container}>
      <View style={style.header}>
        <View style={{backgroundColor: '#fff', height: isIOS ? 40 : 0}}></View>
        <ImageBackground
          source={details_header_bg}
          resizeMode="cover"
          style={style.introBG}>
          <View style={style.buttons}>
            {/* <DropDownPicker
              items={[
                {label: 'France', value: 'fr'},
                {label: 'Spain', value: 'es'},
              ]}
              // defaultNull
              placeholder="Ru"
              style={{
                backgroundColor: null,
                width: 118,
                height: 50,
                borderColor: '#fff',
              }}
              placeholderStyle={{fontWeight: 'bold', color: '#fff'}}
              // arrowStyle={{color: '#fff'}}
              // arrowSize={30}
              // labelStyle={{fontSize: 14, color: '#000'}}
              dropDownStyle={{backgroundColor: '#fff'}}
              zIndex={30}
              // defaultIndex={1}
              // multiple={true}
              // defaultValue="item2"
              // containerStyle={{height: 30, windth: 20}}
              // onChangeItem={changeCountry}
              // onChangeItem={item => console.log(item.label, item.value)}
            /> */}
            <DropDownPicker
              style={{
                backgroundColor: null,
                width: 118,
                height: 50,
                borderColor: '#fff',
              }}
              placeholderStyle={{fontWeight: 'bold', color: '#fff'}}
              labelStyle={{fontWeight: 'bold', color: '#fff'}}
              dropDownStyle={{
                backgroundColor: null,
                width: 118,
                height: 50,
                borderColor: '#fff',
              }}
              placeholder="RU"
              textStyle={{
                fontSize: 22,
              }}
              containerStyle={{
                backgroundColor: null,
                width: 118,
                height: 50,
                borderColor: '#fff',
                borderRadius: 10,
              }}
              defaultIndex={0}
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
              // onPress={(open) => console.log('was the picker open?', open)}
            />
            {/* @ts-ignore */}
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <Text style={style.exitBtn}>X</Text>
            </TouchableOpacity>
          </View>

          <View style={style.userDetails}>
            <TouchableOpacity>
              <View style={style.userIcon}></View>
            </TouchableOpacity>
            <Text style={style.userName}>Ройтман Рафаэль</Text>
          </View>
        </ImageBackground>
      </View>
      <View style={style.body}>
        <DrawerItem />
        <Image
          style={style.tinyLogo}
          source={require('../../assets/images/drawer_body_bg.png')}
        />
      </View>
      <View style={style.socialNetworks}>
        {SocialDATA.map((e, i) => {
          return (
            <TouchableOpacity>
              <View style={style.socialIcons}>{e.icon}</View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default Details;
