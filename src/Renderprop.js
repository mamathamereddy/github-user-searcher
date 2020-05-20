import React,{useEffect,useState} from 'react'
import  RepoList from './RepoList'

function Renderprop() {
    const [repoName, setRepoName] = useState([]);

    useEffect(() => {
      (async () => {
        const repoList = await fetch(
          `https://api.github.com/users/mamathamereddy/repos`
        ).then(res => res.json());
        setRepoName(repoList);
      })();
    }, []);


    return (
        <div>
            <RepoList render={repoName}/>
        </div>
    )
}

export default Renderprop


