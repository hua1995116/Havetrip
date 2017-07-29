<template>
  <div>
    <div id="top">
      <div class="top top1">
        <p>LOGO</p>
      </div>
      <div class="top top2">
        <img src="../../images/t16.jpg" >
      </div>
      <div class="top top3">
        <div class="top3l">
                <span id="username">
                    ashui12344
                </span>
          <br>
          <p>
            个性签名：
            <span id="signature">这位同学很懒，木有签名的说～</span>
          </p>
        </div>
        <div class="top3r">
          <p>
            等级：<span id="level">1</span>
            经验：<span id="experience">1</span>
            关注：<span id="attention">1</span>
            粉丝：<span id="fans">1</span>
          </p>
        </div>
      </div>
    </div>
    <div id="mid" class="clear">
      <div class="midl">
        <div class="midl1 mid1"></div>
        <div class="midl2">
          <ul>
            <li><router-link :to="{ path: '/person/youji' }">游记管理　></router-link></li>
            <li><router-link :to="{ path: '/person/counrty' }">乡村管理　></router-link></li>
            <li><a href="##">景点管理　></a></li>
            <li><a href="##">餐馆管理　></a></li>
            <li><a href="##">住宿管理　></a></li>
            <li><router-link :to="{ path: '/person/gerenzhongxi' }">个人资料　></router-link></li>
            <li><router-link :to="{ path: '/person/tongzhi' }">通　　知　></router-link></li>
          </ul>
        </div>
        <div style="clear:both"></div>
      </div>
      <router-view></router-view>
    </div>
    <div id="foot"></div>
  </div>
</template>
<script>
  export default {
  }
</script>
<style lang="stylus">
  /*全部*/
  *{
    padding: 0px;margin: 0px;
  }
  a{
    text-decoration: none;
    color: black;
  }
  html{
    width:100%;
  }
  body{
    width: 100%;
  }
  /*顶部*/
  #top{
    background: url(../../images/top-bg.jpg) no-repeat;
    background-size: 100% 100%;
    width:100%;
    height:320px;
  }
  .top{
    width: 100%;
  }
  .top1{
    height:70px;
  }
  .top1 p{
    font-size: 36px;
    font-weight: 700;
    color: #FFDE3A;
    margin-left: 50px;
    height: 70px;
    line-height: 70px;
  }
  .top2{
    height:170px;
  }
  .top2 img{
    width: 150px;
    height:150px;
    height:150px;
    border-radius: 50%;
    margin-left: 100px;
    margin-top: 70px;
  }
  .top3{
    width:100%;
    height:80px;
    background: rgba(0,0,0,0.4);
    color: #ffffff;
  }
  .top3 .top3l{
    margin-left: 270px;
    height:80px;
    width:30%;
    float: left;
  }
  .top3 .top3l #username{
    width:100%;
    height:40px;
    line-height:40px;
    font-size: 24px;
    font-weight: 700;
  }
  .top3 .top3l p{
    width:100%;
    height:40px;
    line-height:40px;
    font-size: 15px;
  }
  .top3 .top3r{
    height:80px;
    width:30%;
    float: right;
    font-size: 15px;
  }
  .top3 .top3r p{
    height:40px;
    line-height: 40px;
    margin-top: 40px;
  }
  .top3 .top3r p span{
    height:40px;
    line-height: 40px;
    margin-right: 20px;
  }
  /*内容*/
  #mid{
    width:1200px;
    margin:40px auto;
    height:auto;
    min-height: 500px;
  }
  #mid .mid1{
    width: 100%;
    height:50px;
    line-height:50px;
    font-size: large;
    border-bottom:2px #999 solid ;
  }
  #mid .midl{
    width:22%;
    height:auto;
    float: left;
  }
  #mid .midl .midl2{
    width:55%;
    height: auto;
    min-height: 200px;
    margin: 0 auto;
    margin-bottom: 80px;
  }
  #mid .midl .midl2 ul{
    width: 100%;
    list-style: none;
  }
  #mid .midl .midl2 ul li{
    width:100%;
    height:70px;
    line-height: 70px;
    text-align: center;
    border-bottom: 1px solid #999;
    font-size: large;
  }
  #mid .midl .midl2 ul li .active{
    color:#FFDE3A;
    font-weight: bold;
  }
  #mid .midr{
    width:78%;
    height:auto;
    min-height: 500px;
    float: left;
  }
  #mid .midr .midr1 span{
    width: auto;
    margin-right: 30px;
    height:50px;
    line-height:50px;
    display: inline-block;
  }
  #mid .midr .midr1 .active{
    border-bottom:3px solid #FFDE3A;
  }
  #mid .midr .content{
    width:100%;
    height:auto;
    min-height: 400px;
    float: left;
    padding-top: 20px;
  }
  .text-input{
    height:28px;
    width:280px;
    border:1px solid #ccc;
    border-radius: 4px;
    /*outline: none;*/
  }

  /*上传图片按钮*/
  .a-file-btn-input{
    background: #ccc;
    position: relative;

    padding:5px 10px;
    border: 1px solid #ccc;
    border-radius: 4px;

    font-size: small;
    text-align: center;
  }
  w{
    position: absolute;
    height:28px;
    line-height:28px;
    margin: 5px -10px;
    width:100%;
  }
  .file-btn-input{
    position: relative;
    /*overflow: hidden;*/
    opacity: 0;
    right: 0;
    top: 0;

    /*left: -80px;*/
    width: 56px;
    height:28px;
  }
  /*按钮   */
  .btn{
    padding:0px 10px;
    height:30px;
    line-height:30px;
    border-radius: 4px;
    background:#FFDE3A;
    border: 0px;
  }
  .btn-gray{
    background: #ccc;
  }
  .btn-blue{
    background: #0c8bcc;
  }
  .select{
    height:32px;
    width: 284px;
    border:1px solid #ccc;
    border-radius: 4px;
  }
  .upload{
    padding: 4px 10px;
    height: 20px;
    line-height: 20px;
    position: relative;
    border: 1px solid #999;
    text-decoration: none;
    color: #666;
  }
  .change{
    position: absolute;
    overflow: hidden;
    right: 0;
    top: 0;
    opacity: 0;
  }
  /*页脚*/
  #foot{
    background:black;
    width:100%;
    height:200px;
  }


  /*自定义*/
  .time{
    color: #cccccc;
  }
  .input_radio{
    margin-right: 10px;
  }
  input[type="text"]{
    padding-left: 5px;
  }
  .gray{
    color: #ccc;;
  }
  .gray9{
    color: #999999;
  }
  .green{
    color: green;
  }
  .red{
    color:red;
  }


  /*表单*/
  #mid .midr  form{
    width:100%;
  }
  #mid .midr  form .formtr{
    margin: 5px 0px 10px 0px;
  }
  #mid .midr  form .formtrp{
    height:40px;
    line-height:40px;
  }
  #mid .midr  form .formtrImg{

    line-height:40px;
  }
  #mid .midr  form .formtrImg img{
    height:200px;
    width:200px;
  }
  #mid .midr  form span{
    width: 100px;
    margin-right: 20px;
    vertical-align: top;
    user-select:none;
    float: left;
    text-align-last: justify;
  }
  #mid .midr  form .btn{
    margin-right: 30px;
  }
  #mid .midr  form .btnbar{
    margin-top: 30px;
  }

</style>
