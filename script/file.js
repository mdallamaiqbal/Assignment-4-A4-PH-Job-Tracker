let interviewList = [];
let rejectedList = [];
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
//filter id
const filterJobs = document.getElementById('filter-jobs');

//header section function
function totalCount() {
    total.innerText = totalJobs.children.length;
    interview.innerText = interviewList.length;
    rejected.innerText = rejectedList.length;
}
totalCount();
//main section toggling button for color change 
function toggleBtn(id) {
    allBtn.classList.remove('bg-[#3B82F6]', 'text-white');
    interviewBtn.classList.remove('bg-[#3B82F6]', 'text-white');
    rejectedBtn.classList.remove('bg-[#3B82F6]', 'text-white');
    allBtn.classList.add('bg-[#FFF]', 'text-black');
    interviewBtn.classList.add('bg-[#FFF]', 'text-black');
    rejectedBtn.classList.add('bg-[#FFF]', 'text-black');
    const selected = document.getElementById(id);
    selected.classList.remove('bg-[#FFF]', 'text-black');
    selected.classList.add('bg-[#3B82F6]', 'text-white');
    if(id =='interview-btn'){
        totalJobs.classList.add('hidden');
        filterJobs.classList.remove('hidden');
    }else if(id == 'all-btn'){
        filterJobs.classList.add('hidden');
        totalJobs.classList.remove('hidden');
    }
}
//card section button event
mainContainer.addEventListener('click', function (event) {
    if (event.target.id==='app-interview-btn') {
        const parentNode = event.target.parentNode.parentNode;
        const CompanyName = parentNode.querySelector('.CompanyName').innerText;
        const JobTitle = parentNode.querySelector('.JobTitle').innerText;
        const JobTypeAndSalary = parentNode.querySelector('.JobTypeAndSalary').innerText;
        const StatusButton = parentNode.querySelector('.StatusButton')
        StatusButton.innerText='Interview';
        StatusButton.style.border='2px solid #10B981';
        StatusButton.style.color = '#10B981';
        StatusButton.style.backgroundColor='white';
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
        interviewSection();
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
            <button id="delete-btn" class="p-4 flex justify-center items-center w-4 h-4 border border-[#F1F2F4] text-[#64748B] rounded-full"><i class="fa-solid fa-trash"></i></button>
          </div>`
        filterJobs.appendChild(div)
    }
}