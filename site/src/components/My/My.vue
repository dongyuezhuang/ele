<template>
	<div>
		<header>
			<h2>我的</h2>
			<h3>
				<img src="../../../static/未标题-99.jpg" alt="" />
				<p>
					<span @click="login">{{userName}}</span>
					<i>{{phone}}</i>
				</p>
				<em>&gt;</em>
			</h3>
		</header>
		<div id="money">
			<ul>
				<li>
					<i>钱包</i>
					<span style="color: blue;">{{money | currency}}</span>
				</li>
				<li>
					<i>红包</i>
					<span style="color: #42B983;">0个</span>
				</li>
				<li>
					<i>金币</i>
					<span style="color:#333333;">0个</span>
				</li>
			</ul>
		</div>
		
		
		<div class="chioce">
            <p><span>&#xe61c;</span>我的地址<b>&gt;</b></p>
            <div class="double">
                <p><span style="color:#94d94a;">&#xe65a;</span>金币商城<b>&gt;</b></p>
                <span class="xian"></span>
                <p><span style="color:#fc7b53;">&#xe61a;</span>分享拿10元现金<b>&gt;</b></p>
            </div>
            <div class="double">
                <p><span style="color:#4aa5f0;">&#xe605;</span>我的客服<b>&gt;</b></p>
                <span class="xian"></span>
                <p><span style="color:#4aa5f0;">&#xe722;</span>下载饿了么APP<b>&gt;</b></p>
            </div>
        </div>
		
		
		

	</div>
</template>

<script>
	export default{
		name:'My',
		data(){
			return{
				userName:localStorage.phone||"登录/注册",
				phone:"登录后享受更多权益",
				money:0
			}
		},
		methods:{
			login(){
				if(!localStorage.phone){
					this.$router.push("/login")
				}
			},
			getUser(){
				if(localStorage.phone){
					console.log(232323232323,localStorage.phone)
					this.$ajax.post("/getUser",{phone:localStorage.phone})
					.then(({data})=>{
						this.userName=data.userInfo.phone;
						this.money=data.userInfo.money;
					})
				}
			}
		},
		mounted(){
			this.getUser()
		}
	}
</script>

<style scoped="scoped">

header{
	width: 100%;
	height:2rem;
	background:url(../../../static/未标题-1.jpg) repeat-y center/cover;
}
header h2{
	height:0.5rem;
	text-align: center;
	line-height:0.5rem;
	font-size:0.3rem;
	color: #fff;
	font-weight: 900;
	
}
header h3{
	height:1.5rem;
	overflow: hidden;
}
header h3 img{
	float: left;
	width: 1rem;
	height:1rem;
	margin-top:0.2rem;
	margin-left: 0.2rem;
	border-radius: 50%;
}
header h3 p{
	float: left;
	width:3rem;
	height:1rem;
	margin-top:0.2rem;
	margin-left: 0.2rem;
}
header h3 em{
	float:right;
	width:1rem;
	height:1rem;
	margin-top:0.2rem;
	font-style: normal;
	font-size:0.7rem;
	color: #fff;
	text-align: center;
}
header h3 p span{
	display: block;
	height:0.5rem;
	font-size: 0.35rem;
	line-height: 0.5rem;
	color: #fff;
	font-weight: 900;
}
header h3 p i{
	display: block;
	height:0.5rem;
	font-size: 0.28rem;
	line-height: 0.5rem;
	color: #fff;
	font-style: normal;
	font-weight: 900;
}
#money{
	height:2rem;
}
#money ul{
	height:2rem;
	display: flex;
	justify-content: space-between;
}
#money ul li{
	width: 33%;
	height:2rem;
	font-size: 0.32rem;
	border-bottom: 1px solid gainsboro;
	border-right: 1px solid gainsboro;
	line-height: 2rem;
	color:#644F1B;
}
#money ul li i{
	font-weight: 900;
	margin-right: 0.25rem;
}
.chioce{
    font-size:0.32rem;
    color:#666;
    background:#f5f5f5;
    min-height:7.2rem;
    padding-top:0.2rem;
}
.chioce p{
    position: relative;
    height:1rem;
    font-family: 'iconfont';
    line-height:1rem;
    border-top:1px solid #f0f0f0;
    border-bottom:1px solid #f0f0f0;
    background:#fff;
    margin-bottom:0.2rem;
    cursor: pointer;
}
.chioce p span{
    color:#4aa5f0;
    font-size:0.52rem;
    font-weight:900;
    margin-right:0.2rem;
    margin-left:0.3rem;
}
.chioce p b{
    color:#ddd;
    position:absolute;
    right:0.25rem;
}
.double{
    margin-bottom:0.2rem;
}
.double p {
    border: 0;
    margin: 0;
}
.double p span{
    font-size:0.34rem;
    margin-left:0.4rem;
}
.double .xian{
    height:1px;
    display: block;
    overflow: hidden;
}
</style>