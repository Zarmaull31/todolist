
const formList = document.querySelector('#form-list');
const tulisList = document.querySelector('#tulis-list');
const listKegiatan = document.getElementById('list-kegiatan');

formList.addEventListener('submit', function(e){
    e.preventDefault();
    
    if(tulisList.value){
        // MEMBUAT ELEMEN LI
        const li = document.createElement('li');
        li.className="list-group-item d-flex justify-content-between align-items-center";
        li.appendChild(document.createTextNode(tulisList.value));
        
        // MEMBUAT ELEMEN BUTTON DELETE
        const deleteList = document.createElement('button');
        deleteList.className = "btn btn-sm btn-danger";
        deleteList.type ='button';
        deleteList.innerHTML='Delete';

        // MEMBUAT ELEMEN BUTTON SELESAI 

        const selesaiList  = document.createElement('button');
        selesaiList.className = "btn btn-sm btn-primary";
        selesaiList.type ='button';
        selesaiList.innerHTML='Selesai';
        
        // MENGGABUNGKAN SEMUA ELEMEN KEDALAM LI
        li.appendChild(deleteList);
        li.appendChild(selesaiList);
        
        listKegiatan.appendChild(li);
        tulisList.value =''
    }
    else{
        alert('Tolong Ketikan Sesuatu Kedalam List yang ada di Form !!!')
       
    }
    

//     <div class="alert alert-primary" role="alert">
//     A simple primary alert—check it out!
//   </div>
});