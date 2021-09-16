import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss';

const repository = {
  name: 'thiago jose da silva',
  description: 'Estudando Reactjs',
  link: 'github'
}

export function RepositoryList(){
    return( 
      <section className="repository-list">
        <h1>Lista de Repositórios</h1>
        <ul>
         <RepositoryItem repository={repository}/>
         <RepositoryItem repository={repository}/>
         <RepositoryItem repository={repository}/>
         <RepositoryItem repository={repository}/> 
        </ul>
      </section>
    );
}