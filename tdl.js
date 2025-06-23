let inputTugas = document.getElementById("isi")
const tombol = document.getElementById("buat")
let tambahTugas = document.getElementById("list")

//buat daftar tugas/list
tombol.onclick = function(){
 let Tugas = inputTugas.value.trim();
 if(Tugas === ""){ return;
 };

//elemen li
  let li = document.createElement("li");

//buat checkbox
let checkbox = document.createElement("input");
checkbox.type = "checkbox";
checkbox.classList.add("check");


//label tugas
let label = document.createElement("span");
label.textContent = Tugas;

//efek centang selesai
checkbox.onchange= function(){
 label.classList.toggle("selesai", checkbox.checked);
};

//Tombol hapus
let hapus = document.createElement("button")
hapus.textContent= "x";
hapus.classList.add("hapus");
hapus.onclick= function(event){
    event.stopPropagation();
    li.remove();
};

//susun elemen
li.appendChild(checkbox);
li.appendChild(label);
li.appendChild(hapus);

//tambah tugas
tambahTugas.appendChild(li);

//input kosong
inputTugas.value = "";

};
