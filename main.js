// change navbar styles on scroll



window.addEventListener('scroll',() =>{
    document.querySelector('nav').classList.toggle('window-scroll',window.scrollY > 0)
})



//showhide faq ans

const faqs = document.querySelectorAll('.faq');
faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');


        // change icon
        const icon = faq.querySelector('.faq__icon i');
        if(icon.className === 'uil uil-plus'){
            icon.className = "uil uil-minus"
        }
        else {
            icon.className = "uil uil-plus"
        }
    })
})


















const form = document.querySelector("form"),
        nextBtn = form.querySelector(".nextBtn"),
        backBtn = form.querySelector(".backBtn"),
        submitBtn = form.querySelector(".submitBtn");
        allInput = form.querySelectorAll(".first input");


nextBtn.addEventListener("click", ()=> {
    allInput.forEach(input => {
        if(input.value != ""){
            form.classList.add('secActive');
        }else{
            form.classList.remove('secActive');
        }
    })
})

backBtn.addEventListener("click", () => form.classList.remove('secActive'));


submitBtn.addEventListener("click", (e) => {
    e.preventDefault();

    // Save form data on Pageclip
    const data = new FormData(form);
    fetch('https://send.pageclip.co/<your-pageclip-page-id>', {
        method: 'POST',
        body: data
    })
    .then(() => {
        // Reset the form after submission
        form.reset();
        form.classList.remove('secActive');
        alert("Form submitted successfully!");
    })
    .catch(error => {
        console.error(error);
        alert("There was an error submitting the form.");
    })
})

