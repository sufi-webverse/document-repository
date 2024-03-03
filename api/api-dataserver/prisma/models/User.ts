export type User = {
  id?: number | null;
  firstName: string | null;
  lastName: string | null;
  dob?: Date | null;
  gender?: string | null;
  email: string;
  countryCode: string | null;
  mobileNumber: string | null;
};
