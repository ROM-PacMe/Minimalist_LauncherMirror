var thehours = new Date().getHours();

//Moment.js is being used to display a live time feed

function update_date() {
  $('.time').html(moment().format('LT'));
	$('.date').html(moment().format('dddd DD-MM YYYY'));
}
setInterval(update_date, 1000);