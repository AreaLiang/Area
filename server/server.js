let express = require('express');
const Mock = require('mockjs');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const formidable = require('formidable');
const fs = require("fs");
var path = require("path");


const areaArray = require('./areaList');
const articleArray = require('./article');
const searchArray = require('./search');
const hotList = require('./hotList');
const articleManagement = require('./articleManagement');
const {stringify} = require('querystring');
let {user_info,roleList,permissionNameList} =require('./userInfo')
const { create } = require('domain');
const { set } = require('express/lib/application');

const secret = 'kelexiaoyu'; // 密钥，防止篡改，我就直接一个字符串了，不用密钥生成了

let app = express();

app.use(bodyParser.urlencoded({
	extended: false
}))
app.use(bodyParser.json())
// app.use(express.json())

app.use(express.static('./')); //配置静态文件路径

/*国际手机区号*/
app.get('/areaList', (req, res) => {
	let datalist = JSON.parse(JSON.stringify(areaArray));
	let postData = new resFun(datalist, '成功');
	res.send(postData);
})

//登录
app.post('/login', (req, res) => {
	let token = createToken('', 3600);
	let postData = new resFun(req.body, "成功");
	if (req.body.userId == "user001" && req.body.passWord == "ab12345") {

		let userInfo = Mock.mock({
			"aa|5": [{
				"number|1-100": 60,
				"city|1": {
					"310000": "上海市",
					"320000": "江苏省",
					"330000": "浙江省",
					"340000": "安徽省",
					"350000": "广东省",
					"360000": "湖北省"
				},
				'phone|1': req.body.userId,
				'data': '@datetime',
				'id': '@increment'
			}]
		})

		postData.data = Object.assign(postData.data, userInfo);
		postData.token = token;

		res.send(postData);
	} else {
		res.send(postData.fail("账号或者密码错误"));
	}
})

//用户信息校验
app.post('/checkInfo', (req, res) => {
	console.log(tokenExp({
		...req.headers
	}.authorization).time)
	let token = {
		...req.headers
	}.authorization;
	if (tokenExp(token).value) {
		let postData = new resFun(req.body, "成功");
		let userInfo = Mock.mock({
			"aa|5": [{
				"number|1-100": 60,
				"city|1": {
					"310000": "上海市",
					"320000": "江苏省",
					"330000": "浙江省",
					"340000": "安徽省",
					"350000": "广东省",
					"360000": "湖北省"
				},
				'phone|1': "req.body.userId",
				'data': '@datetime',
				'id': '@increment'
			}]
		})

		postData.data = Object.assign(postData.data, userInfo);
		postData.token = token;


		setTimeout(() => {
			res.send(postData);
		}, 500)
	} else {
		let postData = new resFun();
		res.send(postData.fail("账号或者密码错误"));
	}

})

//获取文章列表
app.post('/article', (req, res) => {
	let data = articleArray.T1348647853363;
	let page = req.body.page || 1;
	let number = req.body.number || 5;
	let length = data.length;

	let postData = new resFun();
	let array = data.slice(number * (page - 1), number * page);
	postData.list = Math.ceil(length / number);
	postData.data = Object.assign({}, array);
	postData = Object.assign(postData, req.body);

	res.send(postData);
})

//获取视频列表
app.post('/vedio', (req, res) => {
	let data = articleArray.T1348647853363;
	let page = req.body.page || 1;
	let number = req.body.number || 5;
	let length = data.length;

	let postData = new resFun();

	data = data.filter((p) => {
		return p.boardid == "video_bbs"
	});

	let array = data.slice(number * (page - 1), number * page);

	postData.list = Math.ceil(length / number);
	postData.data = Object.assign({}, array);
	postData = Object.assign(postData, req.body);

	res.send(postData);
})

//获取 搜索内容
app.post('/search', (req, res) => {
	let data = searchArray.T1348647853363;
	let page = req.body.page || 1;
	let number = req.body.number || 5;
	let length = data.length;

	let postData = new resFun();
	let array = data.slice(number * (page - 1), number * page);
	postData.list = Math.ceil(length / number);
	postData.data = Object.assign({}, array);
	postData = Object.assign(postData, req.body);

	res.send(postData);
})

app.post('/upload', (req, res) => {


	const form = new formidable.IncomingForm();
	//设置编辑
	form.encoding = "utf-8";

	// 多文件可以传入 options 对象，设置 multiples: true
	// 详见文档：https://www.npmjs.com/package/formidable
	form.uploadDir = "./file/img" // 上传目录
	// 解析 req 并上载所有相关文件
	form.parse(req, (err, fields, files) => {
		if (err != null) {
			console.log(err)
			return res.status(400).json({
				message: err.message
			})
		}

		// files 对象包含已上载的所有文件。Formidable 将解析每个文件并为您上载到临时文件。
		const [firstFileName] = Object.keys(files)

		console.log("66", files.file)
		var dir = form.uploadDir;
		var oldpath = files.file.filepath; //临时保存路径
		var extname = path.extname(files.file.originalFilename);
		var newpath = path.join(dir, files.file.newFilename) + extname;


		fs.rename(oldpath, newpath, function(err) {
			if (err) {
				console.log("改名失败")
			} else {
				console.log("改名成功")
			}
		})

		res.json({
			filename: newpath
		})
	})

})

let hotlist = hotList //保存上传过来的文章

//用户发布文章
app.post('/hotList', (req, res) => {
	let req_article = req.body;
	let id = hotlist.length;
	req_article.id = id + 1

	hotlist.unshift(req_article);

	//返回信息
	let sendData = new resFun(hotlist, '提交成功');
	res.send(sendData);
})

//获取热门文章内容
app.post('/getHotList', (req, res) => {

	let data = hotlist;
	let page = req.body.page || 1;
	let number = req.body.number || 5;
	let length = data.length;

	let postData = new resFun();
	let array = data.slice(number * (page - 1), number * page);
	postData.list = Math.ceil(length / number);
	postData.data = Object.assign({}, array);
	postData = Object.assign(postData, req.body);

	res.send(postData);
})

let areaBackToken='';
//后台登录
app.post('/areaBackLogin', (req, res) => {
	
	let {account,password}=req.body;
	let currentAccount={};//保存账号的资料
	let isPass=user_info.some((item)=>{
		if(item.account===account && item.password===password){
			currentAccount=item;
			currentAccount.roleList=roleList.filter((p)=>{
				return p.accountType==item.accountType;
			})
			return true;
		}
	});
	let completeData=commonPost.success(currentAccount);
	let token = createToken(currentAccount, 3600);
	completeData.token=token;
	areaBackToken=token;
	
	if(isPass){
		res.send(completeData);
	}else{
		res.send(commonPost.fail());
	}
})

//后台用户信息校验
app.post('/areaBackCheckUserInfo',(req,res)=>{
	
	let {token} =req.body;
	// console.log(verifyToken(token),tokenExp(token));
	if(tokenExp(token).value){
		let solve=verifyToken(token);
		let {account,password}=solve.obj.data;
		let currentAccount={};//保存账号的资料
		let isPass=user_info.some((item)=>{
			if(item.account===account && item.password===password){
				currentAccount=item;
				currentAccount.roleList=roleList.filter((p)=>{
					return p.accountType==item.accountType;
				})
				return true;
			}
		});
		
		let completeData=commonPost.success(currentAccount);
		completeData.token=token;
		
		if(isPass){
			res.send(completeData);
		}else{
			res.send(commonPost.fail());
		}
	}else{
		res.send(commonPost.fail('登录过时'));
	}
})

//获取 文章管理 内容
app.post('/articleManagement', (req, res) => {
	let token=req.headers.authorization;
	if( areaBackToken===token && tokenExp(token).value){
		let data = articleManagement.data;
		let page = req.body.page || 1;
		let number = req.body.number || 5;
		let length = data.length;
		
		let postData = new resFun();
		let array = data.slice(number * (page - 1), number * page);
		postData.list = Math.ceil(length / number);
		postData.data = Object.assign({}, array);
		postData = Object.assign(postData, req.body);
		res.send(postData);
	}else{
		res.send(commonPost.exp());
	}
	
})


//获取 文章管理 搜索内容
app.post('/articleMgeSearch', (req, res) => {

	let data = articleManagement.data;
	let search_val = JSON.parse(req.body.searchList);

	if (search_val.content) {
		let reg = new RegExp(search_val.content);
		data = data.filter((p) => {
			return reg.test(p.title)
		});
	}

	if (search_val.statusType != 'all') {
		data = data.filter((p) => {
			return p.status == ArtMegSelectChange(search_val.statusType)
		});
	}

	if (search_val.articleType != 'all') {
		data = data.filter((p) => {
			return p.articleType == ArtMegSelectChange(search_val.articleType)
		});
	}

	if (search_val.dateRange.length > 0) {
		data = data.filter((p) => {
			let start = search_val.dateRange[0];
			let end = search_val.dateRange[1];

			const regFun = (val) => {
				let reg = new RegExp('-', 'g');
				return parseInt(val.replace(reg, ''));
			}

			start = regFun(start);
			end = regFun(end);

			return start <= regFun(p.publishDate) && regFun(p.publishDate) <= end;
		});

	}

	let page = req.body.page || 1;
	let number = req.body.number || 5;
	let length = data.length;

	let postData = new resFun();
	let array = data.slice(number * (page - 1), number * page);
	postData.list = Math.ceil(length / number);
	postData.data = Object.assign({}, array);
	postData = Object.assign(postData, req.body);

	res.send(postData);
})

//文章管理 下架功能和重新发布功能
app.post('/artMegDown', (req, res) => {
	let data = req.body;
	for (let item of articleManagement.data) {
		if (item.id == data.id) {
			if (data.opcode == '-1') {
				item.status = '已下架';
			} else if (data.opcode == '1') {
				item.status = '审核中';
			}
		}
	}
	let postData = new resFun(data);
	res.send(postData);
})

//文章管理 删除功能
app.post('/artMegDel', (req, res) => {
	let data = req.body;
	let delList;
	if(req.body.delList) delList=JSON.parse(req.body.delList);
	let map = new Map(Object.entries(articleManagement.data));


	for (let [key, item] of Object.entries(articleManagement.data)) {

		if (delList) { //批量删除
			for (let id of delList) {
				if (id == item.id) {
					map.delete(key);
				}
			}
			articleManagement.data = [...map.values()];
		} else { //单独删除
			if (item.id == data.id) {
				map.delete(key);
				articleManagement.data = [...map.values()];
			}
		}
	}

	let postData = new resFun(articleManagement.data, '删除成功');
	res.send(postData);
})

//文章管理 根据id 查询对应的文章
app.post('/queryArticle', (req, res) => {
	let data = req.body;
	let postData;
	for (let item of articleManagement.data) {
		if (item.id == data.id) {
			postData = new resFun(item, '查询成功');
		}
	}

	res.send(postData || '没有对应的数据');
})

//获取 文章审核 内容
app.post('/getVerifyArticleList', (req, res) => {

	let data = articleManagement.data;
	data = data.filter((p) => {
		return p.status == '审核中'
	})
	let page = req.body.page || 1;
	let number = req.body.number || 5;
	let length = data.length;

	let postData = new resFun();
	let array = data.slice(number * (page - 1), number * page);
	postData.list = Math.ceil(length / number);
	postData.data = Object.assign({}, array);
	postData = Object.assign(postData, req.body);

	res.send(postData);
})

//文章管理 审核通过功能和审核不通过功能
app.post('/articleVerify', (req, res) => {
	let data = req.body;
	for (let item of articleManagement.data) {
		if (item.id == data.id) {
			console.log(req.body)
			if (data.opcode == '0') {
				item.status = '审核失败';
			} else if (data.opcode == '1') {
				item.status = '已发布';
			}
		}
	}
	let postData = new resFun(data);
	res.send(postData);
})


//机构管理 添加用户
app.post('/addAccount', (req, res) => {
	
	let data = req.body;
	let info = {
		account: data.account,
		password: data.password,
		accountType: 'editor',
		status: '正常',
		name:data.name,
		id:data.id
	}
	user_info.push(info);
	
	let postData = new resFun();
	res.send(postData);
})

//机构管理 用户列表
app.post('/getAccountList', (req, res) => {
	let data = user_info;
	
	let page = req.body.page || 1;
	let number = req.body.number || 5;
	let length = data.length;
	
	let postData = new resFun();
	let array = data.slice(number * (page - 1), number * page);
	postData.list = Math.ceil(length / number);
	postData.data = Object.assign({}, array);
	postData = Object.assign(postData, req.body);
	
	res.send(postData);
})

//机构管理 用户和用户权限
app.get('/getPermissionInfo', (req, res) => {
	let reset={
		user_info:user_info,
		permissionNameList:permissionNameList,
		roleList:roleList
	}
	
	let postData = new resFun(reset);
	res.send(postData);
})

//用户管理 禁用账号功能
app.post('/banAccount', (req, res) => {
	let {id,opCode}=req.body;
	
	if(id && opCode){
		user_info.map((item)=>{
			if(item.id==id){
				if(opCode== 0){
					item.status= "已禁用";
				}else if(opCode== 1){
					item.status= "正常";
				}
			}
		})
		res.send(commonPost.success());
	}

})

//用户管理 删除 账号功能
app.post('/delAccount_PER', (req, res) => {
	let {id}=req.body;
	if(id){
		user_info.some((item,index)=>{
			if(item.id==id){
				user_info.splice(index,1);
				return;
			}
		})
		res.send(commonPost.success());
	}
})

//用户管理 修改 账号功能
app.post('/modifyAccount_PER', (req, res) => {
	let {id,password}=req.body;
	if(id && password){
		user_info.map((item)=>{
			if(item.id==id){
				item.password=password;
			}
		})
		res.send(commonPost.success());
	}else{
		res.send(commonPost.fail());
	}
})

let server = app.listen(5000, () => {
	console.log("应用实例，访问地址为http://localhost:5000/")
})

//ES 6构造函数，用于成功返回用户数据
class resFun {
	constructor(data, mes) {
		this.data = data;
		this.mes = mes ||'';
		this.token = "";
		this.code = "200";
	}
	fail(errorMes) {
		return {
			data: {},
			mes: errorMes,
			code: "0"
		}
	}
	success(data,successMes){
		return {
			data: data || '',
			mes: successMes || '成功',
			code: this.code
		}
	}
	exp(){
		return {
			mes: "用户信息过期",
			code: "-1"
		}
	}
}

let commonPost=new resFun();//常规 返回前端信息

// 生成方法---data是自定义信息，exp是传的过期时间
let createToken = function(data, exp) {
	let obj = {};
	obj.data = data ? data : null;
	obj.type = 'jsonwebtoken'; // 加个类型哈哈
	obj.ctime = new Date().getTime(); //token的创建时间
	// obj.exp = Math.floor(Date.now() / 1000) + 60 * 60; // 如果直接放在data这里，要这样设置过期时间，并且这样设置过期时间要加上当前时间从1970开始算，所以要用当前时间 + 过期时间，单位毫秒，除1000换成s
	// 用expiresIn就不用，直接设置过期时间
	exp = exp ? exp : 60 * 60 * 24; //设定的过期时间,不设置就默认1天 

	let token = jwt.sign(obj, secret, {
		expiresIn: exp
	}); // 调用方法生成
	return token;
};

// 验证，传入token
let verifyToken = function(token) {
	var info = jwt.verify(token, secret, (error, res) => {
		var data = {}; // 通过回调函数自定义返回信息，不然默认是创建token时传进去的obj和时间信息，这里加上状态码这些
		if (error) {
			data.code = '606'; // 自个定义失败码
			data.msg = 'token验证失败';
			data.obj = error; // 存失败信息，比如过期等
		} else {
			data.code = '608';
			data.msg = 'token验证成功';
			data.obj = res;
		}
		return data;
	});
	return info; // 就是我们修改后的data
};

//计算剩余时间
function tokenExp(token) {
	let verify = verifyToken(token);
	let time = parseInt((new Date().getTime()) / 1000);

	let res = {
		'value': verify.obj.exp - time,
		'time': `剩余${verify.obj.exp - time}秒`
	}
	return res;
}

//文章管理 状态、文章类型 中文转拼音 
function ArtMegSelectChange(val) {
	const obj = {
		'yfb': '已发布',
		'yxj': '已下架',
		'shz': '审核中',
		'zhengzhi': '政治',
		'tiyu': '体育',
		'caijing': '财经',
		'keji': '科技',
		'yule': '娱乐',
		'meishi': '美食'
	}

	let map = new Map(Object.entries(obj));

	return map.has(val) ? map.get(val) : '';
}
