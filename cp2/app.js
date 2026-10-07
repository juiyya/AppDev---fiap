const grid = document.getElementById('grid-cards');

function renderizar(lista) {
    grid.innerHTML = lista.map(ator => `    
        <div class="card">
            <img src="${ator.foto}" alt="${ator.nome}">
            <h3>${ator.nome}</h3>
            <p>País: ${ator.pais}</p>
            <p>Nascimento: ${ator.nascimento}</p>
        </div>
    `).join('');
}

function filtrarAtores() {
    const termoBusca = document.getElementById('busca').value.toLowerCase();
    renderizar(atores.filter(ator => ator.nome.toLowerCase().includes(termoBusca)));
}

renderizar(atores);