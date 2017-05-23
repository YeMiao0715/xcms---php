cd .>%2.html
echo.{extend name="public:base"}>>%2.html
echo.{block name="head"}>>%2.html
echo.  ^<link rel="stylesheet" href="__ADCSS__/%1/%2.css"^>>>%2.html
echo.  ^<script src="__ADJS__/%1/%2.js"^>^<^/script^>>>%2.html
more +8 %0>>%2.html
move %2.html ../../../application/admin/view/%1
exit /b
<link rel="stylesheet" href="__ADCSS__/public/css.css">
  <script src="__ADJS__/public/css.js"></script>
{/block}
{block name="main"}
{/block}