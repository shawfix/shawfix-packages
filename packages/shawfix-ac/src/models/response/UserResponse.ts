import { EnabledEn } from '../../enums/EnabledEn';

export interface UserResponse {
  id: string;
  avatar: string;
  name: string;
  email: string;
  access: number;
  status: typeof EnabledEn.Disabled | typeof EnabledEn.Enabled;
  createdDate: string;
  modifiedDate: string;
}
