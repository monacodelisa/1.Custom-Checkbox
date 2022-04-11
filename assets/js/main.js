const input = document.querySelectorAll('.custom-checkbox input[type="checkbox"]');
const customCheckbox = document.querySelectorAll(".custom-checkbox");

// in case input is nested in a div think of another direct selector - try directly custom-checkbox
// Element.closest()

input.forEach((el) => {
	el.addEventListener("change", (ev) => {
   if (ev.target.checked) {
			ev.target.closest(".custom-checkbox").classList.add("active");
    }

    // else if (ev.target.classList.contains("disabled") && ev.target.classList.contains("active")) {
		// 	ev.target.closest(".custom-checkbox").classList.add("disabled");

		// } 
		
		else {
			ev.target.closest(".custom-checkbox").classList.remove("active");
		}
  });		
});



// input.forEach((el) => {
// 	el.addEventListener("change", (ev) => {
//    if (ev.target.checked) {
// 			ev.target.closest(".custom-checkbox").classList.add("active");
// 		} else {
// 			ev.target.closest(".custom-checkbox").classList.remove("active");
// 		}
//   });		
// });


// input.forEach((el) => {
// 	el.addEventListener("change", (ev) => {
//    if (ev.target.checked) {
// 			ev.target.parentNode.classList.add("active");
// 		} else {
// 			ev.target.parentNode.classList.remove("active");
// 		}
//   });		
// });




// input.forEach((el) => {
// 	el.addEventListener("click", (ev) => {
//     ev.target.parentNode.classList[ ev.target.checked ? 'add' : 'remove'] ('active');
//   });	
	
// 		//el.classList.toggle("active");				
// });



// input.forEach((el) => {
// 	el.addEventListener("click", (ev) => {
//     ev.target.parentNode.classList[ ev.target.checked ? 'add' : 'remove'] ('active');
//   }, false);					
// 		//el.classList.toggle("active");				
// });

// label.forEach((el) => {
// 	el.addEventListener("click", () => {
// 		//el.classList.toggle("active");
		
		// if (input.checked) {
		// 	el.parentElement.classList.add("active");
		// 	} 
		// else {
		// 	el.parentElement.classList.remove("active");
		// }			
		
		// if (input.checked) {
		// 	el.classList.add("active");
		// 	} 
		// else {
		// 	el.classList.remove("active");
		// }			
// 	});
// });


// function createCustomChkBox(checkboxEl) {
// 	const checkboxLabel = checkboxEl.parentElement
//     // logic comes here
// }


// customCheckbox.forEach((el) => {
// 	el.addEventListener("click", () => {
// 		if (input.checked) {
// 			el.classList.add("active");
// 		} else {
// 			el.classList.remove("active");
// 		}		
// 	});
// });

// customCheckbox.forEach((el) => {
// 	el.addEventListener("click", () => {
// 		el.classList.add("active");
// 	});
// });

// for (i = 0; i < customCheckbox.length; i++) {
// 	customCheckbox[i].addEventListener("click", function () {
// 		customCheckbox.classList.add("active");
// 	});
// }

// for (const checkbox of customCheckbox) {
// 	checkbox.addEventListener("click", function (event) {
// 		if (input.checked) {
// 		checkbox.classList.add("active");
// 		}
// 	});
// }
