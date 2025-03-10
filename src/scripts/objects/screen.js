const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user){
        this.userProfile.innerHTML = `<div class="info">
                                        <img src="${user.avatarUrl}" alt="Foto do Usuario" />
                                            <div class="data">
                                                <h2>${user.name ?? 'Não possui nome cadastrado 😒'}</h2>
                                                <p>${user.bio ?? 'Não possui bio cadastrada 😒'}</p>
                                            </div>
                                        </div>`
                                        
        let repositoriesItens = ''
        user.repositories.forEach(repo =>
            repositoriesItens += `<li>
                                    <a href="${repo.html_url}" target="_blank">
                                    ${repo.name}
                                    </a>
                                </li>`)
            if(user.repositories.length > 0){
                this.userProfile.innerHTML += `<div class="repositories section"
                                                <h3>Repositórios:</h3>
                                                <ul>${repositoriesItens}</ul>
                                                </div>`
            }
    }
}

export { screen }