function getHeartWithId(id){  
        document.getElementById(id).addEventListener('click', function () {
            let count = 1; 
            const heartCount = document.getElementById('heart-count');
            const heartCountValue = parseInt (document.getElementById('heart-count').innerText);
            const newHeartCount = heartCountValue + count;
            heartCount.innerText = newHeartCount
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





