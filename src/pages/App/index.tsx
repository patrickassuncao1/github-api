import React, { useEffect, useState } from 'react';
import { Card, Profile, Search } from '../../components';
import useGithub from '../../hooks/useGithub';
import { ContainerCards, ContainerGrid, Header, Main, UserNotFound, ContainerButtons } from './style';

type tabType = {
  classButtonOne?: 'active',
  classButtonTwo?: 'active',
  number: 1 | 2;
}
const App: React.FC = () => {

  const { user, isSearch, repositories, getUserRepos, starred, getUserStarred } = useGithub();
  const [tab, setTab] = useState<tabType>({
    number: 1,
    classButtonOne: 'active'
  });

  useEffect(() => {
    if (user?.login) {
      getUserRepos(user.login);
      getUserStarred(user.login);
    }
    // eslint-disable-next-line
  }, [user?.login])

  const handleClick = (value: 1 | 2) => {
    value === 1 ?
      setTab((prevState) => ({ ...prevState, number: 1, classButtonOne: 'active', classButtonTwo: undefined }))
      : setTab((prevState) => ({ ...prevState, number: 2, classButtonOne: undefined, classButtonTwo: 'active' }));
  }


  return (
    <>
      <Header>
        <Search />
      </Header>
      <Main>
        {user ? (
          <>
            <Profile {...user} />
            <ContainerCards>
              <ContainerButtons>
                <button onClick={() => handleClick(1)} className={tab.classButtonOne} >Repositórios</button>
                <button onClick={() => handleClick(2)} className={tab.classButtonTwo} >Favoritos</button>
              </ContainerButtons>
              <ContainerGrid>
                {tab?.number === 1 ? (
                  repositories?.map((item, index) => (
                    <Card {...item} key={index} />
                  ))
                ) : (
                  starred?.map((item, index) => (
                    <Card {...item} key={index} />
                  ))
                )}
              </ContainerGrid>
            </ContainerCards>
          </>

        ) : isSearch ? (
          <UserNotFound>Usuário Não Encontrado</UserNotFound>
        ) : (
          <UserNotFound>Pesquiser por um usuário do github</UserNotFound>
        )}
      </Main>
    </>
  );
}

export default App;