const dataKuis = [
  {
    pertanyaan: "Apa nama ibu kota Indonesia?",
    a: "Jakarta",
    b: "Bandung",
    c: "Samarinda",
    jawaban: "a",
  },
  {
    pertanyaan: "Apa nama makan khas Jogyakarta?",
    a: "Pecel Lele",
    b: "Batagor",
    c: "Gudeg",
    jawaban: "c",
  },
  {
    pertanyaan: "Dimana letak kerajaan Pajajaran Prabu Siliwangi?",
    a: "Semarang",
    b: "Bogor",
    c: "Lampung",
    jawaban: "b",
  },
];

// Seleksi
const pertanyaan = document.getElementById("pertanyaan");
const aText = document.getElementById("a-text")
const bText = document.getElementById("b-text")
const cText = document.getElementById("c-text")
const btnSubmit = document.getElementById("submit");
const jawaban = document.getElementsByClassName("jawaban")

let count = 0;
let skor = 0;

// console.log(jawaban)
loadSoal()

function loadSoal() {
  refresh()
  const kuisSekarang = dataKuis[count]
  // console.log(kuisSekarang)
  pertanyaan.innerHTML = kuisSekarang.pertanyaan
  aText.innerHTML = kuisSekarang.a
  bText.innerHTML = kuisSekarang.b
  cText.innerHTML = kuisSekarang.c
}

btnSubmit.addEventListener("click", function() {
  // console.log("Diklik")
  let jawaban = getJawaban()
  // console.log(jawaban)
  if (jawaban) {
    if (jawaban == dataKuis[count].jawaban) {
      skor++
    }
  }

  // console.log(skor)
  count++
  if (count < dataKuis.length) {
    loadSoal()
  } else {
    alert(`Skor kamu adalah: ${skor} dari ${dataKuis.length}`)
    location.reload()
  }
})

// get Jawban User 
function getJawaban() {
  let pilihan = undefined;

  for (let i = 0; i < jawaban.length; i++) {
    // console.log(jawaban[i])
    if (jawaban[i].checked) {
      pilihan = jawaban[i].id
    }
  }

  return pilihan;
}

function refresh() {
  for (let i = 0; i < jawaban.length; i++) {
    // console.log(jawaban[i])
    jawaban[i].checked = false;
  }
}