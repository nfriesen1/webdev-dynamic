const years = document.getElementById("year_list");
let year_text = "";
for(let year = 1895; year < 2020; year++) {
    year_text += `<li><a href="/year/${year}">${year}</a></li>`
}

years.innerHTML += year_text;