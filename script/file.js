let interviewList = [];
let rejectedList = [];
let allButton='all-btn';
//header section btn
let total = document.getElementById('total-job');
let interview = document.getElementById('total-interview');
let rejected = document.getElementById('total-rejected');
//main section btn
const allBtn = document.getElementById('all-btn');
const interviewBtn = document.getElementById('interview-btn');
const rejectedBtn = document.getElementById('rejected-btn');
//main section id
const mainContainer = document.getElementById('main-container');
//card section btn
const totalJobs = document.getElementById('Job-list-all');
//No job section
const noJOb=document.getElementById('no-job');
//filter id
const filterJobs = document.getElementById('filter-jobs');
//span
const jobSpan=document.getElementById('total-job-count');
//header section function
function totalCount() {
    const allCards=totalJobs.children.length;
    total.innerText = allCards;    
    interview.innerText = interviewList.length;
    rejected.innerText = rejectedList.length;
}
totalCount();

//update total count
function updateTotalJobs(){
    const totalCards=totalJobs.children.length;
    jobSpan.innerText=totalCards;
}
updateTotalJobs()
//main section toggling button for color change 
function toggleBtn(id) {
    allBtn.classList.remove('bg-[#3B82F6]', 'text-white');
    interviewBtn.classList.remove('bg-[#3B82F6]', 'text-white');
    rejectedBtn.classList.remove('bg-[#3B82F6]', 'text-white');
    allBtn.classList.add('bg-[#FFF]', 'text-black');
    interviewBtn.classList.add('bg-[#FFF]', 'text-black');
    rejectedBtn.classList.add('bg-[#FFF]', 'text-black');
    const selected = document.getElementById(id);
    allButton=id;
    selected.classList.remove('bg-[#FFF]', 'text-black');
    selected.classList.add('bg-[#3B82F6]', 'text-white');
    if(id =='interview-btn'){
        totalJobs.classList.add('hidden');
        filterJobs.classList.remove('hidden');
        interviewSection();
    }else if(id == 'all-btn'){
        filterJobs.classList.add('hidden');
        totalJobs.classList.remove('hidden');
    }else if(id == 'rejected-btn'){
         totalJobs.classList.add('hidden');
        filterJobs.classList.remove('hidden');
        rejectedSection();
    }
    NoJobToggle();
}
//No job toggle function
function NoJobToggle(){
 const totalCards=totalJobs.children.length;
 if(totalCards===0){
    noJOb.classList.remove('hidden');
 }else{
    noJOb.classList.add('hidden');
 }
 if(allButton=='interview-btn'){
    if(interviewList.length===0){
        noJOb.classList.remove('hidden');
    }else{
        noJOb.classList.add('hidden');
    }
 }else if(allButton=='rejected-btn'){
    if(rejectedList.length===0){
        noJOb.classList.remove('hidden')
    }else{
        noJOb.classList.add('hidden')
    }
 }
}
NoJobToggle();
//card section button event
mainContainer.addEventListener('click', function (event) {
    if (event.target.id==='app-interview-btn') {
        const parentNode = event.target.parentNode.parentNode;
        const CompanyName = parentNode.querySelector('.CompanyName').innerText;
        const JobTitle = parentNode.querySelector('.JobTitle').innerText;
        const JobTypeAndSalary = parentNode.querySelector('.JobTypeAndSalary').innerText;
        const totalJobsCard=totalJobs.children;
        for(let card of totalJobsCard){
        if(card.querySelector('.CompanyName').innerText==CompanyName){
        const StatusButton = card.querySelector('.StatusButton')
        StatusButton.innerText='Interview';
        StatusButton.style.border='2px solid #10B981';
        StatusButton.style.color = '#10B981';
        StatusButton.style.backgroundColor='white';
        }}       
        const Description = parentNode.querySelector('.Description').innerText;

        const JobInfo = {
            CompanyName,
            JobTitle,
            JobTypeAndSalary,
            StatusButton:'Interview',
            Description
        }
        const Job = interviewList.find(function (item) {
           return item.CompanyName == JobInfo.CompanyName;
        });
        if (!Job) {
            interviewList.push(JobInfo);
        }
        rejectedList=rejectedList.filter(function(item){
            return item.CompanyName != JobInfo.CompanyName;
        });
        
        if(allButton =='interview-btn'){
            interviewSection();
        }
         if(allButton =='rejected-btn'){
            rejectedSection();
        }
        totalCount();
        NoJobToggle();
    }else if (event.target.id==='app-rejected-btn') {
        const parentNode = event.target.parentNode.parentNode;
        const CompanyName = parentNode.querySelector('.CompanyName').innerText;
        const JobTitle = parentNode.querySelector('.JobTitle').innerText;
        const JobTypeAndSalary = parentNode.querySelector('.JobTypeAndSalary').innerText;
         const totalJobsCard=totalJobs.children;
        for(let card of totalJobsCard){
        if(card.querySelector('.CompanyName').innerText==CompanyName){
        const StatusButton = card.querySelector('.StatusButton')
        StatusButton.innerText='Rejected';
        StatusButton.style.border='2px solid #EF4444';
        StatusButton.style.color = '#EF4444';
        StatusButton.style.backgroundColor='white';
        }}  
        const Description = parentNode.querySelector('.Description').innerText;

        const JobInfo = {
            CompanyName,
            JobTitle,
            JobTypeAndSalary,
            StatusButton:'Rejected',
            Description
        }
        const Job = rejectedList.find(function (item) {
           return item.CompanyName == JobInfo.CompanyName;
        });
        if (!Job) {
            rejectedList.push(JobInfo);
        }
         interviewList=interviewList.filter(function(item){
            return item.CompanyName != JobInfo.CompanyName;
        });
        
        if(allButton =='interview-btn'){
            interviewSection();
        }
         if(allButton =='rejected-btn'){
            rejectedSection();
        }
        totalCount();
        NoJobToggle();
    }else if(event.target.closest('.delete-btn')){
        const card=event.target.closest('.card');
        const CompanyName=card.querySelector('.CompanyName').innerText;
        if(allButton=='all-btn'){
            for(let job of totalJobs.children){
            if(job.querySelector('.CompanyName').innerText ==CompanyName){
                job.remove();
                NoJobToggle();
                break
            }
        }
        }
         if(allButton =='interview-btn'){
           interviewSection();
        }
              
         if(allButton =='rejected-btn'){
           rejectedSection();
        }       
       totalCount();
    }
     
})
//header interview section function
function interviewSection() {
    filterJobs.innerHTML = '';
    for (let interview of interviewList) {
              let div = document.createElement('div');
        div.className = 'card bg-[#FFF] p-6 rounded-lg flex justify-between mb-4'
        div.innerHTML = ` <div>
             <h2 class="CompanyName text-2xl font-semibold text-[#002C5C]">${interview.CompanyName}</h2>
             <p class="JobTitle text-[#64748B] mt-1">${interview.JobTitle}</p>
             <p class="JobTypeAndSalary text-[#64748B] text-[12px] my-4">${interview.JobTypeAndSalary}</p>
             <button class="StatusButton text-[#10B981] border-2 border-[#10B981] px-3 py-2 rounded-[7px]">${interview.StatusButton}</button>
             <p class="Description text-[#323B49] text-sm my-4">${interview.Description}</p>
             <div class="flex gap-4">
            <button id="app-interview-btn" class="text-[#10B981] border-2 border-[#10B981] px-4 py-2 rounded-[5px]">Interview</button>
            <button id="app-rejected-btn" class="text-[#EF4444] border-2 border-[#EF4444] px-4 py-2 rounded-[5px]">Rejected</button>
             </div>
          </div>
          <div>
            <button class="delete-btn p-4 flex justify-center items-center w-4 h-4 border border-[#F1F2F4] text-[#64748B] rounded-full"><i class="fa-solid fa-trash"></i></button>
          </div>`
        filterJobs.appendChild(div)
    }
}
//header interview section function
function rejectedSection() {
    filterJobs.innerHTML = '';
    for (let rejected of rejectedList) {
              let div = document.createElement('div');
        div.className = 'card bg-[#FFF] p-6 rounded-lg flex justify-between mb-4'
        div.innerHTML = ` <div>
             <h2 class="CompanyName text-2xl font-semibold text-[#002C5C]">${rejected.CompanyName}</h2>
             <p class="JobTitle text-[#64748B] mt-1">${rejected.JobTitle}</p>
             <p class="JobTypeAndSalary text-[#64748B] text-[12px] my-4">${rejected.JobTypeAndSalary}</p>
             <button class="StatusButton text-[#EF4444] border-2 border-[#EF4444] px-3 py-2 rounded-[7px]">${rejected.StatusButton}</button>
             <p class="Description text-[#323B49] text-sm my-4">${rejected.Description}</p>
             <div class="flex gap-4">
            <button id="app-interview-btn" class="text-[#10B981] border-2 border-[#10B981] px-4 py-2 rounded-[5px]">Interview</button>
            <button id="app-rejected-btn" class="text-[#EF4444] border-2 border-[#EF4444] px-4 py-2 rounded-[5px]">Rejected</button>
             </div>
          </div>
          <div>
            <button  class="delete-btn p-4 flex justify-center items-center w-4 h-4 border border-[#F1F2F4] text-[#64748B] rounded-full"><i class="fa-solid fa-trash"></i></button>
          </div>`
        filterJobs.appendChild(div)
    }
}