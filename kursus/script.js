document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const name = document.querySelector('#contact-form input[type="text"]').value;
  const email = document.querySelector('#contact-form input[type="email"]').value;
  const message = document.querySelector('#contact-form textarea').value;

  // Simple validation
  if (!name || !email || !message) {
    alert('Please fill out all fields.');
    return;
  }

  // Simulate sending an email (you can replace this with actual backend logic)
  alert(`Thank you, ${name}! Your message has been sent.`);

  // Reset form
  event.target.reset();
});
 // scrip ke-2 untuk order produk digital
    function sendWA2() {
	let via_url = location.href;
    let browser = navigator.userAgent;
    let d = new Date();
	let name = document.getElementById('name');
	let email = document.getElementById('email');
	let pay = document.getElementById('pay');;
	let hdnmsg = document.getElementById('hdnmsg');
	let hdnmsgqty = document.getElementById('hdnmsgqty');
	let hdnmsgclr = document.getElementById('hdnmsgclr');
	let hdnmsgsize = document.getElementById('hdnmsgsize');
	let hdnmsgprod = document.getElementById('hdnmsgprod');
	let textCity = document.getElementById('text-city');
	let textQty = document.getElementById('text-qty');
	let textClr = document.getElementById('text-clr');
	let textSize = document.getElementById('text-size');
	let textProd = document.getElementById('text-prod');
	let textInput = document.getElementById('text-input');
    let mobileNumber = 6285773009666;   

	if (name.value.trim() == "") {
		name.style.background = "lightpink";
		name.style.border = "4px solid red";
		alert('Tulis nama');
		return false;
	}

	let url = `https://wa.me/${mobileNumber}?text=` + "Nama: " + name.value + "%0a" + "Email: " + email.value + "%0a" + "Kota: " + textCity.value +  "%0a"  +  hdnmsgprod.value + "%20" + textProd.value + "%0a%0a" +  hdnmsg.value + "%0a" + "%0a%0aDari: " + via_url +' %0a%0aBrowser: ' + browser +'%0A%0APada: '+d;

	window.open(url, '_blank').focus();
}
