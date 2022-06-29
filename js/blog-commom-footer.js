const opts = {
    // 默认启用皮肤 'reacg'
    // 在这里添加自定义配置
    // 当前为全部使用默认配置
    theme: {
        name: 'geek',
        //color:'LightPink',
        color: 'LightBlue',
        title: '我的博客',
        avatar: 'https://pic.cnblogs.com/avatar/2659401/20211129173446.png',
        headerBackground: 'https://images.cnblogs.com/cnblogs_com/blogs/721026/galleries/2118026/o_220303035636_00000037.jpg'
        // ...
    },
    signature: {
        enable: true,
        contents: [
            "欢迎来到GuoXiongfei的博客",
            "<b>微笑向阳，无畏悲伤</b>",
        ],
    },
    // 代码高亮
    highLight: {
        enable: true,
    },
    // 代码行号
    lineNumbers: {
        enable: false,
    },
    // github图标
    github: {
        enable: true,
        color: '#ffb3cc',
        url: 'https://www.github.com/',
    },
    // 图片灯箱
    imagebox: {
        enable: true,
    },
    links: [
        {
            name: 'Github',
            link: 'https://www.guoxiongfei.cn',
        },
        {
            name: '腾讯扣叮',
            link: 'https://coding.qq.com/creative-lab',
        },
    ],

}
$.awesCnb(opts);