import type { UserResponse } from '../models/response/UserResponse';

export const UsersMock = Array.from({ length: 46 }).map<UserResponse>((_, i) => ({
  key: i,
  id: i + '',
  avatar: '',
  name: `Shawfix${i}`,
  email: 'shawfix@gmail.com',
  access: 0b000011,
  createdDate: '2025-06-26 18:20',
  modifiedDate: '2025-06-26 18:20',
  status: i % 2 ? 0 : 1,
}));
