const fs = require('fs');

// dosya veri ekleme

fs.appendFile('employees.json', '{"name": "Employee 1 Name", "salary": 2000}', 'utf8', (err) => {
    if (err) console.log(err);
});

  
// Dosyaya Güncelleme

fs.writeFile('employees.json', '{"name": "Employee 1 Name", "salary": 5000}', 'utf8', (err) => {
    if (err) console.log(err);
});

//Dosya Okumak
fs.readFile('employees.json', 'utf8', (err, data) => { // callback fonksiyonu ile birlikte çalıştırıyoruz.
    if (err) console.log(err);                         // hata kontrolü
    console.log(data);                                 // okunan verinin çıktısının alınması
  })


// Dosyaya Silmek

fs.unlink('employees.json', (err) => {
    if (err) console.log(err);
}); 



