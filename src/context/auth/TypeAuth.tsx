export interface TypeAuthState {
  phone: any;
  checkCode: any;
  code: any;
  visibleWarningCode: boolean;
  visibleSendCode: boolean;
  visibleWarningNumber: boolean;
  timeLeft: any;
  isCounting: boolean;
  timeOff: boolean;
  reloadDisable: boolean;
  isToken?: boolean;
  // loader
  numberDisabled: boolean;
  codeDisabled: boolean;

  setReloadDisable: () => void;
  setPhone: () => void;
  setCheckCode: () => void;
  setTimeOff: () => void;
  setCode: () => void;
  PhoneNumberSubmit: () => void;
  CodeSubmit: () => void;
  onPressRequestCode: () => void;
  ClearAllAuth: () => void;
  minutes: () => void;
  seconds: () => void;
  GetData: () => void;
  Logout: () => void;
}

export type TypeAuth = {};
