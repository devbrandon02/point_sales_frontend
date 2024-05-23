export interface User {
  _id: string;
  tenantsId: string;
  document_id: string;
  password: string;
  name: string;
  email: string;
  phone: string;
  photo: string;
  roles: string[];
}
