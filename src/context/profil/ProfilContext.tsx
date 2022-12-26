import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  ReactNode,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {TypeProfil, TypeProfilState} from './TypeProfil';
import axios from 'axios';
import {
  API_URL,
  API_URL_CHECK_USER,
  API_URL_USER,
  code_url,
  code_url_2,
  phone_url,
  phone_url_2,
  Token,
  type,
} from './Url';
import {useAuthContext} from '../auth/AuthContext';
import {TypeAuthState} from '../auth/TypeAuth';
import Toast from 'react-native-toast-message';
export const ProfilCreateContext = createContext<TypeProfil | null>(null);
import RNRestart from 'react-native-restart';
export const useProfilContext = () => {
  return useContext(ProfilCreateContext);
};

export const ProfilContext = ({children}: {children: ReactNode}) => {
  const [myPhone, setMyPhone] = useState<TypeProfilState | any>([]);
  const [user, setUser] = useState<TypeProfilState | any>([]);
  //
  const [name, setName] = useState<TypeProfilState | any>('');
  const [surName, setSurName] = useState<TypeProfilState | any>('');
  const [phoneEditNumber, setPhoneEditNumber] = useState<TypeProfilState | any>(
    '998',
  );
  const phone: any = phoneEditNumber.replace(/\D/gi, '');
  const [userBoolean, setUserBoolean] = useState<TypeProfilState | any>({
    editName: false,
    editLastName: false,
    editPhone: false,
    submitEditPhone: false,
    takeCode: false,
  });
  const [submitDisable, setSubmitDisable] = useState<TypeProfilState | any>({
    updateUsersBtn: false,
    zaprositCodeBtn: false,
    updatePhoneBtn: false,
  });
  const [visibleSendCode, setVisibleSendCode] = useState(false);
  const [visibleWarning, setVisibleWarning] = useState(false);
  const [reloadDisable, setReloadDisable] = useState<TypeProfilState | any>(
    true,
  );
  // Number Update
  const [checkCode, setCheckCode] = useState<TypeProfilState | any>(Number);
  const [code, setCode] = useState<TypeProfilState | any>(Number);
  // Timer
  const time = 90;
  const getPadTime = (time: any) => time.toString().padStart(2, '0');
  const [timeLeft, setTimeLeft] = useState<TypeProfilState | any>(time);
  const [isCounting, setIsCounting] = useState<TypeProfilState | any>(false);
  const [timeOff, setTimeOff] = useState<TypeProfilState | any>(false);
  const minutes = getPadTime(Math.floor(timeLeft / 60));
  const seconds = getPadTime(timeLeft - minutes * 60);
  useEffect(() => {
    const interval = setInterval(() => {
      isCounting && setTimeLeft(timeLeft >= 1 ? timeLeft - 1 : 0);
    }, 1000);
    if (timeLeft === 0) {
      setIsCounting(false);
      setCheckCode('');
      setReloadDisable(true);
    }
    return () => {
      clearInterval(interval);
    };
  }, [timeLeft, isCounting]);
  // Token-------------------------------------
  const getUsers = async () => {
    try {
      await axios
        .get(`${API_URL_USER}${JSON.parse(myPhone)}`)
        .then(res => {
          const data = res.data[0];
          console.log('response: ', data);
          setUser(data);
          setName(data?.name);
          setSurName(data?.surname);
          setPhoneEditNumber(data?.phone);
        })
        .catch(err => {
          console.log(`Ishlamayabdi APi ---- ${err}`);
        });
    } catch (error) {
      console.log('error/getUser..');
    }
  };
  useEffect(() => {
    (async () => {
      const myToken = await AsyncStorage.getItem('token');
      console.log('Number----------------------');
      console.log(myToken);
      console.log('Number----------------------');
      // @ts-ignore
      setMyPhone(myToken);
      await getUsers();
    })();
  }, [myPhone]);
  const UpdateUsers = async () => {
    setSubmitDisable({...submitDisable, updateUsersBtn: true});
    try {
      if (name !== '' && surName !== '') {
        await axios
          .post(API_URL, {
            table: 'users',
            type: 'insertby',
            data: {
              name: name,
              surname: surName,
            },
            where: {
              phone: JSON.parse(myPhone),
            },
          })
          .then(res => {
            Toast.show({
              type: 'success',
              text1: 'Profil Update',
              text2: "Muvaffaqqiyatli o'zgartirildi ! )",
              visibilityTime: 4000,
              autoHide: true,
              topOffset: 10,
            });
            console.log(
              // @ts-ignore
              `Qoshildi Success..... ${JSON.stringify(res.data)}`,
            );
            console.log('++++++++++++++++');
            console.log(`${name} - ${surName}`);
            setUser({
              ...user,
              name: name,
              surname: surName,
            });
            console.log('++++++++++++++++');
            setSubmitDisable({...submitDisable, updateUsersBtn: false});
            // @ts-ignore
          })
          .catch(err => {
            console.log(`${err}/NoUpdate.. Internet ishlamayabdi...`);
          });
        setUserBoolean({
          ...userBoolean,
          editName: false,
          editLastName: false,
          editPhone: false,
          submitEditPhone: false,
          takeCode: false,
        });
        setSubmitDisable({...submitDisable, updateUsersBtn: false});
      } else {
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2: "Maydonni to'ldiring",
          visibilityTime: 4000,
          autoHide: true,
          topOffset: 10,
        });
        setSubmitDisable({...submitDisable, updateUsersBtn: false});
      }
    } catch (error) {
      console.log('error/NoUpdate.. Internet ishlamayabdi...');
    }
  };
  async function PhoneNumberEdit() {
    setSubmitDisable({...submitDisable, zaprositCodeBtn: true});
    console.log(`Sening raqaming ${phone}`);
    const UrlPhoneNumber = `${API_URL}${phone_url}${phone}${phone_url_2}${Token}`;
    await axios.get(`${API_URL_CHECK_USER}${phone}`).then(responsive => {
      const userPhoneCheck = responsive.data;
      console.log(` Bu telefon raqam   ${userPhoneCheck}`);
      if (userPhoneCheck !== 'Success') {
        if (phoneEditNumber.length >= 18 && JSON.parse(myPhone) !== phone) {
          axios
            .get(UrlPhoneNumber)
            .then(res => {
              console.log(
                ' _________-____-________' +
                  res.data +
                  ' _________-____-________',
              );
              setCheckCode(res.data);
              console.log(`checkCode - ${checkCode}`);

              setUserBoolean({
                ...userBoolean,
                submitEditPhone: !userBoolean.submitEditPhone,
                takeCode: !userBoolean.takeCode,
              });
              setSubmitDisable({...submitDisable, zaprositCodeBtn: false});
            })
            .catch(err => {
              console.log('------Error___Phone-----' + err);
            });
          setVisibleSendCode(true);
          setIsCounting(true);
          setReloadDisable(true);
        } else {
          Toast.show({
            type: 'info',
            text1: 'Info',
            text2: 'Xatolik yuz berdi raqamni tekshiring !',
            visibilityTime: 4000,
            autoHide: true,
            topOffset: 10,
          });
        }
      } else {
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2: "Bu raqam ro'yxatdan o'tilgan !",
          visibilityTime: 5000,
          autoHide: true,
          topOffset: 10,
        });
      }
    });

    setSubmitDisable({...submitDisable, zaprositCodeBtn: false});
  }
  async function CodeEditSubmit() {
    setSubmitDisable({...submitDisable, updatePhoneBtn: true});
    console.log('codeeeeeeeeeeeeeeeee', code + 'checkCode', checkCode);
    const UrlCode = `${API_URL}${code_url}${phone}${code_url_2}${code}${type}`;
    if (checkCode == code && code.length === 4) {
      await axios
        .get(UrlCode)
        .then(res => {
          const data = res.data[0];
          console.log('---++++++-----++++++-----');
          console.log('---++++++-----++++++-----');
          console.log(data);
          console.log('---++++++-----++++++-----');
          console.log('---++++++-----++++++-----');

          axios
            .post(API_URL, {
              table: 'users',
              type: 'insertby',
              data: {
                phone: phone,
              },
              where: {
                phone: JSON.parse(myPhone),
              },
            })
            .then(res => {
              Toast.show({
                type: 'success',
                text1: 'Phone Update',
                text2: "Muvaffaqqiyatli o'zgartirildi ! )",
                visibilityTime: 4000,
                autoHide: true,
                topOffset: 10,
              });
              console.log(
                // @ts-ignore
                `Qoshildi Success..... ${JSON.stringify(res.data)}`,
              );
              console.log('++++++++++++++++');
              console.log(`${phone}  `);
              setUser({
                ...user,
                phone: phone,
              });
              // setUser({...data, data: data});
              // setName({...name, name: data?.name});
              // setSurName({...surName, surName: data?.surname});
              console.log('++++++++++++++++');
              AsyncStorage.setItem('token', phone);
              setSubmitDisable({...submitDisable, updatePhoneBtn: false});
              setUserBoolean({
                ...userBoolean,
                editName: false,
                editLastName: false,
                editPhone: false,
                submitEditPhone: false,
                takeCode: false,
              });
              // @ts-ignore
              RNRestart.Restart();
            })
            .catch(err => {
              console.log(`${err}/NoUpdate.. Internet ishlamayabdi...`);
            });
        })
        .catch(err => console.log('------Error___Code-----' + err));

      // setCodeDisabled(false);
      setTimeLeft(time);
      setIsCounting(false);
      setVisibleWarning(false);
      setVisibleSendCode(false);
      setReloadDisable(true);
      setCheckCode('');
      setCode('');
      setUserBoolean({
        ...userBoolean,
        takeCode: false,
      });
    } else {
      // setCodeDisabled(false);
      setTimeLeft(time);
      setReloadDisable(true);
      setVisibleWarning(true);
      setVisibleSendCode(false);
      setCheckCode('');
    }
    // setCodeDisabled(false);
    setSubmitDisable({...submitDisable, updatePhoneBtn: false});
  }
  let onPressRequestCode = async () => {
    const UrlPhoneNumber = `${API_URL}${phone_url}${phone}${phone_url_2}${Token}`;
    await axios
      .get(UrlPhoneNumber)
      .then(res => {
        setCheckCode(res.data);
        console.log(
          '_________-____-________ ' + res.data + ' _________-____-________',
        );
      })
      .catch(err => console.log('------Error___Code-----' + err));
    setReloadDisable(false);
    if (timeLeft === 0) {
      setTimeLeft(time);
    } else {
      setTimeLeft(time);
    }
    setIsCounting(true);
    setVisibleSendCode(true);
    setVisibleWarning(false);
    setCode('');
    console.log(code, checkCode);
  };
  useEffect(() => {
    if (timeLeft === 0) {
      setCheckCode('');
      console.log('ChechCode tozalandi ' + checkCode);

      const interval = setInterval(() => {
        setTimeOff(!timeOff);
      }, 700);
      return () => {
        clearInterval(interval);
      };
    } else {
      setTimeOff(false);
    }
  }, [timeLeft, timeOff]);
  function ClearUser() {
    // @ts-ignore
    setUser([]);
  }
  // Update Buttons Functions ---------
  function IphoneNumberTogglePen() {
    if (userBoolean.editPhone == false) {
      // @ts-ignore
      setUserBoolean({
        ...userBoolean,
        editPhone: !userBoolean.editPhone,
        submitEditPhone: !userBoolean.submitEditPhone,
      });
      console.log('ochildi');
      console.log('ochildi');
      console.log('ochildi');
    } else {
      console.log('tozalandi');
      console.log('tozalandi');
      console.log('tozalandi');

      setUserBoolean({
        ...userBoolean,
        editName: false,
        editLastName: false,
        editPhone: false,
        submitEditPhone: false,
        takeCode: false,
      });
      setCode('');
      setCheckCode('');
      setVisibleWarning(false);
      setIsCounting(false);
      setTimeLeft(time);
      setPhoneEditNumber(myPhone);
    }
  }
  function NameTogglePen() {
    if (userBoolean.editName == false) {
      setUserBoolean({
        ...userBoolean,
        editName: !userBoolean.editName,
      });
      console.log(`EditName Ochildi...`);
    } else {
      // @ts-ignore
      setUserBoolean({
        ...userBoolean,
        editName: !userBoolean.editName,
      });
      console.log(`Yopildi...`);
      setName(user?.name);
    }
  }
  function UserNameTogglePen() {
    if (userBoolean.editLastName == false) {
      // @ts-ignore
      setUserBoolean({
        ...userBoolean,
        editLastName: !userBoolean.editLastName,
      });
      console.log(`UserNameEdit Ochildi...`);
    } else {
      // @ts-ignore
      // @ts-ignore
      setUserBoolean({
        ...userBoolean,
        editLastName: !userBoolean.editLastName,
      });
      console.log(`Yopildi...`);
      setSurName(user?.surname);
    }
  }
  return (
    <ProfilCreateContext.Provider
      value={{
        setUser,
        user,
        userBoolean,
        submitDisable,
        setUserBoolean,
        UpdateUsers,
        ClearUser,
        name,
        surName,
        setName,
        setSurName,
        visibleWarning,
        setVisibleWarning,
        visibleSendCode,
        setVisibleSendCode,
        reloadDisable,
        IphoneNumberTogglePen,
        //
        timeOff,
        minutes,
        seconds,
        //
        PhoneNumberEdit,
        CodeEditSubmit,
        code,
        setCode,
        phoneEditNumber,
        setPhoneEditNumber,
        onPressRequestCode,
        NameTogglePen,
        UserNameTogglePen,
      }}>
      {children}
    </ProfilCreateContext.Provider>
  );
};
