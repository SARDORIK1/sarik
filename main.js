import './style.css'

const form = document.querySelector('#createUserForm');
const output = document.querySelector('#output');


const users = [];

function writeOutput(value) {
    output.innerHTML += `<li> ${value} </li>`
}
function del (index) {
    let del_catergory =this.tesks[index].catid
    this.tesks.splice(index, 1);
    for(cat of this.categories){
        if(del_catergory == cat.id){
            cat.taskCount--;
        }
    }
};

form.eddEventListener('submit',function (event){
    event.preventDefault();
    const name = event.target.elements.firstname.value;
    users.push(name);
    writeOutput(name);
    event.target.reset();
});