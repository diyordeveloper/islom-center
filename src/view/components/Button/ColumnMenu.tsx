import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  GestureResponderEvent,
  TouchableOpacity,
  Image,
} from 'react-native';
import {
  AcsasseblatyIcon,
  BoardIcon,
  CharterIcon,
  ComfortIcon,
  ControlIcon,
  CooperationIcon,
  DocumentIcon,
  DoorIcon,
  ImageIcon,
  InformationLibraryIcon,
  LocationMenuIcon,
  LoginMuseumIcon,
  MuseumIcon,
  MuseumRightArrow,
  PersonalIcon,
  TasksIcon,
  TimeIcon,
  TourIcon,
} from '../../assets/icons/icon';
import {colors} from '../../theme';

export interface ColumnMenuProps {
  container?: any;
  museumIcon?: any;
  doorIocn?: any;
  tasks?: any;
  charter?: any;
  control?: any;
  board?: any;
  fillColor?: any;
  internationalIcon?: any;
  exponate?: any;
  documnet?: any;
  cooperation?: any;
  personal?: any;
  menuNameText?: any;
  menuName?: any;
  timeWork?: any;
  loginMuseum?: any;
  location?: any;
  informationLibrary?: any;
  acsasblaty?: any;
  comfort?: any;

  onPress?: () => void;
  onPressMenu?: () => void;
}

export interface PressableColumnMenuProps extends React.ComponentProps<any> {
  onPress: ((event: GestureResponderEvent) => void) | undefined;
}

export let PressableColumnMenuProps = ({onPress}: PressableColumnMenuProps) => {
  return <TouchableOpacity onPress={onPress}></TouchableOpacity>;
};

export function ColumnMenu({
  container,
  museumIcon,
  doorIocn,
  tasks,
  charter,
  control,
  board,
  internationalIcon,
  exponate,
  documnet,
  cooperation,
  personal,
  timeWork,
  loginMuseum,
  location,
  informationLibrary,
  acsasblaty,
  comfort,
  menuNameText,
  menuName,
  fillColor,

  onPressMenu,
}: ColumnMenuProps) {
  let props = {
    container,
    museumIcon,
    doorIocn,
    tasks,
    charter,
    control,
    board,
    fillColor,
    internationalIcon,
    exponate,
    documnet,
    cooperation,
    personal,
    timeWork,
    loginMuseum,
    location,
    informationLibrary,
    acsasblaty,
    comfort,
    menuNameText,
    menuName,

    onPressMenu,
  };
  return (
    <TouchableOpacity style={style.shadow} onPress={onPressMenu}>
      <View style={style.container}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            width: 240,
            // borderWidth: 1,
            // borderColor: '#000',
          }}>
          {museumIcon && <MuseumIcon size={25} fillColor={fillColor} />}
          {doorIocn && <DoorIcon size={25} color={fillColor} />}
          {tasks && <TasksIcon size={25} fillColor={fillColor} />}
          {charter && <CharterIcon size={25} fillColor={fillColor} />}
          {control && <ControlIcon size={25} fillColor={fillColor} />}
          {board && <BoardIcon size={25} fillColor={fillColor} />}
          {internationalIcon && <TourIcon size={25} fillColor={fillColor} />}
          {exponate && <ImageIcon size={25} fillColor={fillColor} />}
          {documnet && <DocumentIcon size={25} fillColor={fillColor} />}
          {cooperation && <CooperationIcon size={25} fillColor={fillColor} />}
          {personal && <PersonalIcon size={25} fillColor={fillColor} />}
          {timeWork && <TimeIcon size={25} fillColor={fillColor} />}
          {loginMuseum && <LoginMuseumIcon size={25} fillColor={fillColor} />}
          {location && <LocationMenuIcon size={25} fillColor={fillColor} />}
          {informationLibrary && (
            <InformationLibraryIcon size={25} color={fillColor} />
          )}
          {acsasblaty && <AcsasseblatyIcon size={25} fillColor={fillColor} />}
          {comfort && <ComfortIcon size={25} fillColor={fillColor} />}
          {menuNameText && <Text style={style.menuNameText}>{menuName}</Text>}
        </View>
        <MuseumRightArrow size={25} />
      </View>
    </TouchableOpacity>
  );
}

export const style = StyleSheet.create({
  container: {
    height: 66,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },

  shadow: {
    marginVertical: 11,
    backgroundColor: colors.white,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4.19,
    elevation: 2,
  },

  menuNameText: {
    fontSize: 18,
    fontWeight: '700',
    paddingLeft: 25,
    color: colors.black,
  },
});
