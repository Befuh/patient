import user from './raw/user';
import consultations from './raw/consultations';

class DataProvider {
  getUser() {
    return user;
  }

  getConsultations() {
    return consultations;
  }

  getSymptoms(timestamp) {
    return consultations.find(con => con.timestamp == timestamp).symptoms;
  }

  getClinicalObservations(timestamp) {
    return consultations.find(con => con.timestamp == timestamp).clinical_observations;
  }
}

const data = new DataProvider();

export default data;
