let interviewList=[];
let rejectedList=[];
let total=document.getElementById('total-job');
let interview=document.getElementById('total-interview');
let rejected=document.getElementById('total-rejected');
const allBtn=document.getElementById('all-btn');
const interviewBtn=document.getElementById('interview-btn');
const rejectedBtn=document.getElementById('rejected-btn');
const totalJobs=document.getElementById('Job-list-all');
const mainContainer=document.getElementById('main-container');

function totalCount(){
    total.innerText=totalJobs.children.length;
    interview.innerText=interviewList.length;
    rejected.innerText=rejectedList.length;
}
totalCount();

function toggleBtn(id){
   allBtn.classList.remove('bg-[#3B82F6]','text-white');
   interviewBtn.classList.remove('bg-[#3B82F6]','text-white');
   rejectedBtn.classList.remove('bg-[#3B82F6]','text-white');
   allBtn.classList.add('bg-[#FFF]','text-black');
   interviewBtn.classList.add('bg-[#FFF]','text-black');
   rejectedBtn.classList.add('bg-[#FFF]','text-black');
   const selected=document.getElementById(id);
   selected.classList.remove('bg-[#FFF]','text-black');
   selected.classList.add('bg-[#3B82F6]','text-white');
}
