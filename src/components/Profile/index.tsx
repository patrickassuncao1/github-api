import React from 'react';
import { GitHubUserType } from '../../@types/model/user';
import { Container, FlexElements, ProfileDescriptionContainer } from './styles';

const Profile = (user: GitHubUserType) => {
    return (
        <Container>
            <span className='img'>
                <img src={user?.avatar_url} alt="img-perfil" />
            </span>
            <ProfileDescriptionContainer>
                <div className='content'>
                    <p>
                        <span>Nome: </span> {user?.name}
                    </p>
                    <p>
                        <span>Empresa: </span> {user?.company}
                    </p>
                    <p>
                        <span>Localização: </span> {user?.location}
                    </p>
                    <a href={'http://' + user?.blog} target={'_blank'} rel="noreferrer">
                        <span>Blog: </span> {user?.blog}
                    </a>
                </div>
                <FlexElements>
                    <article>
                        <span>Followers</span>
                        <p>{user?.followers}</p>
                    </article>
                    <article>
                        <span>Followings</span>
                        <p>{user?.following}</p>
                    </article>
                    <article>
                        <span>Gits</span>
                        <p>{user?.public_gists}</p>
                    </article>
                    <article>
                        <span>Repos</span>
                        <p>{user?.public_repos}</p>
                    </article>
                </FlexElements>
            </ProfileDescriptionContainer>
        </Container>
    );
}

export default Profile;