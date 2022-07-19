import { findUser, userRepos } from '.';

describe('Test API', () => {
    it('should  return user github', async () => {
        expect.assertions(1);
        const user = await findUser('patrickassuncao1');
        expect(user.type).toEqual('User');
    });

    it('should return user github repositories', async () => {
        expect.assertions(1);
        const user = await userRepos('patrickassuncao1');
        expect(user[0].private).toEqual(false);
    });
})