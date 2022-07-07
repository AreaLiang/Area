let user_info=[{
	id:1,
	account: "1",
	password: "1",
	accountType: "admin",
	name:'超级管理员',
	status:'正常'
},
{
	id:2,
	account: "2",
	password: "2",
	accountType: "manager",
	name:'管理员',
	status:'正常'
},
{
	id:3,
	account: "3",
	password: "3",
	accountType: "editor",
	name:'编辑者',
	status:'正常'
},
{
	id:"ew21",
	account: "123224",
	password: "12123",
	accountType: "editor",
	name:'编辑者',
	status:'已禁用'
},
{
	id:"gswx",
	account: "a4312251",
	password: "12321",
	accountType: "editor",
	name:'编辑者',
	status:'正常'
}]

const permissionNameList=["审核文章", "添加账号", "发布文章", "所有文章管理", "账号申请审批"];
let roleList=[{
	accountType:'admin',
	permissionList:[0,1,2,3,4],//权限表，根据permissionNameList里面的索引来返回
	Description: '超级管理员，拥有所有权限的，唯一的账号'
},
{
	accountType:'manager',
	permissionList:[0,1,2,4],
	Description: '管理员，拥有文章审批，用户密码修改，发布文章权限'
},
{
	accountType:'editor',
	permissionList:[2],
	Description: '作者，发表文章权限'
}];

module.exports= {user_info,roleList,permissionNameList};