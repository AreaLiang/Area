const Mock = require('mockjs');

let content=`<p>&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;@ctitle(25,60)</p>
<p>&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;@ctitle(25,60)<strong style='color:red'>@ctitle(5,10)</strong>，@ctitle(10,30)</p>
<p><img src="https://p26.toutiaoimg.com/origin/tos-cn-i-qvj2lq49k0/31a150ae55274dc4a995f8b8ac2d3639?from=pc" alt="" /></p>
<h1 class="pgc-h-arrow-right">@ctitle(5,6)</h1>
<p>&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;@ctitle(25,60)</p>
<p>&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;@ctitle(25,60)</p>
<p>&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;@ctitle(25,60)</p>
<p><img src="https://p26.toutiaoimg.com/origin/tos-cn-i-qvj2lq49k0/0c78f47563624be89e03cd895cb116a9?from=pc" alt="" /></p>
<p>&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;@ctitle(25,60)<strong>@ctitle(2,3)</strong>。</p>
<p>&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;@ctitle(25,60)</p>
<p>&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;@ctitle(25,60)&ldquo;@ctitle(3,4)&rdquo;，@ctitle(25,60)。</p>
<p>&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;@ctitle(25,60)&mdash;&mdash;@ctitle(3,4)。</p>
<p>&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;@ctitle(25,60)</p>
<p>&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;@ctitle(40,60)</p>`

let articleManagement = Mock.mock({
	"data|88": [{
		"title": '@ctitle(25,60)',
		"articleType|1": ['政治','体育','财经','美食','科技','娱乐'],
		'status|1': ['已发布','审核中','已下架'],
		'pageviews|0-15000': 0,
		'id': '@increment',
		'publishDate':"@datetime('yyyy-MM-dd HH:mm:ss')",
		'top':false,
		'name|1':['赖少','王小芳','李文文','陈四','张欧文','张小封','梁历史'],
		'content':content,
	}]
})
module.exports = articleManagement;

