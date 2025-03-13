const user = {
    avatarUrl: '',
    name: '',
    bio: '',
    userName: '',
    repositories: [],
    setInfo(gitHubUser){
        this.avatarUrl = gitHubUser.avatar_url
        this.name = gitHubUser.name
        this.bio = gitHubUser.bio
        this.userName = gitHubUser.login
        this.following = gitHubUser.following
        this.followers = gitHubUser.followers
        this.events = gitHubUser.public_repos
    },
    setEvents(events){
        this.events = events
    },
    setRepositories(repositories){
        this.repositories = repositories
    },
}

export { user }