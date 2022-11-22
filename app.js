let myLead = [];
const inputButton = document.getElementById ('input-btn');
const inputEl = document.getElementById ('input-el');
const ulEl = document.getElementById ('ul-el');

inputButton.addEventListener ("click", function (){
	myLead.push (inputEl.value);	
	inputEl.value = "";
	renderLeads ()
});

function renderLeads (){
let listItems = "";
for (let i = 0; i< myLead.length; i++){
	listItems += `
		<li>
			<a target='_blank' href='${myLead[i]}'>
				${myLead[i]}
			</a>
		
		</li>`;
}
ulEl.innerHTML = listItems;
};