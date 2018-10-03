import user from './raw/user';
import consultations from './raw/consultations';

class DataProvider {
  getUser() {
    return user;
  }

  getconsultations() {
    return consultations;
  }
}

export const data = new DataProvider();
