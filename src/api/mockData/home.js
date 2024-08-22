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
    },
    getChartData: () => {
        return {
            code: 200,
            data: {
                orderData: {
                    date: [
                        "2015-10-01",
                        "2015-10-02",
                        "2015-10-03",
                        "2015-10-04",
                        "2015-10-05",
                        "2015-10-06",
                        "2015-10-07",
                    ],
                    data: [
                        {
                            oppo: 3839,
                            vivo: 3559,
                            huawei: 3840,
                            xiaomi: 3839,
                            iphone: 3839,
                        },
                        {
                            oppo: 3842,
                            vivo: 3561,
                            huawei: 3843,
                            xiaomi: 3845,
                            iphone: 3846,
                        },
                        {
                            oppo: 3845,
                            vivo: 3563,
                            huawei: 3846,
                            xiaomi: 3848,
                            iphone: 3849,
                        },
                        {
                            oppo: 3848,
                            vivo: 3565,
                            huawei: 3849,
                            xiaomi: 3851,
                            iphone: 3852,
                        },
                        {
                            oppo: 3851,
                            vivo: 3567,
                            huawei: 3852,
                            xiaomi: 3854,
                            iphone: 3855,
                        },
                        {
                            oppo: 3854,
                            vivo: 3569,
                            huawei: 3855,
                            xiaomi: 3857,
                            iphone: 3858,
                        },
                        {
                            oppo: 3857,
                            vivo: 3571,
                            huawei: 3858,
                            xiaomi: 3860,
                            iphone: 3861,
                        }

                    ]
                },
                videoData: [
                    {
                        name: "oppo",
                        value: 3839,
                    },
                    {
                        name: "vivo",
                        value: 3559,
                    },
                    {
                        name: "huawei",
                        value: 3840,
                    },
                    {
                        name: "xiaomi",
                        value: 3839,
                    },
                    {
                        name: "iphone",
                        value: 3839,
                    }
                ],
                userData: [{
                    date: "周一", new: 3, active: 200
                },
                {
                    date: "周二", new: 4, active: 250
                },
                {
                    date: "周三", new: 5, active: 300
                },
                {
                    date: "周四", new: 6, active: 280
                },
                {
                    date: "周五", new: 7, active: 250
                },
                {
                    date: "周六", new: 8, active: 320
                },
                {
                    date: "周日", new: 9, active: 290
                }],
            }
        }

    }
}