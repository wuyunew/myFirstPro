import Mock from "mockjs";
import homeApi from "./mockData/home";//默认导入，指定自己喜欢的名称
//1.拦截的路径2.方法3.制造出的假数据
//正则表达式写法
Mock.mock(/api\/home\/getTableData/, "get", homeApi.getTableData);