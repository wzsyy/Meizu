<template>
    <div id="cart">
        <!-- nav -->
        <div class="nav-box">
            <div class="nav">
                <div class="left">
                    <img class="logo" src="http://127.0.0.1:8080/cart/logo.png">
                    <!-- 面包屑导航 -->
                    <el-breadcrumb separator-class="el-icon-arrow-right">
                        <el-breadcrumb-item  :to="{ path: '' }">购物车</el-breadcrumb-item>
                        <el-breadcrumb-item>确认订单</el-breadcrumb-item>
                        <el-breadcrumb-item>在线支付</el-breadcrumb-item>
                        <el-breadcrumb-item>完成</el-breadcrumb-item>
                    </el-breadcrumb>
                </div>
                <!-- 右侧 -->
                <div class="right">
                    <span class="right-order">我的订单</span>
                    <div class="right-info" @mouseover="show" ref="info">
                        <p>用户<span>664625963655</span>的商城</p>
                        <i class="el-icon-arrow-down" ref="arrow"></i>
                    </div>
                    <div id="hidden" v-show="show2" @mouseleave="hidden" ref="hidden">
                        <ul>
                            <li>地址管理</li>
                            <li>我的收藏</li>
                            <li>我的回购金</li>
                            <li>问题反馈</li>
                        </ul>
                        <p>退出</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            show2:false
        }
    },
    methods:{
        show(){
           this.show2=true;
           this.$refs.info.style.color="#00b4ff";
           this.$refs.arrow.style.transform="rotate(-180deg)";
           this.$refs.arrow.style.transition="transform 300ms ease-in-out";
           this.$refs.hidden.style.height="120px";
           this.$refs.hidden.style.transition="height 1000ms ease-in-out";
        },
        hidden(){
            this.show2=false;
            this.$refs.info.style.color="#606266";
            this.$refs.arrow.style.transform="rotate(0deg)";
            this.$refs.arrow.style.transition="transform 300ms ease-in-out";
            this.$refs.hidden.style.height="0px";
        }
    }
}
</script>
<style lang="scss" scoped>
@import url('../assets/scss/reset.scss');
    #cart{
        .nav-box{
            border-bottom: 1px solid #efefef;
            width: 100%;
        }
        .nav{
            display: flex;
            max-width: 1240px;
            min-width: 1240px;
            margin: auto;
            align-items: center;
            height: 80px;
            justify-content: space-between;
            .left{
                display: flex;
            }
            .logo{
                max-width: 125px;
                margin-top:-5px;
                margin-right: 40px;
            }
            .right{
                font-size: 12px;
                color: #606266;
                display: flex;
                position: relative;
                .right-order{
                    margin-right: 40px;
                    transition: 300ms ease-in-out;
                    cursor: pointer;
                    &:hover{
                        color:#00b4ff;
                    }
                }
                .right-info{
                    display: flex;
                    z-index: 2;
                    cursor: pointer;
                    p{
                        margin-right: 5px;
                        span{
                            width: 50px;
                            display: inline-block;
                            text-overflow: ellipsis;
                            overflow: hidden;
                            vertical-align: bottom;
                        }
                    }
                }
                #hidden{
                    position: absolute;
                    right: 0;
                    background: #fff;
                    border: 1px solid #ccc;
                    width: 50%;
                    line-height: 2.5;
                    padding: 40px 26px 40px 20px;
                    z-index: 1;
                    margin-top: -14px;
                    margin-right: -10px;
                    cursor: pointer;
                    height: 120px;
                    overflow: hidden;
                    p{
                        border-top: 1px solid #ccc;
                        text-align: center;
                        width: 100%;
                        right: 0;
                        bottom: 0;
                    }
                }
            }
        }
    }
</style>