import {recoilPersist} from 'recoil-persist';
import { atom } from "recoil";

const {persistAtom} = recoilPersist();

export const userInfo = atom({
  key: 'userInfo',
  default: {
    emailFirst: "yenny031003",
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
