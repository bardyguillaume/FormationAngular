export class PhoneNumber {
  country = '33';

  number: string;

  // format phone numbers as E.164
  get e164() {
    const num = this.country + this.number.substring(1);
    return `+${num}`;
  }
}
