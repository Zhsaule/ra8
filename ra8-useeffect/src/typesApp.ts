export interface UserDetails {
  city: string;
  company: string;
  position: string;
}

export interface User {
  id: number;
  name: string;
  avatar: string;
  details: UserDetails;
}

export interface DetailsProps {
  info: User;
}
