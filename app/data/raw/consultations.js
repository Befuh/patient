const consultations = [
  {
    id: 1,
    timestamp: '2018-01-03T15:45:00',
    doctor: {
      id: 34,
      name: 'John Doe',
      speciality: 'Cardiologist',
      salutation: 'Dr.'
    },
    health_facility: {
      id: 54,
      name: 'Mount Mary Hospital',
      address: 'Buea Town, Buea'
    },
    symptoms: [
      {
        id: 1,
        time_from: '2018-01-02T06:00:00',
        time_to: '2018-01-02T12:00:00',
        additional_info: 'Very server',
        symptom: { id: 1, name: 'Fever' }
      },
      {
        id: 1,
        time_from: '2018-01-02T06:00:00',
        time_to: '2018-01-03T12:00:00',
        additional_info: 'Very server',
        symptom: { id: 1, name: 'Headache' }
      }
    ],
    clinical_observations: [
      {
        exam: 'Temperature',
        result: '39',
        interpretation: 'high'
      },
      {
        exam: 'Blood pressure',
        result: '123/69',
        interpretation: 'normal'
      }
    ],
    lab_results: [],
    diagnoses: [
      {
        "name": "Maleria"
      },
      {
        "name": "Typhoid Fever"
      }
    ],
    treatments: [
      {
        "type": "Paracetamol",
        "description": "2 tables, 2 times daily"
      }
    ]
  },
  {
    id: 2,
    timestamp: '2018-09-13T09:34:00',
    doctor: {
      id: 45,
      name: 'Foo Bar',
      speciality: 'General Practitioner',
      salutation: 'Dr.'
    },
    health_facility: {
      id: 90,
      name: 'Lacantini',
      address: 'Bonamoussadi, Douala'
    },
    symptoms: [
      {
        id: 1,
        time_from: '2018-09-12T05:00:00',
        time_to: '2018-09-13T09:34:00',
        symptom: { id: 1, name: 'Stomach ache' }
      }
    ],
    clinical_observations: [
      {
        exam: 'Temperature',
        result: '25',
        interpretation: 'normal'
      }
    ],
    lab_results: [],
    diagnoses: [
      {
        "name": "Yellow Fever"
      }
    ],
    treatments: []
  },
  {
    id: 3,
    timestamp: '2018-11-05T12:00:00',
    doctor: {
      id: 49,
      name: 'Obiobio Wanjo',
      speciality: 'Surgent',
      salutation: 'Dr.'
    },
    health_facility: {
      id: 90,
      name: 'Lacantini',
      address: 'Bonamoussadi, Douala'
    },
    symptoms: [],
    clinical_observations: [],
    lab_results: [],
    diagnoses: [],
    treatments: []
  }
];

export default consultations;
