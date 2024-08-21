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
    },
    getCountData: () => {
        return {
            code: 200,
            data: {
                countData: [
                    {
                        name: "今日支付订单",
                        value: 1234,
                        icon: "SuccessFilled",
                        color: "#2ec7c9",
                    },
                    {
                        name: "今日收藏订单",
                        value: 210,
                        icon: "StarFilled",
                        color: "#ffb980",
                    },
                    {
                        name: "今日未支付单",
                        value: 1234,
                        icon: "GoodsFilled",
                        color: "blue",
                    },
                    {
                        name: "本月支付订单",
                        value: 1234,
                        icon: "SuccessFilled",
                        color: "#2ec7c9",
                    },
                    {
                        name: "本月收藏订单",
                        value: 210,
                        icon: "StarFilled",
                        color: "#ffb980",
                    },
                    {
                        name: "本月未支付单",
                        value: 1234,
                        icon: "GoodsFilled",
                        color: "blue",
                    }



                ]
            }
        }
    }
}