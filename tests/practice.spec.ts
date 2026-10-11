import { test, expect } from '@playwright/test';
test('Verify data integrity after creating a user', async ({ request }) => {
  const userPayload = {
    name: 'Bhushan',
    email: `bhushan${Date.now()}@example.com`
  };

  // Step 1: Create a user
  const createResponse = await request.post('/api/users', {
    data: userPayload
  });

  expect(createResponse.status()).toBe(201);

  const createdUser = await createResponse.json();

  expect(createdUser.id).toBeTruthy();
  expect(createdUser.name).toBe(userPayload.name);
  expect(createdUser.email).toBe(userPayload.email);

  // Step 2: Retrieve the same user
  const getResponse = await request.get(
    `/api/users/${createdUser.id}`
  );

  expect(getResponse.status()).toBe(200);

  const retrievedUser = await getResponse.json();

  // Step 3: Compare created and retrieved data
  expect(retrievedUser.id).toBe(createdUser.id);
  expect(retrievedUser.name).toBe(userPayload.name);
  expect(retrievedUser.email).toBe(userPayload.email);
});