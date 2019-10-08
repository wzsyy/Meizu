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
                    <div></div>
                </div>
                <div></div>
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
            ]
        }
    },
}
</script>

<style lang="scss" scoped>
    .meizu_footer{
        background-color:#ddd;
        display:flex;
        align-items:center;
        height:248px;
        width:100%;
        font-size: 14px;
        color: #515151;
        .footer-link{
            background-color:green;
            padding:48px 0 20px;
            border-top: 1px solid #f1f1f1;
            width:100%;height:179px;
            box-sizing:border-box;
            .footer-warp{
                width:90%;height:100%;
                background-color:yellow;
                margin:0 auto;
                .footer-clear{
                    display:flex;
                    justify-content:space-between;
                    .footer-list{
                        list-style:none;
                        display:flex;
                        width:1000px;
                    }
                }
            }
        }
    }
</style>