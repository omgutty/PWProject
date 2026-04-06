import { faker } from '@faker-js/faker';

export class TestDataGenerator {
  static getName(): string {
    return faker.person.fullName();
  }

  static getEmail(): string {
    return faker.internet.email();
  }

  static getPhone(): string {
    return faker.phone.number();
  }

  static getAddress(): string {
    return faker.location.streetAddress();
  }
}