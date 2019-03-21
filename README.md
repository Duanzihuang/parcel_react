# parcel_react
基于Parcel打包的React项目

### Parcel

> 基本概念

```
极速零配置Web应用打包工具
```

> 使用步骤

```
安装全局包 
	npm install -g parcel-bundler
```

### Parcel + React

> 步骤

```
1、创建 src 下面的源代码
	index.js
	App.jsx
	
2、在项目根目录创建 .babelrc 配置文件，并且写好配置，该配置是用来支持解析JSX语法
	{
      "presets": ["@babel/preset-react"]
    }
    
3、写好 public 下面的 index.html
	写一个 id=root 的div
	导入 src/index.js

4、在package.json的scripts中配置打包脚本
	"start": "parcel public/index.html"
	
5、切换到根目录运行
	npm run start
```

