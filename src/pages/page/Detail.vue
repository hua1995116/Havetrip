<template>
  <div>
    <div class="nav">
      <div class="logo">LOGO</div>
      <div class="shug1"></div>
      <div class="search_icon">
        <a href="##"><span class="am-icon-search"></span></a>
      </div>
      <div class="headp">
        <a href="##"><img src="../../images/hp1.jpg"></a>
      </div>
    </div>

    <div class="main">
      <!-- 标题 -->
      <div class="title">
        添加乡村
      </div>
      <div class="hengg1"></div>
      <!-- 各种信息填写 -->
      <form class="clear">
        <div class="form_div clear">
          <span>名称：</span>
          <input type="text" size="20" class="form_input">
        </div>
        <div class="form_div clear">
          <span style="line-height:30px;">简介：</span>
          <textarea rows="13" class="form_textarea"></textarea>
        </div>
        <div class="form_div clear">
          <span>隶属：</span>
          <ul class="form_ul">
            <li>浙江省</li>
            <li>湖州市</li>
            <li>安吉县</li>
            <li>
              <select class="form_select">
                <option>畈山乡1</option>
                <option>畈山乡2</option>
                <option>畈山乡3</option>
              </select>
            </li>
          </ul>
        </div>
        <div class="form_div clear">
          <span style="line-height:30px;">封面：</span>
          <div class="form_cover_div">
            <img src="../../images/spotcover2.jpg">
            <div class="cho_cov">
              <button>选择本地文件</button>
              <span>img20170825.jpg</span>
            </div>
          </div>
        </div>
        <!-- 选项	 -->
        <div class="choose_type">
          <ul>
            <li :class="{active: 'food' === show}" @click="handleChangeShow('food')">特产</li>
            <li :class="{active: 'view' === show}" @click="handleChangeShow('view')">美景</li>
            <li :class="{active: 'dd' === show}">文化</li>
            <li :class="{active: 'cc' === show}">活动</li>
          </ul>
        </div>
        <!-- 特产 -->
        <div class="special" v-if="show==='food'">
          <ul>
            <li class="special_ed">
              <img src="../../images/special1.jpg">
              <input type="text" size="10">
              <div>
                <button>取消</button>
                <button>选择图片</button>
              </div>
            </li>
            <li class="special_ed">
              <img src="../../images/special1.jpg">
              <input type="text" size="10">
              <div>
                <button>取消</button>
                <button>选择图片</button>
              </div>
            </li>
            <li class="special_ed">
              <img src="../../images/special1.jpg">
              <input type="text" size="10">
              <div>
                <button>取消</button>
                <button>选择图片</button>
              </div>
            </li>
            <li class="special_ed">
              <img src="../../images/special1.jpg">
              <input type="text" size="10">
              <div>
                <button>取消</button>
                <button>选择图片</button>
              </div>
            </li>
            <li class="special_ed">
              <img src="../../images/special1.jpg">
              <input type="text" size="10">
              <div>
                <button>取消</button>
                <button>选择图片</button>
              </div>
            </li>
            <li class="special_ed">
              <img src="../../images/special1.jpg">
              <input type="text" size="10">
              <div>
                <button>取消</button>
                <button>选择图片</button>
              </div>
            </li>
            <li class="special_ing">
              <button>选择图片</button>
            </li>
          </ul>
        </div>
        <!-- 美景 -->
        <div class="sight" v-if="show==='view'">
          <ul>
            <li class="sight_pic">
              <button>上传图片集</button>
            </li>
            <li class="sight_vid">
              <button>上传视频</button>
            </li>
          </ul>
        </div>


        <div class="form_btn clear">
          <input type="button" value="取消">
          <input type="button" value="预览">
          <input type="submit" value="提交">
        </div>
      </form>


    </div>

    <!-- 底部 -->
    <div class="footer">
      © 2017 HangZhou. All Rights Reserved | Design by Thinking.
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        show: 'food'
      }
    },
    methods: {
      handleChangeShow (str) {
        this.show = str
      }
    }
  }
</script>
<style scoped lang="stylus">
  /*清除浮动*/
  .active {
    color: #FFDE3A;
    border-top: 3px solid #FFDE3A;
  }

  /*导航栏*/
  .nav {
    height: 60px;
    width: 100%;
    box-shadow: 0px 0px 2px 0px #FFDE3A;
  }

  .logo {
    width: 80px;
    height: 40px;
    color: #FFDE3A;
    font-size: 29px;
    font-weight: bold;
    /*background: rgba(110,120,144,0.7);*/
    float: left;
    margin: 10px 10px 10px 40px;
  }

  .shug1 {
    width: 2px;
    height: 34px;
    float: left;
    margin: 13px 20px;
    background: #ccc;
  }

  .search_icon {
    width: 40px;
    height: 40px;
    margin: 10px 0px;
    float: left;
    /*background: rgba(110,42,79,0.8);*/
  }

  .search_icon a span {
    font-size: 30px;
    color: #ccc;
    margin: -2px 5px;
  }

  .headp {
    height: 50px;
    width: 50px;
    float: right;
    margin: 5px 50px;
    border-radius: 50%;
  }

  .headp a img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }

  .main {
    /*height: 800px;*/
    width: 1000px;
    margin: 0px auto;
    /*background: rgba(55,220,188,0.7);*/
  }

  .hengg1 {
    height: 2px;
    width: 100%;
    margin: 0px auto 40px;
    background: #ccc;
  }

  /*标题*/
  .title {
    width: 100%;
    height: 100px;
    line-height: 100px;
    text-align: center;
    font-size: 24px;
    letter-spacing: 10px;
  }

  /*各种信息填写*/
  form {
    width: 100%;
  }

  .form_div {
    width: 100%;
    margin-bottom: 30px;
  }

  .form_div span {
    width: 20%;
    height: 45px;
    float: left;
    line-height: 45px;
    text-align: right;
  }

  .form_input {
    width: 50%;
    height: 45px;
    float: left;
    line-height: 45px;
    padding: 0px 10px;
    margin-left: 2%;
    border-radius: 4px;
    border: 1px solid #ccc;
  }

  .form_textarea {
    width: 50%;
    height: 200px;
    line-height: 30px;
    float: left;
    padding: 5px 10px;
    margin-left: 2%;
    border-radius: 4px;
    border: 1px solid #ccc;
  }

  .form_ul {
    width: 70%;
    height: 45px;
    float: left;
    margin-left: 2%;
  }

  .form_ul li {
    margin-right: 19px;
    height: 45px;
    float: left;
    line-height: 45px;
  }

  .form_select {
    height: 45px;
    line-height: 45px;
    width: 140px;
    border-radius: 4px;
    border: 1px solid #ccc;
  }

  .form_cover_div {
    float: left;
    width: 70%;
    margin-left: 2%;
  }

  .form_cover_div img {
    width: 88%;
    height: 320px;
  }

  .cho_cov {
    width: 70%;
    height: 60px;
    margin-top: 20px;
  }

  .cho_cov button {
    width: 150px;
    height: 50px;
    background: #F2F2F2;
    border: 1px solid #F2F2F2;
    border-radius: 6px;
    float: left;
    text-align: center;
    line-height: 50px;
  }

  .cho_cov span {
    height: 50px;
    line-height: 50px;
    margin-left: 20px;
  }

  /*选项卡*/
  .choose_type {
    height: 65px;
    width: 100%;
  }

  .choose_type ul {
    border-top: 2px solid #ccc;
    width: 100%;
  }

  .choose_type ul li {
    height: 65px;
    line-height: 50px;
    margin-left: 30px;
    float: left;
    cursor: pointer;
    margin-top: -2px;
    border-top: 2px solid #ccc;
  }

  /*特产*/
  .special {
    width: 100%;
  }

  .special ul {
    width: 98%;
    margin-left: 2%;
  }

  .special_ed, .special_ing {
    width: 23%;
    margin: 0px 2% 20px 0px;
    height: 300px;
    float: left;
  }

  .special_ed img {
    width: 100%;
    height: 200px;
  }

  .special_ed input {
    height: 30px;
    width: 100%;
    margin: 15px 0px;
    border: 1px solid #ccc;
    border-radius: 3px;
  }

  .special_ed div button {
    padding: 5px 10px;
    background: #F2F2F2;
    border-radius: 3px;
    margin-left: 33px;
    border: 2px solid #F2F2F2;
  }

  .special_ing {
    border: 2px solid #f2f2f2;
    border-radius: 4px;
  }

  .special_ing button {
    width: 43%;
    margin: 129px 30%;
    height: 40px;
    line-height: 34px;
    text-align: center;
    background: #f2f2f2;
    border-radius: 3px;
    border: 1px solid #f2f2f2;
  }

  /*美景*/
  .sight {
    width: 100%;
  }

  .sight ul {
    width: 98%;
    margin-left: 2%;
  }

  .sight_pic, .sight_vid {
    width: 23%;
    margin: 0px 2% 20px 0px;
    height: 300px;
    float: left;
    border: 2px solid #f2f2f2;
    border-radius: 4px;
  }

  .sight_pic button, .sight_vid button {
    width: 43%;
    margin: 129px 30%;
    height: 40px;
    line-height: 34px;
    text-align: center;
    background: #f2f2f2;
    border-radius: 3px;
    border: 1px solid #f2f2f2;
  }

  /*提交等按钮*/
  .form_btn {
    width: 36%;
    float: right;
    height: 60px;
    margin: 50px 0px 40px;
  }

  .form_btn input {
    height: 40px;
    line-height: 40px;
    width: 90px;
    text-align: center;
    margin-right: 20px;
    background: #FFDE3A;
    border-radius: 3px;
    border: 1px solid #FFDE3A;
  }

  /*底部*/
  .footer {
    width: 100%;
    height: 120px;
    background: #000;
    color: #fff;
    text-align: center;
    line-height: 120px;

  }
</style>
