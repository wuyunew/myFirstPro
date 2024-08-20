const env=import.meta.env.MOOE || "development";
const EnvConfig={
    development:{
        baseApi:"/api",
        mockApi:"https://apifoxmock.com/ml/4068509-0-default/api",
    },
    text:{
        baseApi:"//test.future.com/api",
        mockApi:"https://apifoxmock.com/ml/4068509-0-default/api",
    },
    prod:{
        baseApi:"//future.com/api",
        mockApi:"https://apifoxmock.com/ml/4068509-0-default/api",
    },
};
//和request配合
export default{
    env,
    ...EnvConfig[env],
    //mock
    mock:true,
}