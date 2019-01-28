const Faker = require('faker');
const range = (start, end) => new Array(end - start).fill(start).map((el, i) => start + i);
const randomInt  = (max) => Math.floor(Math.random() * max) + 1;
const dateRange = (max) => Math.floor(Math.random() + max) + 1;
var fecha = new Date();
// var  = d.getFullYear();
const users = range(0, 20).map(() => {
  let fname = Faker.name.firstName();
  let lname = Faker.name.lastName();
  let userName = Faker.internet.userName(name);  
  return {
    'naming_series': Faker.random.uuid(),
    'patient_name': fname + ' ' + lname,
    'gender': Faker.gender.gender(),
    'blood': Faker.blood.blood('A+'),
    'dob': Faker.date.past(),
    'age': fecha.getFullYear() - Faker.date.past(dateRange).getFullYear,
    'avatar': Faker.image.avatar(),
    'email': Faker.internet.email(userName),
    'username': userName,
    'phone': Faker.phone.phoneNumber(),
    'address': {
      'street': Faker.address.streetAddress(),
      'suite': Faker.address.secondaryAddress(),
      'city': Faker.address.city(),
      'state': Faker.address.state(),
      'country': Faker.address.country(),
      'zipcode': Faker.address.zipCode(),
      'geo': {
        'lat': Faker.address.latitude(),
        'lng': Faker.address.longitude()
      }
    },    
  };
});



module.exports = () => {
  return {
    data: users
  };
};
