const option=document.querySelectorAll(".options");
const inputPriceType=document.getElementById("price-type");
const selectOptions=document.getElementById("select-options")
const selection1=document.querySelector('.select-options');
const optionDiv=document.querySelector('.options');
const typeSearch=document.querySelector('.type-search')

window.addEventListener('click',function (e){
    const select1=document.querySelector('#price-type');
    const selection=document.querySelector('.select-options');
    const triangleOne=document.querySelector('#arrow-selection');
    const triangleTwo=document.querySelector('#arrow-selection-up');
    if(!select1.contains(e.target)){
        inputPriceType.style.borderColor='white';
        selection.style.display='none';
        triangleOne.classList.remove('arrow-selection-class');
        triangleTwo.classList.remove('arrow-selection-up-class');
    }
})

const inpContainer=document.querySelector(".input-container");
const arrowSelection=document.querySelector("#arrow-selection");
const arrowSelectionUp=document.querySelector("#arrow-selection-up");


inpContainer.addEventListener('click',function (){
    selection1.style.display='block';
    // inputPriceType.setAttribute('class','price-type-class');
    inputPriceType.style.border='1px solid #5FD36C';
    arrowSelection.setAttribute('class','arrow-selection-class');
    arrowSelectionUp.setAttribute('class','arrow-selection-up-class');
})


    for( let i=0;i<option.length;i++){
        option[i].addEventListener('click',function (){
            inputPriceType.value=this.innerText
        })
    }


const carsInput=document.querySelector('.cars-types-input');
const selectOptionsDiv=document.querySelector('.cars-types-select-options');
const carsTrOne=document.querySelector('#cars-arrow-selection');
const carTrTwo=document.querySelector('#cars-arrow-selection-up');
carsInput.addEventListener('click',function (){
    selectOptionsDiv.style.display='block';
    carsInput.style.border='1px solid #5FD36C';
    // carsInput.setAttribute('class','price-type-class');
    typeSearch.classList.remove('type-search-reset-icon');
    typeSearch.classList.add('type-search-icon');
    carsTrOne.setAttribute('class','cars-t-arrow-selection');
    carTrTwo.setAttribute('class','cars-t-arrow-selection-up');
})
window.addEventListener('click',(e)=>{
    const select=document.querySelector('#cars-types-input');
    const searchField=document.querySelector('#car-type-search')
    if(!select.contains(e.target)&!searchField.contains(e.target)){
        selectOptionsDiv.style.display='none';
        carsInput.style.borderColor='white';
        carsTrOne.classList.remove('cars-t-arrow-selection');
        carTrTwo.classList.remove('cars-t-arrow-selection-up');
    }else{
        // carsInput.style.borderColor='white';
    }
})
const searchFieldValue=document.querySelector('.cars-types-input');
const carSelections=document.querySelectorAll('.car-option');

let arr=[];
carSelections.forEach((v)=>{
    arr.push(v.textContent);
})

for(let i=0;i<carSelections.length;i++){
    carSelections[i].addEventListener('click',function (){

        searchFieldValue.value=this.textContent;

    })
}
const iconsDiv=document.querySelector('.search-icon-div');
typeSearch.addEventListener('keyup',function (){
    const carSelections=document.getElementById("car-selection-div");
    const selections=document.querySelectorAll('.car-option')
    // iconsDiv.classList.remove('search-icon-div');
    // iconsDiv.setAttribute('class','reset-icon-div');
    for(let sel of selections){
        if(!sel.textContent.includes(typeSearch.value)){
            sel.style.display='none';
            if(typeSearch.value==="")
                // typeSearch.classList.remove('type-search-reset-icon');
                // typeSearch.classList.add('type-search-icon');
                sel.style.display='block';
                sel.style.backgroundColor="white";
                sel.addEventListener('mouseover',()=>{
                    sel.style.backgroundColor='#5FD36C';
                })
                sel.addEventListener('mouseout',()=>{
                    sel.style.backgroundColor='white';
                })
            }
        }
        if(typeSearch.value===""){
            for (let sel of selections){
                sel.style.display='block';
            }
           
        }
})

const resetIcon=document.querySelector('#search-icon-div');
// if(resetIcon.className==='search-icon-div'){
//     resetIcon.addEventListener('click',()=>{
//         typeSearch.value="";
//     })
// }
resetIcon.addEventListener('click',()=>{
    if(resetIcon.className==='search-icon-div'){
        typeSearch.value="";
    }else{
        return;
    }
})
