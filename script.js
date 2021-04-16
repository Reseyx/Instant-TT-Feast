 document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems, {});
  });

  if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready(){
  var changebadge = document.getElementsByClassName('add-to-cart')
    for (var i = 0; i < changebadge.length; i++) {
        var button = changebadge[i]
        button.addEventListener('click', addtoBadge)
        console.log('clicked')
    }
}

function addtoBadge(event){
  var total=0
  total=total+1

  document.getElementsByClassName('update-badge')[0].innerText =total
}

var slideIndex = 0;
						showSlides ();
						
						function showSlides() {
							var i;
							var slides = document.getElementsByClassName("mySlides");
							var dots = document.getElementsByClassName("dot");
							for(i=0; i< slides.length; i++) {
								slides[i].style.display = "none";
							}
							slideIndex++;
							if(slideIndex > slides.length) {slideIndex = 1}
							for (i=0; i < dots.length; i++) {
								dots[i].className = dots[i].className.replace( " active", "");
							}
							slides[slideIndex-1].style.display = "block";
							dots[slideIndex-1].className += " active";
							setTimeout(showSlides,2000); //Change image every 2 seconds
						}
 