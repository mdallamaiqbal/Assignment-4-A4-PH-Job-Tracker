let total=document.getElementById('total-job');
let interview=document.getElementById('total-interview');
let rejected=document.getElementById('total-rejected');
let totalJobs=document.getElementById('Job-list-all');

function totalCount(){
    total.innerText=totalJobs.children.length;
    
}
totalCount();
