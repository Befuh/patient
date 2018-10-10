import user from './raw/user';
import consultations from './raw/consultations';

class DataProvider {
  getUser() {
    return user;
  }

  getConsultations() {
    return consultations;
  }
}

const data = new DataProvider();

export default data;
