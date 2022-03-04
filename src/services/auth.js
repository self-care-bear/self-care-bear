import { client, parseData } from './client';

export function getUser() {
  return client.auth.user();
}

export async function signUpUser(email, password) {
  const request = await client.auth.signUp({ email, password });
  return request;
}

export async function signInUser(email, password) {
  const request = await client.auth.signIn({ email, password });
  return request;
}

export async function signOutUser() {
  return client.auth.signOut();
}
