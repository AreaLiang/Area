let user_info = [{
		id: 1,
		account: "admin",
		password: "1",
		accountType: "admin",
		name: '超级管理员',
		status: '正常'
	},
	{
		id: 2,
		account: "2",
		password: "2",
		accountType: "super_editor",
		name: '管理员',
		status: '正常'
	},
	{
		id: 3,
		account: "3",
		password: "3",
		accountType: "editor",
		name: '编辑者',
		status: '正常'
	},
	{
		id: "ew21",
		account: "123224",
		password: "12123",
		accountType: "editor",
		name: '编辑者',
		status: '已禁用'
	},
	{
		id: "gswx",
		account: "a4312251",
		password: "12321",
		accountType: "editor",
		name: '编辑者',
		status: '正常'
	}
]

const permissionNameList = [{
	id: 1,
	child: [{
			id: 100,
			name: '文章管理',
			child: [
				{
					id: 101,
					name: '文章审核',
					roles:true
				}
			]
		},
		{
			id: 200,
			name: '机构管理',
			child: [{
					id: 201,
					name: '用户管理',
					roles:true
				},
				{
					id: 202,
					name: '角色管理',
					roles:true
				},
				{
					id: 203,
					name: '账号申请',
					roles:true
				}
			]
		}
	],
}];

let roleList = [{
		id:1,
		accountType: 'admin',
		permissionList: [1,101, 201, 202, 203], //权限表，根据permissionNameList里面的索引来返回
		Description: '超级管理员，拥有所有权限的，唯一的账号'
	},
	{	
		id:2,
		accountType: 'super_editor',
		permissionList: [1,101, 201, 203],
		Description: '管理员，拥有文章审批，用户密码修改，发布文章权限'
	},
	{	
		id:3,
		accountType: 'editor',
		permissionList: [1],
		Description: '作者，发表文章权限'
	}
];

module.exports = {
	user_info,
	roleList,
	permissionNameList
};
