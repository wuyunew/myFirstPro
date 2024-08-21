const env=import.meta.env.MOOE || "development";
const EnvConfig={
    development:{
        baseApi:"/api",
        mockApi:"/api/mock",
    },
    text:{
        baseApi:"//test.future.com/api",
        mockApi:"/api/mock",
    },
    prod:{
        baseApi:"//future.com/api",
        mockApi:"/api/mock",
    },
};
//和request配合
export default{
    env,
    ...EnvConfig[env],
    //mock
    mock:true,
}