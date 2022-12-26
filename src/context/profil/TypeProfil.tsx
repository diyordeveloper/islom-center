export interface TypeProfilState {
  user: any;
  userBoolean: any;
  submitDisable: any;
  name: any;
  surName: any;
  phoneEditNumber: any;
  visibleWarning: any;
  visibleSendCode: any;
  code: any;
  setCode: () => any;
  // Timer
  timeLeft: any;
  setTimeLeft: () => any;
  isCounting: any;
  setIsCounting: () => any;
  timeOff: any;
  setTimeOff: () => any;
  reloadDisable: any;
  setReloadDisable: () => any;
  minutes: () => void;
  seconds: () => void;
  // Functions
  setVisibleWarning: () => any;
  setVisibleSendCode: () => any;
  setName: () => any;
  setSurName: () => any;
  setPhoneEditNumber: () => any;
  setUserBoolean: () => any;
  UpdateUsers: () => any;
  setUser: () => any;
  ClearUser: () => any;
  setSubmitDisable: () => any;
  //
  PhoneNumberEdit: () => any;
  CodeEditSubmit: () => any;
  codeChekEdit: any;
  setCodeChekEdit: () => any;
  onPressRequestCode: () => any;
  IphoneNumberTogglePen: () => any;
  NameTogglePen: () => any;
  UserNameTogglePen: () => any;
}

export type TypeProfil = {};
