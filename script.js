document.getElementById('form-warga').addEventListener('submit', function(e) {
    e.preventDefault();
    const nama = document.getElementById('nama').value;
    const alamat = document.getElementById('alamat').value;
    const li = document.createElement('li');
    li.textContent = `${nama} - ${alamat}`;
    document.getElementById('daftar-warga').appendChild(li);
    this.reset();
});