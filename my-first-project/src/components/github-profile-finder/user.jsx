function User({user}){
    const {avatar_url, followers, following, public_repos, name, login,created_at} = user;

    const createdDate = new Date(created_at);

return <div className="user">
    <div>
        <img src={avatar_url} className="avatar" alt="User"/>
    </div>
    <div>
        <a href={`https://github.com/${login}`}>{name || login }</a>
        <p></p>
    </div>

</div>
}

export default User;