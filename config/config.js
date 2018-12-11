export default {
	plugins:[
		[
			'umi-plugin-react',{
				antd:true,
				dva:true,
			}],
	],
	routes:[{
		path:'/',
		component:'../layout',
		routes:[
			{
				path: 'helloworld',
				component: './HelloWorld'
			},
			{
				path: 'cardlist',
				component: './ContentCard'
			},
		]
	}],
};