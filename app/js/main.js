(function(){
  'use strict';

var Todo = function(options){
  var args = options || {};
  this.task = args.task;
  this.status = 'open';

};
Todo.prototype.greeting = function () {
    var str = this.task + ' is '  + this.status;
        str += '<br /><br />';
    console.log(str);
};



// Todo.prototype.toggle = function () {

//     if (this.status === 'open') {
//         this.status = 'closed';
//     }else (this.status = 'open');
// };

//  Todo.prototype.add = todoform;

var bin = [];

$('#todoform').on('submit', function(e){
  e.preventDefault();

  var taskText = $("#new-text").val();
  var taskInstance = new Todo({task: taskText});

  bin.push(taskInstance);
  $("#todo").append('<li>' + taskText + '</li>');
  this.reset();
});

$('#todo').on('click', 'li', function(e){
  e.preventDefault();
  $(this).addClass("complete");

 var tTask = $(this).text();

 var textEdit = _.find(bin, {task: tTask});
 textEdit.status = 'closed';

});

$('#todo').on('click', '.complete', function(e){
  e.preventDefault();
  $(this).removeClass("complete");

 var tTask = $(this).text();

 var textEdit = _.find(bin, {task: tTask});
 textEdit.status = 'open';

});

$('#remove-button').on('click', function(){
  bin = bin.filter(function(l){
   if(l.status === 'open'){
    return l;
   }
   bin.push(l);


  });
  $('#todo').empty();
  bin.forEach(function(l){
  $("#todo").append('<li>' + l.task + '</li>');
  });

});
// Todo.prototype.toggle = function () {

//     if (this.status === 'open') {
//         this.status = 'closed';
//     }else (this.status = 'open');
// };

// function declarePrototype() {
//   if (storage.length > 8) {
//     Todo.prototype.isEmergent = true;
//     console.log("MAN that's a lot of stuff");
//   }
// }






}());
