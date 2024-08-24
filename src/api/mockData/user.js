import Mock from 'mockjs'

function param2Obj(url) {
    const search = url.split('?')[1]
    if (!search) {
        return {}
    }
    return JSON.parse('{"' + decodeURIComponent(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}')
}

let List = []
const conunt = 200
//模拟200条用户数据
for (let i = 0; i < conunt; i++) {
    List.push(Mock.mock({
        id: Mock.Random.guid(),
        name: Mock.Random.cname(),
        addr: Mock.mock('@county(true)'),
        'age|18-60': 1,
        birth: Mock.Random.date(),
        sex: Mock.Random.integer(0, 1),
    }))
}
//分页
export default {
    /**
     * 获取参数列表
    */

    getUserList: config => {
        const {
            name, page = 1, limit = 10
        } = param2Obj(config.url)

        const mockList = List.filter(user => {
            if (name && user.name.indexOf(name) === -1) {
                return false
            }
            return true
        })
        const pageList = mockList.filter((item, index) => index < limit * page && index >= limit * (page - 1))
        return {
            code: 200,
            data: {
                list: pageList,
                count: mockList.length
            }
        }
    },

    deleteUser: config => {
        const { id } = param2Obj(config.url)
        if (!id) {
            return {
                code: -999,
                message: '参数错误'
            }
        }
        else {
            List = List.filter(user => user.id !== id)
            return {
                code: 200,
                data: '删除成功!'
            }
        }
    }


}

