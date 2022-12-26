import {Text, View, TouchableOpacity, FlatList, ScrollView} from 'react-native';
import React from 'react';
import {style} from './style';
import {MuseumDATA} from './data';
import {isIOS, windowHeight, windowWidth} from '../../constants/size';
import {colors} from '../../theme';
import {AppHeader} from '../../components/Other/AppBar';
import {Routes} from '../../../navigation/routes/routes';
import {ColumnMenu} from '../../components/Button/ColumnMenu';
import {useNavigation} from '@react-navigation/native';

const Museum = () => {
  let navigation = useNavigation();

  return (
    <View style={style.container}>
      <View style={{backgroundColor: '#fff', height: isIOS ? 40 : 10}}></View>
      <AppHeader
        containerStyle={style.containerStyle}
        logoIcon={true}
        notificatAndDetailsIcons={true}
        notificationColor={colors.black}
        detailsColor={colors.black}
        detailsIcon={true}
        //@ts-ignore
        onPressDetailsIcon={() =>
          //@ts-ignore
          navigation.openDrawer()
        }
        onPressNotification={() =>
          //@ts-ignore
          navigation.navigate(Routes.NotificationsStack)
        }
        headingText={true}
        headingTitle="Музей"
        headingTextStyle={style.titleStyle}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            width: windowWidth / 1,
            // height: windowHeight / 1,
            paddingHorizontal: 20,
            paddingBottom: 100,
          }}>
          <ColumnMenu
            //@ts-ignore
            onPressMenu={() => navigation.navigate(Routes.AboutMuseum)}
            museumIcon={true}
            fillColor={colors.green}
            menuNameText={true}
            menuName="О музее"
          />
          <ColumnMenu
            //@ts-ignore
            onPressMenu={() => navigation.navigate(Routes.Exhibits)}
            exponate={true}
            fillColor={colors.green}
            menuNameText={true}
            menuName="Экспонаты"
          />
          <ColumnMenu
            //@ts-ignore
            onPressMenu={() => navigation.navigate(Routes.Departments)}
            doorIocn={true}
            fillColor={colors.green}
            menuNameText={true}
            menuName="Музейные отделы"
          />

          <ColumnMenu
            //@ts-ignore
            onPressMenu={() => navigation.navigate(Routes.DocumentsMuseum)}
            documnet={true}
            fillColor={colors.green}
            menuNameText={true}
            menuName="Документы"
          />
          <ColumnMenu
            //@ts-ignore
            onPressMenu={() => navigation.navigate(Routes.Cooperation)}
            cooperation={true}
            fillColor={colors.green}
            menuNameText={true}
            menuName="Сотрудничество"
          />
          {/* <ColumnMenu
            // onPressMenu={() => navigation.navigate('Details')}
            internationalIcon={true}
            fillColor={colors.green}
            menuNameText={true}
            menuName="Международные выставки"
          /> */}
          <ColumnMenu
            //@ts-ignore
            onPressMenu={() => navigation.navigate(Routes.Personal)}
            personal={true}
            fillColor={colors.green}
            menuNameText={true}
            menuName="Сотрудники музея"
          />
          <ColumnMenu
            //@ts-ignore
            onPressMenu={() => navigation.navigate(Routes.TimeWork)}
            timeWork={true}
            fillColor={colors.green}
            menuNameText={true}
            menuName="Часы работы"
          />
          <ColumnMenu
            //@ts-ignore
            onPressMenu={() => navigation.navigate(Routes.IntroMuseum)}
            loginMuseum={true}
            fillColor={colors.green}
            menuNameText={true}
            menuName="Вход в музей"
          />
          <ColumnMenu
            //@ts-ignore
            onPressMenu={() => navigation.navigate(Routes.LocationMuseum)}
            location={true}
            fillColor={colors.green}
            menuNameText={true}
            menuName="Как добраться"
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Museum;
