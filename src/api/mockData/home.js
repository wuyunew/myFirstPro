export default {
    //定义对象的属性 xx为属性名，：后面为属性值,箭头函数也能作为属性值
    getTableData: () => {
        return {
            code: 200,
            data: {
                tableData: [
                    {
                        name: "oppo",
                        todayBuy: 500,
                        monthBuy: 1000,
                        totalBuy: 1500,
                    },
                    {
                        name: "vivo",
                        todayBuy: 300,
                        monthBuy: 600,
                        totalBuy: 900,
                    },
                    {
                        name: "huawei",
                        todayBuy: 400,
                        monthBuy: 800,
                        totalBuy: 1200,
                    },
                    {
                        name: "xiaomi",
                        todayBuy: 200,
                        monthBuy: 400,
                        totalBuy: 600,
                    },
                    {
                        name: "iphone",
                        todayBuy: 100,
                        monthBuy: 200,
                        totalBuy: 300,
                    }
                ]
            }
        }
    }
}