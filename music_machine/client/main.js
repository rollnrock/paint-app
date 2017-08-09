// set up the iron router
Router.configure({
  layoutTemplate: 'ApplicationLayout'
});


// 'home' page
Router.route('/', function(){
  console.log("debug: you hit / ");
  this.render("dashboard", {to:"main"});  
});
