import Mock from "mockjs";
import homeApi from "./mockData/home";//默认导入，指定自己喜欢的名称
import userApi from "./mockData/user";
//1.拦截的路径2.方法3.制造出的假数据
//正则表达式写法
Mock.mock(/api\/mock\/home\/getTableData/, "get", homeApi.getTableData);
Mock.mock(/api\/mock\/home\/getCountData/, "get", homeApi.getCountData);
Mock.mock(/api\/mock\/home\/getChartData/, "get", homeApi.getChartData);
//这种mock写法不能拦截带参数的请求，写正则表达式的类型
Mock.mock(/api\/mock\/user\/getUserData/, "get", userApi.getUserList);
Mock.mock(/api\/mock\/user\/deleteUser/, "get", userApi.deleteUser);
