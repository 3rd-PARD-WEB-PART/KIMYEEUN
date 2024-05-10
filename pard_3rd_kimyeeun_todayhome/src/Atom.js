import {recoilPersist} from 'recoil-persist';
import { atom } from "recoil";

const {persistAtom} = recoilPersist();

export const userInfo = atom({
  key: 'userInfoState',
  default: {
    emailFirst: "",
    emailSecond:"",
    password: "",
    nickname: "",
    homepage: "",
    gender: 0,
    date: "",
    profileImage: "",
    introduce: "",
  },
  effects_UNSTABLE: [persistAtom],
});
