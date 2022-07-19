import React, { FormEvent, useState } from 'react';
import { Container, InputSearch, Button, IconSearch } from './style';
import { FaSearch } from "react-icons/fa";
import useGithub from '../../hooks/useGithub';


const Search: React.FC = () => {

    const { getUser } = useGithub();

    const [inputSearch, setInputSearch] = useState('');

    const handleSubmit = async(event: FormEvent) => {
        event.preventDefault();
        getUser(inputSearch); 
    }
    return (
        <Container>
            <form onSubmit={handleSubmit}>
                <div className='content'>
                    <IconSearch>
                        <FaSearch color={'white'} />
                    </IconSearch>
                    <InputSearch
                        name='search'
                        placeholder='Usuário do github'
                        value={inputSearch}
                        onChange={({ target: { value } }) => setInputSearch(value)}
                    />
                    <Button type='submit'>PESQUISAR</Button>
                </div>
            </form>
        </Container>
    )
}

export default Search;