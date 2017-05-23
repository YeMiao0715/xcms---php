@echo off
cd .>^edit.html
echo.{extend name="public:base"}>>^edit.html
echo.{block name="head"}>>^edit.html
echo.  ^<link rel="stylesheet" href="__ADCSS__/%1%/edit.css"^>>>^edit.html
echo.  ^<script src="__ADJS__/%1%/edit.js"^>^<^/script^>>>^edit.html
more +9 %0>>^edit.html
move ^edit.html ../../../application/admin/view/%1
exit /b
  <link rel="stylesheet" href="__ADCSS__/public/css.css">
  <script src="__ADJS__/public/css.js"></script>
{/block}
{block name="main"}
<div id="body">
  <div id="title">
    <h2>标题</h2>
  </div>
  <form class="layui-form"  method="post" action="">
    <div class="layui-form-item">
      <label class="layui-form-label">默认</label>
      <div class="layui-input-block">
        <input type="text" name="" placeholder="默认" autocomplete="off" class="layui-input">
      </div>
    </div>
    <div class="layui-form-item">
      <div class="layui-input-block">
        <button class="layui-btn" lay-submit lay-filter="formDemo">立即修改</button>
      </div>
    </div>
  </form>
</div>
{/block}