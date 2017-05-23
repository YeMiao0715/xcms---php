@echo off
cd .>index.html
echo.{extend name="public:base"}>>index.html
echo.{block name="head"}>>index.html
echo.  ^<link rel="stylesheet" href="__ADCSS__/%1%/index.css"^>>>index.html
echo.  ^<script src="__ADJS__/%1%/index.js"^>^<^/script^>>>index.html
more +9 %0>>index.html
move index.html ../../../application/admin/view/%1
exit /b
  <link rel="stylesheet" href="__ADCSS__/public/css.css">
  <script src="__ADJS__/public/css.js"></script>
{/block}
{block name="main"}
  <div id="body">
    <div id="title">
      <h2>默认</h2>
    </div>
    <table  class="layui-table" lay-even lay-skin="nob">
      <colgroup>
        <col >
      </colgroup>
      <thead>
        <tr>
  
          <th>操作</th>
        </tr> 
      </thead>
      <tbody >
        {volist name="list" id="vo"}
          <tr>
  
            <td>
              <div class="layui-btn-group">
                <button class="layui-btn layui-btn-primary layui-btn-small edit" data="{$vo.id}">
                  <i class="layui-icon">&#xe642;</i>
                </button>
                <button class="layui-btn layui-btn-primary layui-btn-small del" data="{$vo.id}">
                  <i class="layui-icon">&#xe640;</i>
                </button>
              </div>
            </td>
          </tr>
        {/volist}
      </tbody>
    </table>
  </div>
  <input type="hidden" value="">
{/block}