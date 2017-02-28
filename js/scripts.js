function Ticket(movie, time, age) {
  this.movie=movie;
  this.time=time;
  this.age=age;
}

Ticket.prototype.ticketPrice = function() {
  return this.movie+this.time+this.age;
}


$(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var inputtedMovie = $("#movie").val();
    var inputtedTime = parseInt($("#time").val());
    var inputtedAge = parseInt($("#age").val());
    var originalMovie= $("#movie").val();
    console.log(inputtedMovie);
    var ticket = new Ticket(inputtedMovie, inputtedTime, inputtedAge);
    // var ticketticket.ticketPrice());

  })
})
