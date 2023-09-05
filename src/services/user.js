const CAT_ENDPOINT_RANDOM_USER = 'https://randomuser.me/api/?results=10';

export const getRandomUser = async () => {
  const res = await fetch(CAT_ENDPOINT_RANDOM_USER);
  const data = await res.json();
  const { results } = data;
  return results;
};
