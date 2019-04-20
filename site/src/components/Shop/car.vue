<template>
    <div class="car">
        <div class="left">
            <p>
                <img src="../../assets/未标题-2.jpg" alt="">
            </p>
        </div>
        <div class="middle">
            <p>为选购商品</p>
            <span>另需配送费9元</span>
        </div>
        <div class="right">￥48元起送</div>
    </div>
</template>


<script>
    export default {
        
    }
</script>


<style scoped>
.car{
    width: 100%;
    height: 0.8rem;
    background: #515153;
    position: fixed;
    bottom:0;
}
.car .left{
    float: left;
    width:0.8rem;
    height:0.8rem;
    border: 1px solid black;
    position: absolute;
    top: -0.2rem;
    left: 0.4rem;
    border-radius: 50%;
}
.car .left p{
    width:0.6rem;
    height:0.6rem;
    border:0.2rem solid #434547;
    position: absolute;
    top:0;
    left:0;
    right: 0;
    bottom:0;
    margin: auto;
    border-radius: 50%;
    background: #363636;
}
.car .left p img{ 
    width:0.5rem;
    height:0.5rem;
    position: absolute;
    top:0;
    left:0;
    right: 0;
    bottom:0;
    margin: auto;
    background: #363636;
}
.car .middle{
    float: left;
    width:2rem;
    height:0.8rem;
    margin-left:1.8rem;
}
.car .middle p{
    width:2rem;
    height:0.4rem;
    font-size: 0.2rem;
    line-height: 0.4rem;
    color:#ccc;
}
.car .middle span{
    display: block;
    width:2rem;
    height:0.4rem;
    font-size: 0.2rem;
    line-height: 0.4rem;
    color:#ccc;
}
.car .right{
    float: right;
    width:1.2rem;
    height: 0.8rem;
    color: #fff;
    font-size: 0.3rem;
    line-height:0.8rem;
    text-align: center;
}
</style>