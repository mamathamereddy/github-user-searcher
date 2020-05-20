import React from 'react'

function RepoList(props) {
    return (
        <div>
            <h3>Repo list</h3>
            {props.render.map(repo => <li key={repo.id}><a href={repo.name}>{repo.name}</a></li>)}
        </div>
    )
}

export default RepoList
