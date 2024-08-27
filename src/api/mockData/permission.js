import Mock from 'mockjs'
export default {
    getMenu: config => {
        const { username, password } = JSON.parse(config.body)
        //先判断用户是否存在
        //判断账号是否与密码对应
        //menuList用于后面做权限分配
        if (username === 'admin' && password === 'admin') {
            return {
                code: 200,
                data: {
                    menuList: [
                        {
                            path: '/home',
                            name: 'home',
                            label: '首页',
                            icon: 'house',
                            url: 'Home',
                        },
                        {
                            path: '/user',
                            name: 'user',
                            label: '用户管理',
                            icon: 'user',
                            url: 'User',
                        },
                        {
                            path: '/mail',
                            name: 'mail',
                            label: '商品管理',
                            icon: 'video-play',
                            url: 'Mail',
                        },
                        {
                            path: 'other',
                            label: '其他',
                            icon: 'location',
                            children: [
                                {
                                    path: '/page1',
                                    name: 'page1',
                                    label: '页面1',
                                    icon: 'setting',
                                    url: 'Page1'
                                },
                                {
                                    path: '/page2',
                                    name: 'page2',
                                    label: '页面2',
                                    icon: 'setting',
                                    url: 'Page2'
                                }
                            ]
                        }
                    ],
                    token: Mock.Random.guid(),
                    messsage: '获取成功'
                }
            }
        }
        else if (username === 'wuyu' && password === 'wuyu') {
            return {
                code: 200,
                data: {
                    menuList: [
                        {
                            path: '/home',
                            name: 'home',
                            label: '首页',
                            icon: 'house',
                            url: 'Home',
                        },
                        {
                            path: '/user',
                            name: 'user',
                            label: '用户管理',
                            icon: 'user',
                            url: 'User',
                        },
                    ],
                    token: Mock.Random.guid(),
                    messsage: '获取成功'
                }
            }
        }
        else {
            return {
                code: -999,
                message: '账号或密码不正确'
            }
        }

    }
}