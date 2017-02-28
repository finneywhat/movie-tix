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
    var inputtedMovie = parseInt($("#movie").val());
    var inputtedTime = parseInt($("#time").val());
    var inputtedAge = parseInt($("#age").val());

    var ticket = new Ticket(inputtedMovie, inputtedTime, inputtedAge);

    var ticketOutput = ticket.ticketPrice();

    if (!inputtedMovie || !inputtedTime || !inputtedAge) {
      $(".alert").show();
      $("#outputText").hide();
    } else {
      $(".alert").hide();
      $("#outputText").show();
      $("#priceOfTicket").text(ticketOutput);
      $("#movie").val("");
      $("#time").val("");
      $("#age").val("");
    };

  });
});


// function ticketLogic () {
//   if(ticket.movie === "La La Land") {
//     total=total+2;
//
//   }
//   else {
//     if(ticket.time !== "11:00 a.m.") {
//       if(ticket.age === "whatever") {
//         total=
//       } else {
//         return
//       }
//     }
//   }
// }
