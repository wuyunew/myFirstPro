/**
 * 整个项目api的统一管理
 */
import { toRaw } from "vue";
import request from "./request";
//请求首页左侧的表格的数据

export default {
    getTableData() {
        return request({
            url: "/home/getTableData",
            method: "get",
            mock: true,
        });
    },
    getCountData() {
        return request({
            url: "/home/getCountData",
            method: "get",
            mock: true,
        });
    },
    getChartData() {
        return request({
            url: "/home/getChartData",
            method: "get",
            mock: true,
        });
    },
    getUserData(data) {
        //params是与请求一起发送的url参数 必须是一个简单对象或URLSearchParams对象
        return request({
            url: "/user/getUserData",
            method: "get",
            mock: true,
            data,
        });
    }
}