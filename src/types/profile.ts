export interface EditProfileType {
  id: number;
  name: string;
  pictures: string[];
  gender: string;
  birthday: string;
  location: string;
  introduction: string | null;
  height: number;
  body_type: string;
  company: string | null;
  job: string | null;
  education: string | null;
  school: string | null;
}
