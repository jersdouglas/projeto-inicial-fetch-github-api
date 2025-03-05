document.getElementById('btn-search').addEventListener('click', ()=> {
    const userName = document.getElementById('input-search').value
    getUserProfile(userName)
})
async function user(userName){
    const response = await fetch(`https://api.github.com/users/${userName}`)
    return await response.json()
}

function getUserProfile(userName){
    user(userName).then(userData => {
        let userInfo = `<img src="${userData.avatar_url}" alt="Avatar" />
                        <div class="data">
                            <h2>${userData.name ?? 'Não possui nome cadastrado 😒'}</h2>
                            <p>${userData.bio ?? 'Não possui bio cadastrada 😒'}</p>
                            <ul style="
                                list-style-type: none; padding: 0;
                                margin: 0;
                                display: flex;
                                gap: 10px;
                                justify-content: center;
                                align-items: center;
                                flex-wrap: wrap;
                                margin-top: 20px;
                                font-size: 1.2rem;
                                font-weight: bold;
                                color: #553311;">
                                <li class="border"><strong>Folowers:</strong> ${userData.followers}</li>
                                <li class="border"><strong>Following:</strong> ${userData.following}</li>
                                <li class="border repositorio"><a class="" target="_blank" rel="noopener noreferrer" href="https://github.com/${userData.login}?tab=repositories"><strong>Public Repos:</strong> ${userData.public_repos}</a></li>
                            </ul>
                        </div>`

        document.querySelector('.profile-data').innerHTML = userInfo
    })
}