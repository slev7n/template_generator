const fs 	= require('fs'),
	args 	= process.argv.slice(2),
	maindir = args[0] || 'new_project',
 	jsdir   = maindir  + '/js',
	cssdir  = maindir  + '/css',
	imgdir  = maindir  + '/img';

fs.existsSync(maindir) || fs.mkdirSync(maindir);
fs.existsSync(jsdir)   || fs.mkdirSync(jsdir);
fs.existsSync(cssdir)  || fs.mkdirSync(cssdir);
fs.existsSync(imgdir)  || fs.mkdirSync(imgdir);

let html = '<!DOCTYPE html>\n<html>\n<head>\n<title></title>\n<meta charset="UTF-8">\n<link rel="stylesheet" href="css/style.css">\n</head>\n<body>\n<script src="js/script.js"></script>\n</body>\n</html>',
	js   = '',
	css  = '',
	package = '{\n\t"scripts": {\n\t\t"start": "browser-sync start --server --port 777 --directory --files \'**/*.html, **/*.css, **/*.js\'"\n\t}\n}';

createFile(maindir, 'index.html', html);
createFile(maindir, 'package.json', package);
createFile(jsdir, 'script.js', js);
createFile(cssdir, 'style.css', css);

function createFile(dir, name, content) {
	fs.writeFile(dir + '/' + name, content, {flag: 'wx'}, function(err) {
		if(err)
			console.log(err);
		else
			console.log(name, 'created..');
	});
}