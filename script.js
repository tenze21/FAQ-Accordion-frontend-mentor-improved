const disclosures=document.querySelectorAll(".js-disclosure");
const answers=document.querySelectorAll(".answer");

function toggleDisclosure(){
    const isExpanded= this.getAttribute('aria-expanded')==='true';
    this.setAttribute('aria-expanded', !isExpanded);
}

disclosures.forEach(component=>{
    component.dataset.state= 'ready';
    const disclosureButtons=component.querySelectorAll('.js_disclosure_btn');
    disclosureButtons.forEach(btn=>{
        btn.removeAttribute('title');
        btn.removeAttribute('disabled');

        btn.addEventListener('click', toggleDisclosure);
    })
})