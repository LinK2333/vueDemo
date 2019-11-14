import { getLogin, getInfo, loginOutRequest } from '@/api/login'
const user = {
  state: {
    user: '',
    status: '',
    email: '',
    code: '',
    uid: undefined,
    token: localStorage.getItem('tokenkey'),
    name: '',
    avatar: '',
    introduction: '',
    roles: [],
    setting: {
      articlePlatform: []
    }
  },
  mutations: {
    SET_STATUS: (state, status) => {
      state.status = status
    },
    SET_EMAIL: (state, email) => {
      state.email = email
    },
    SET_CODE: (state, code) => {
      state.code = code
    },
    SET_UID: (state, uid) => {
      state.uid = uid
    },
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_INTRODUCTION: (state, introduction) => {
      state.introduction = introduction
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    },
    SET_SETTING: (state, setting) => {
      state.setting = setting
    },
    LOGIN_SUCCESS: () => {
      console.log('login success')
    },
    LOGOUT_USER: state => {
      state.user = ''
    }
  },
  actions: {
    // 用户登录
    login ({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        getLogin(userInfo).then(res => {
          const { status, result } = res.data
          console.log(status)
          commit('SET_TOKEN', result)
          localStorage.setItem('tokenkey', result)
          resolve(res.data)
        })
      })
    },

    // 获取用户信息
    GetInfo ({ commit, state }) {
      return new Promise((resolve, reject) => {
        getInfo(state.token).then(res => {
          console.log(res)
          const {
            /* eslint-disable-next-line */
            result: { userList, role }
          } = res.data
          commit('SET_ROLES', userList)
          commit('SET_NAME', userList.name)
          commit('SET_UID', userList.uid)
          resolve(res.data)
        })
      })
    },

    // 登出
    LogOut ({ commit, state }) {
      return new Promise((resolve, reject) => {
        loginOutRequest(state.token)
          .then(res => {
            commit('SET_TOKEN', '')
            commit('SET_ROLES', []) // 清空用户信息
            resolve(res)
            console.log(222)
          })
          .catch(error => {
            reject(error)
          })
      })
    }
  }
}

export default user
