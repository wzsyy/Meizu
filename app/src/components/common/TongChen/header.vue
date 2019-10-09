<template>
  <div class="header">
    <div class="header-wrap-1240">
      <div class="header-logo">
        <router-link to>
          <svg
            fill="#00b4ff"
            version="1.1"
            id="Logo"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="125px"
            height="24px"
            viewBox="17.318 5.824 402.048 73.556"
            enable-background="new 17.318 5.824 402.048 73.556"
          >
            <path
              d="M321.513,5.824H256.91v12.878h51.478l-49.294,44.581c-8.227,7.023-2.872,16.096,3.958,16.096h65.337V66.472 h-52.117l48.964-44.554C333.52,14.473,328.535,5.824,321.513,5.824"
            ></path>
            <rect x="226.517" y="5.824" width="14.426" height="73.556"></rect>
            <path
              d="M104.296,5.824h-71.36c-8.576,0-15.618,7.012-15.618,15.588v57.967H31.14V23.743 c0-2.711,2.208-5.041,4.92-5.041h25.31v60.677h14.428V18.702h25.312c2.712,0,4.919,2.329,4.919,5.041v55.636h13.86V21.416 C119.888,12.841,112.872,5.824,104.296,5.824"
            ></path>
            <path
              d="M148.765,23.614c0-2.712,2.199-4.912,4.911-4.912h55.909V5.824h-58.236c-8.576,0-15.592,7.016-15.592,15.592 v42.37c0,8.576,7.017,15.592,15.592,15.592h58.236V66.5h-55.909c-2.711,0-4.911-2.199-4.911-4.912V49.042h58.43V36.117h-58.43 V23.614z"
            ></path>
            <path
              d="M405.506,5.824v55.637c0,2.71-2.22,5.039-4.931,5.039h-39.77c-2.711,0-4.892-2.328-4.892-5.039V5.824h-13.86 v57.963c0,8.576,7.018,15.592,15.592,15.592h46.127c8.575,0,15.592-7.017,15.592-15.592V5.824H405.506z"
            ></path>
          </svg>
        </router-link>
      </div>
      <i class="el-icon-goods" style="margin-left:-5px;">
        <em>0</em>
      </i>
      <el-dropdown size="mini">
        <span class="el-dropdown-link" size="mini">
          <i class="el-icon-user" size="mini" style="margin-right:30px;"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>立即登陆</el-dropdown-item>
          <el-dropdown-item>立即注册</el-dropdown-item>
          <el-dropdown-item>我的订单</el-dropdown-item>
          <el-dropdown-item>M码通道</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <div class="header-search">
        <input type="text" placeholder="魅族 16s Pro">
        <router-link to>
          <img src="http://127.0.0.1:8080/header/search.png">
        </router-link>
      </div>
      <div class="header-link">
        <ul>
          <li class="phone-link">
            <router-link to>手机</router-link>
          </li>
          <li>
            <router-link to class="hear-link">声学</router-link>
          </li>
          <li>
            <router-link to class="parts-link">配件</router-link>
          </li>
          <li>
            <router-link to class="life-link">生活</router-link>
          </li>
          <li>
            <router-link to class>Flyme</router-link>
          </li>
          <li>
            <router-link to class>服务</router-link>
          </li>
          <li>
            <router-link to class>专卖店</router-link>
          </li>
          <li>
            <router-link to class>社区</router-link>
          </li>
          <li>
            <router-link to class="app-link">APP下载</router-link>
          </li>
        </ul>
      </div>
    </div>
    <commodity :data="data1" class="commodity"></commodity>
  </div>
</template>
<script>
import commodity from "./commodity.vue";
export default {
  data() {
    return {
      data1: [
        {
          pid: 1,
          pic: "ca207b74-06a4-491f-a620-58a6ed0c23cd.jpg",
          pname: "魅族 16s Pro",
          price: "￥2699"
        },
        {
          pid: 2,
          pic: "Cgbj0FzvRI6AWu1jAAxIbnS8M5Q295.png@240x240.jpg",
          pname: "魅族 16Xs",
          price: "￥1499"
        },
        {
          pid: 3,
          pic: "Cgbj0Fy9c0KAXyeaAAa7nrDVZiw073.png@240x240.jpg",
          pname: "魅族 16s",
          price: "￥2699"
        },
        {
          pid: 4,
          pic: "Cgbj0Vx_ZK6AaEObAAa1DJqn7us376.png@240x240.jpg",
          pname: "魅族 Note9",
          price: "￥1199"
        },
        {
          pid: 5,
          pic: "Cgbj0FtqgnmAFgJPAAhgnScaoFg724.png@240x240.jpg",
          pname: "魅族 16th",
          price: "￥2298"
        },
        {
          pid: 6,
          pic: "Cgbj0FvINLWACd0AAAh2dGv5_R0516.png@240x240.jpg",
          pname: "魅族 16 X",
          price: "￥1598"
        },
        {
          pid: 7,
          pic: "Cgbj0FusSK2AQZgiAAlFKHoO-co889.png@240x240.jpg",
          pname: "魅族 X8",
          price: "￥1298"
        },
        {
          pid: 8,
          pic: "Cgbj0VvQPnuAAwPPAAMv8zzt2DE910.png@240x240.jpg",
          pname: "魅族 Note8",
          price: "￥999"
        }
      ]
    };
  },
  methods: {},
  components: {
    commodity: commodity
  }
};
</script>
<style lang="scss" scoped>
@import url("../../../../assets/scss/reset.scss");
.header-wrap-1240 {
  width: 1240px;
  height: 82px;
  margin: 0 auto;
  position: relative;
  .header-logo {
    float: left;
    padding: 28px 0;
  }
}
.header-link {
  overflow: hidden;
  float: right;
  li {
    float: left;
    padding: 31px 20px 30px;
  }
  a {
    line-height: 21px;
    font-size: 14px;
    text-decoration: none;
    color: black;
  }
}
.header-search {
  position: relative;
  float: right;
  margin: 26px 5px 0 10px;
  width: 170px;
  height: 30px;
  line-height: 29px;
  font-size: 12px;
  background: #fff;
  border-radius: 20px;
  border: 1px solid #999;
  box-sizing: border-box;
  input {
    display: block;
    position: relative;
    border: none;
    padding: 0;
    outline: 0;
    width: 127px;
    height: 20px;
    margin-left: 15px;
    margin-top: 5px;
    font-size: 12px;
    line-height: 20px;
    color: #333;
  }
  img {
    width: 20px;
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
  }
}
i {
  display: block;
  float: right;
  margin: 32px 5px 0 16px;
  transform: scale(1.8);
  em {
    position: absolute;
    top: -2px;
    right: -6px;
    height: 15px;
    border-radius: 50%;
    background: #c00;
    color: #fff;
    line-height: 15px;
    text-align: center;
    display: inline-block;
    padding: 0 4px;
    text-indent: 0;
    transform: scale(0.5);
  }
}

.el-dropdown {
  float: right;
  .el-dropdown-link {
    cursor: pointer;
  }
  .demonstration {
    display: block;
    color: #8492a6;
    font-size: 14px;
    margin-bottom: 20px;
  }
}

.commodity {
  display: none;
  width: 100%;
  height: 0;
  position: absolute;
  padding-top: 25px;
  top: 40px;
  left: 0px;
  &:hover {
    display: block;
  }
}
@keyframes xx {
  0% {
    height: 0%;
  }
  100% {
    height: 200%;
  }
}
.phone-link {
  &:hover {
    cursor: pointer;
    a {
      color: #00c3f5;
    }
    .commodity {
      overflow: hidden;
      display: block;
      animation: xx 0.5s linear 0s forwards;
    }
  }
}
</style>