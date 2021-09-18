import { RepositoryItem } from "./RepositoryItem";
import { useState, useEffect } from "react";

import '../styles/repositories.scss';

// URL para api do usuario https://api.github.com/users/thiagoadssilva

export function RepositoryList(){
  const [repositories, setRepositories] = useState([]);

  useEffect(() =>{
    fetch('https://api.github.com/users/thiagoadssilva/repos')
    .then(response => response.json())
    .then(data => setRepositories(data))
  },[])

  return( 
    <section className="repository-list">
      <h1>Lista de Repositórios</h1>
      <ul>
        {repositories.map(repository => {
          return <RepositoryItem key={repository.name} repository={repository}/>
        })}
       
      </ul>
    </section>
  );
}