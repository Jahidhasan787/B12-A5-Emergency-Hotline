function getHeartWithId(heartId){  
        document.getElementById(heartId).addEventListener('click', function () {
            let count = 1; 
            const heartCount = document.getElementById('heart-count');
            const heartCountValue = parseInt (document.getElementById('heart-count').innerText);
            const newHeartCount = heartCountValue + count;
            heartCount.innerText = newHeartCount;
          })    
}

getHeartWithId('heart-icon-1');
getHeartWithId('heart-icon-2');
getHeartWithId('heart-icon-3');
getHeartWithId('heart-icon-4');
getHeartWithId('heart-icon-5');
getHeartWithId('heart-icon-6');
getHeartWithId('heart-icon-7');
getHeartWithId('heart-icon-8');
getHeartWithId('heart-icon-9');


function callBtnId(callBtnId, serviceId,numberId){
    document.getElementById(callBtnId).addEventListener('click',function(){
         const alertText = document.getElementById(serviceId).innerText;
         const alertNumber =document.getElementById(numberId).innerText;
         const coinText = document.getElementById('coin-count');
         let coinValue = parseInt(coinText.innerText);
         if(coinValue>=20){
           alert('📞calling ' +alertText+' '+alertNumber +'....');
            coinValue = coinValue-20;
            coinText.innerText = coinValue;
            
            const now = new Date();
            const time = now.toLocaleTimeString([],{hour12:false});
            const parentHistory =document.getElementById('history-section');
            const newDiv = document.createElement('div');
            newDiv.classList.add('history', 'flex','justify-between','items-center','py-2','gap-4');
            const newPTag1 = document.createElement('p');
            newPTag1.classList.add('text-sm');
            const newPTag2 = document.createElement('p');
            newPTag2.classList.add('text-sm');
            newDiv.appendChild(newPTag1);
            newDiv.appendChild(newPTag2);
            parentHistory.appendChild(newDiv);
            newPTag1.innerHTML = alertText+'<br>' +alertNumber;
            newPTag2.innerText = time;

         }
         else{
            alert("❌ You don’t have enough coins, you need at least 20 coins...");
         }
})
}

callBtnId('call-btn-1', 'service-name-1', 'number-1');
callBtnId('call-btn-2', 'service-name-2', 'number-2');
callBtnId('call-btn-3', 'service-name-3', 'number-3');
callBtnId('call-btn-4', 'service-name-4', 'number-4');
callBtnId('call-btn-6', 'service-name-6', 'number-6');
callBtnId('call-btn-7', 'service-name-7', 'number-7');
callBtnId('call-btn-5', 'service-name-5', 'number-5');
callBtnId('call-btn-8', 'service-name-8', 'number-8');
callBtnId('call-btn-9', 'service-name-9', 'number-9');



document.getElementById('clear-history-btn').addEventListener('click',function(){
       const historySection = document.getElementsByClassName('history');
       for(const history of historySection){
        history.style.display = 'none';
       }
        
})



function getCopyCountWithId(Id, numberId){  
        document.getElementById(Id).addEventListener('click', function () {
            const alertNumber =document.getElementById(numberId).innerText;
            alert('The number has been copied: ' + alertNumber);
            let count = 1; 
            const heartCount = document.getElementById('copy-count');
            const heartCountValue = parseInt (document.getElementById('copy-count').innerText);
            const newHeartCount = heartCountValue + count;
            heartCount.innerText = newHeartCount;
          })    
}

getCopyCountWithId('copy-btn-1','number-1');
getCopyCountWithId('copy-btn-2','number-2');
getCopyCountWithId('copy-btn-3','number-3');
getCopyCountWithId('copy-btn-4','number-4');
getCopyCountWithId('copy-btn-5','number-5');
getCopyCountWithId('copy-btn-6','number-6');
getCopyCountWithId('copy-btn-7','number-7');
getCopyCountWithId('copy-btn-8','number-8');
getCopyCountWithId('copy-btn-9','number-9');

