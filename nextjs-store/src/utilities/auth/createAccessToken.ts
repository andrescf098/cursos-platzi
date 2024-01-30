import { GraphQLClientSingleton } from 'app/graphql';
import { customerAccessTokenCreateMutation } from 'app/graphql/mutations/customerAccessTokenCreate';
import { cookies } from 'next/headers';

export const createAccessToken = async (email: string, password: string) => {
  const cookiesStore = cookies();
  const graphqlCliente = GraphQLClientSingleton.getInstance().getClient();
  const { customerAccessTokenCreate }: any = await graphqlCliente.request(
    customerAccessTokenCreateMutation,
    {
      email: email,
      password: password,
    }
  );
  const { accessToken, expiresAt } =
    customerAccessTokenCreate?.customerAccessToken;

  if (accessToken) {
    cookiesStore.set('accesssToken', accessToken, {
      path: '/',
      expires: new Date(expiresAt),
      httpOnly: true,
      sameSite: 'strict',
    });
  }
  return accessToken;
};
