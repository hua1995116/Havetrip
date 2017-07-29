<template>
  <div class="midr">
    <div class="midr1 mid1">
      <span><a href="##">我的游记</a></span>
      <span class="active"><a href="##">发布游记</a></span>
    </div>
    <div class="midr2 content" style="display: none">
      <div class="cell">
        <a href="##">
          <img src="images/yj1.jpg">
          <p class="title">我的第一篇游记计算机计算机计算机技术</p>
        </a>
        <p class="time">2017/7/2<span><a href="##">删除</a></span></p>
      </div>
      <div class="cell">
        <a href="##">
          <img src="images/yj1.jpg">
          <p class="title">我的第一篇游记计算机计算机计算机技术</p>
        </a>
        <p class="time">2017/7/2<span><a href="##">删除</a></span></p>
      </div>
      <div class="cell">
        <a href="##">
          <img src="images/yj1.jpg">
          <p class="title">我的第一篇游记计算机计算机计算机技术</p>
        </a>
        <p class="time">2017/7/2<span><a href="##">删除</a></span></p>
      </div>
      <div class="cell">
        <a href="##">
          <img src="images/yj1.jpg">
          <p class="title">我的第一篇游记计算机计算机计算机技术</p>
        </a>
        <p class="time">2017/7/2<span><a href="##">删除</a></span></p>
      </div>
      <div class="cell">
        <a href="##">
          <img src="images/yj1.jpg">
          <p class="title">我的第一篇游记计算机计算机计算机技术</p>
        </a>
        <p class="time">2017/7/2<span><a href="##">删除</a></span></p>
      </div>
      <div class="cell">
        <a href="##">
          <img src="images/yj1.jpg">
          <p class="title">我的第一篇游记计算机计算机计算机技术</p>
        </a>
        <p class="time">2017/7/2<span><a href="##">删除</a></span></p>
      </div>
      <div class="cell">
        <a href="##">
          <img src="images/yj1.jpg">
          <p class="title">我的第一篇游记计算机计算机计算机技术</p>
        </a>
        <p class="time">2017/7/2<span><a href="##">删除</a></span></p>
      </div>
      <div class="cell">
        <a href="##">
          <img src="images/yj1.jpg">
          <p class="title">我的第一篇游记计算机计算机计算机技术</p>
        </a>
        <p class="time">2017/7/2<span><a href="##">删除</a></span></p>
      </div>
      <div class="cell">
        <a href="##">
          <img src="images/yj1.jpg">
          <p class="title">我的第一篇游记计算机计算机计算机技术</p>
        </a>
        <p class="time">2017/7/2<span><a href="##">删除</a></span></p>
      </div>
      <div class="cell">
        <a href="##">
          <img src="images/yj1.jpg">
          <p class="title">我的第一篇游记计算机计算机计算机技术</p>
        </a>
        <p class="time">2017/7/2<span><a href="##">删除</a></span></p>
      </div>
      <div class="cell">
        <a href="##">
          <img src="images/yj1.jpg">
          <p class="title">我的第一篇游记计算机计算机计算机技术</p>
        </a>
        <p class="time">2017/7/2<span><a href="##">删除</a></span></p>
      </div>


    </div>
    <div class="midr3 content">
      <form action="##">
        <p class="formtr formtrp">
          <span>标题：</span>
          <input type="text" class="text-input" id="name">
        </p>
        <p class="formtr formtrp">
          <span>隶属：</span>
          <select name="" id="location" class="select">
            <option value="1">地铺镇</option>
            <option value="2">杭垓镇</option>
            <option value="3">孝丰镇</option>
            <option value="4">皈山乡</option>
            <option value="5">良朋镇</option>
            <option value="6">鄣吴镇</option>
            <option value="7">高禹镇</option>
            <option value="8">梅溪镇</option>
            <option value="9">溪龙乡</option>
            <option value="10">昆铜乡</option>
            <option value="11">章村镇</option>
            <option value="12">报福镇</option>
            <option value="13">上野乡</option>
            <option value="14">天荒坪镇</option>
            <option value="15">山川乡</option>
          </select>
        </p>
        <div class="formtr formtrImg">
          <span>封面：</span>
          <img src="images/yj1.jpg" alt="">
          <br>
          <span>　　　</span>
          <a href="" class="a-file-btn-input">
            <w>请选择图片</w>
            <input type="file" class="file-btn-input" id="mainPic" multiple="multiple">
          </a>
        </div>
        <div class="formtr formtrImg">
          <span>正文：</span>
          <textarea name="" id="" cols="100" rows="30"></textarea>
        </div>
        <p>
          <span>　　　</span>
          <input type="submit" value="发表" class="btn">
          <input type="button" value="预览" class="btn">
          <input type="reset" value="重置" class="btn btn-gray">
        </p>

      </form>
    </div>
    <div style="clear:both"></div>
  </div>
</template>
<script>
  export default {}
</script>
<style lang="stylus">
  .midr .midr2 .cell {
    width: 25%;
    height: 260px;
    float: left;
    padding: 20px 20px 0px 0px;
    box-sizing: border-box;
  }

  .midr .midr2 .cell img {
    width: 100%;
    height: 180px;
  }

  .midr .midr2 .cell .title {
    width: 95%;
    height: 30px;
    line-height: 30px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding-left: 5px;
  }

  .midr .midr2 .cell .time {
    width: 100%;
    height: 30px;
    line-height: 30px;
    padding-left: 5px;
    font-size: small;
  }

  .midr .midr2 .cell .time span a {
    color: #ccc;
    display: inline-block;
    float: right;
    font-size: small;
  }
</style>
