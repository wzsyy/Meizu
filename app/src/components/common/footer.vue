<template>
    <footer class="meizu_footer">
       <div class="footer-link">
            <div class="footer-warp">
                <div class="footer-clear">
                    <ul class="footer-list">
                        <li v-for="item of imgList" :key="item.id">
                            <router-link to="home">
                                <img :src="item.image">
                                <p>{{item.content}}</p>
                            </router-link>
                        </li>
                    </ul>
                    <div class="onlive-server">
                        <span>周一至周日 8:00-20:00</span>
                        <p class="tel">400-788-3333</p>
                        <el-button type="primary" round size="small">在线客服</el-button>
                    </div>
                </div>
                <hr class="footer-line">
                <el-row class="footer-info">
                    <el-col :span="18" class="footer-info-row">
                        <el-breadcrumb separator="|"    class="footerBar-left">
                            <el-breadcrumb-item :to="{ path: '/' }" 
                                v-for="(item,index) of footerBar"
                                :key="index">{{item}}
                             </el-breadcrumb-item>
                            <el-dropdown>
                                <span class="el-dropdown-link">
                                    中文简体<i class="el-icon-arrow-down el-icon--right"></i>
                                </span>
                                <el-dropdown-menu slot="dropdown">
                                    <el-dropdown-item>黄金糕</el-dropdown-item>
                                    <el-dropdown-item>狮子头</el-dropdown-item>
                                    <el-dropdown-item>螺蛳粉</el-dropdown-item>
                                    <el-dropdown-item>双皮奶</el-dropdown-item>
                                    <el-dropdown-item>蚵仔煎</el-dropdown-item>
                                </el-dropdown-menu>
                            </el-dropdown>
                        </el-breadcrumb>
                        <div>
                            <span>©2019 Meizu Telecom Equipment Co., Ltd. All rights reserved.</span><span>粤ICP备13003602号 合字B2-20170010</span>营业执照 法律声明<span>粤公网安备 44049102496009 号</span>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="footerBar-right">
                            <router-link to="/" v-for="item of footetIcons" :key="item.id">
                                <i :style="'background-image: url('+item.icon1+')'"></i>
                                <div>
                                    <img :src="item.img">
                                    <i :style="'background-image: url('+item.icon2+')'"></i>
                                </div>
                            </router-link>
                        </div>
                    </el-col>
                </el-row>
            </div>
       </div>
    </footer>
</template>

<script>
export default {
    data() {
        return {
            imgList:[
                {
                    id:"001",
                    image:"https://fms.res.meizu.com/dms/2018/07/13/2c69bf7c-2d29-4fd4-852e-0aa497f36f51.png",
                    content:"满80免运费"
                },
                {
                    id:"002",
                    image:"https://fms.res.meizu.com/dms/2018/07/13/d28eac8b-b915-49dc-9dbd-80884a07d44f.png",
                    content:"100+ 城市次日送达"
                },
                {
                    id:"003",
                    image:"https://fms.res.meizu.com/dms/2018/07/13/b21f3e65-f7f4-4693-914c-c070faf96770.png",
                    content:"7天无理由退货"
                },
                {
                    id:"004",
                    image:"https://fms.res.meizu.com/dms/2018/07/13/1998f0da-a439-4e07-9736-e6a1c39fb0ae.png",
                    content:"15天换货保障"
                },
                {
                    id:"005",
                    image:"https://fms.res.meizu.com/dms/2018/07/13/420825c1-4763-436d-b3e1-721651ccc70c.png",
                    content:"1年免费保修"
                },
                {
                    id:"006",
                    image:"https://fms.res.meizu.com/dms/2018/07/13/1c5cfeff-1b35-499e-bc2a-1fd29305be69.png",
                    content:"上门快修"
                },
            ],
            footerBar:['了解魅族','加入我们','联系我们','Flyme','魅族社区','天猫旗舰店','问题反馈','线上销售授权名单公示','出版物经营许可证'],
            footetIcons:[{
                id:'001',
                icon1:'https://fms.res.meizu.com/dms/2019/01/07/3b085af8-a47b-453c-b147-a4b352fb3a14.png',
                img:'https://fms.res.meizu.com/dms/2019/01/07/26b50023-fde7-4f23-ae32-3aa39585f4c4.png',
                icon2:'https://fms.res.meizu.com/dms/2019/01/07/6721704b-7b6d-445d-a025-e33649e5db74.png'
            },{
                id:'002',
                icon1:'https://fms.res.meizu.com/dms/2019/01/07/58e3e041-5543-4414-aaf1-d8e1fd539af6.png',
                img:'https://fms.res.meizu.com/dms/2019/01/07/33474117-9a2d-455d-a8ff-997355238400.jpg',
                icon2:'https://fms.res.meizu.com/dms/2019/01/07/cb0d00dc-41f7-4339-a0b3-25ee7dca1d4a.png'
            },{
                id:'003',
                icon1:'https://fms.res.meizu.com/dms/2019/01/07/52cba4a4-b3a6-4522-9883-d3a918e7d4a9.png',
                img:'',
                icon2:'https://fms.res.meizu.com/dms/2019/01/07/aff10988-6493-49c0-961a-0c91eae603b4.png'
            },{
                id:'004',
                icon1:'https://fms.res.meizu.com/dms/2019/01/07/bcccf9d2-e0e5-441b-b4a3-f78c12bc3933.png',
                img:'',
                icon2:'https://fms.res.meizu.com/dms/2019/01/07/7df8d821-a5c4-4619-9981-04e31db6e3de.png'
            }]
        }
    },
}
</script>

<style lang="scss" scoped>
    .meizu_footer{
        display:flex;
        align-items:center;
        height:248px;
        width:100%;
        font-size: 12px;
        color: #515151;
        .footer-link{
            padding:48px 0 20px;
            border-top: 1px solid #f1f1f1;
            width:100%;height:179px;
            box-sizing:border-box;
            .footer-warp{width:1240px;height:100%;margin:0 auto;
                .footer-clear{display:flex;justify-content:space-between;
                    .footer-list{
                        list-style:none;
                        display:flex;
                        width:1000px;
                        height:69px;
                        li{
                            width:15%;
                            display:flex;
                            justify-content:center;
                            a{
                                color:#999;
                                text-align:center;
                                overflow:hidden;
                                text-decoration:none;
                                img{width:50px;}
                                p{margin-top:5px;}
                            }
                        }
                    }
                    .onlive-server{
                        display:flex;
                        flex-direction:column;
                        align-items:flex-end;
                        margin-top:-12px;
                        .tel{
                            color: #00c3f5;
                            font-size: 25px;
                            font-weight: 400;
                            line-height: 40px;
                        }
                        button{width:60%}
                    }                
                }
                .footer-line{
                    margin:10px auto 35px;
                    border:0;
                    border-top: 1px solid #eee; 
                }
                .footer-info{
                    display:flex;
                    justify-content:space-between;
                    align-items:flex-end;                  
                    .footer-info-row{opacity:.4;
                        .footerBar-left{
                            font-size:12px;
                            display:flex;
                            justify-content:space-between;
                            padding-bottom:20px;
                        }
                        div{display:flex;justify-content:space-between;}
                    }
                    .footerBar-right{
                        display:flex;
                        justify-content:flex-end;
                        height:20px;
                        a{width:20px;position:relative;margin-left:20px;
                            i{
                                position:absolute;
                                height: 100%; width:100%;
                                top:0px;left:0px;
                                background-size:cover;
                            }
                            div{display:none} 
                            &:hover{
                                div{display:block;
                                    img{
                                        position:absolute;
                                        top:-200px;left:-60px;
                                        width:200px;
                                    }
                                }
                            }                      
                        }
                    }
                }
            }
        }
    }
</style>