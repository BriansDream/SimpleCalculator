let cacheKey = "CACHE_KEY";

// Check if web browser support webstorage
const checkWebStorage = () => {
 return typeof(Storage) !== 'undefined';
}

const putHistory = function(data){
     let historyData = null;
    if(checkWebStorage()) {
        // let historyData = null;
        if(sessionStorage.getItem(cacheKey) === null) {
            historyData = [];
        } else {
            // Jika value storage != null 
            // Then isi array dengan data yang berasal dari dalam web storage dan dikonvert dari string menjadi object
            historyData = JSON.parse(sessionStorage.getItem(cacheKey));
        }
        // Data dimasukkan ke dalam array dalam bentuk object
        historyData.unshift(data);

        if(historyData.length > 5) {
            historyData.pop();
        }
        // data
        sessionStorage.setItem(cacheKey,JSON.stringify(historyData));


    }
}


const showHistory = () => {
    if(checkWebStorage()) {
        return JSON.parse(sessionStorage.getItem(cacheKey)) || [];
    }
    return []
}

const renderHistory = () => {
    let dataHistory = showHistory();
    const bodyHistories = document.querySelector('.historyList');

    // Selalu hapus konten HTML pada elemen History List agar tidak menampilkan data ganda
    bodyHistories.innerHTML = "";
  for (let histories of dataHistory) {
    
        const row = document.createElement('tr');
  
        row.innerHTML = `<td> ${histories.firstNumber} </td>`;
        row.innerHTML += `<td> ${histories.operator} </td>`;
        row.innerHTML += `<td> ${histories.secondNumber} </td>`;
        row.innerHTML += `<td> ${histories.result} </td>`;
        bodyHistories.appendChild(row);
  
  
}

}
renderHistory();