Router.configure({
   layoutTemplate: 'layout'  //can be any template name
 });
Router.route('/',function () {
	// our home page
	this.render('home');
});
//route for projects
Router.route('/projects',function () {
	
	this.render('projects');
});
//route for news
Router.route('/news',function () {

	this.render('news');
});
