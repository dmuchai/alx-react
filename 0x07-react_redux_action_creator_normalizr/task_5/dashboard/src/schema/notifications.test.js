// src/schema/notifications.test.js
import { normalizedData } from './notifications';

describe('normalizedData', () => {
  it('should have correct result array', () => {
    const expectedResult = [
      "5debd76480edafc8af244228",
      "5debd764507712e7a1307303",
      "5debd76444dd4dafea89d53b",
      "5debd76485ee4dfd1284f97b",
      "5debd7644e561e022d66e61a",
      "5debd7644aaed86c97bf9d5e",
      "5debd76413f0d5e5429c28a0",
      "5debd7642e815cd350407777",
      "5debd764c1127bc5a490a4d0",
      "5debd7646ef31e0861ec1cab",
      "5debd764a4f11eabef05a81d",
      "5debd764af0fdd1fc815ad9b",
      "5debd76468cb5b277fd125f4",
      "5debd764de9fa684468cdc0b"
    ];
    expect(normalizedData.result).toEqual(expectedResult);
  });

  it('should have correct user entity', () => {
    const user = normalizedData.entities.users["5debd764a7c57c7839d722e9"];
    expect(user).toEqual({
      age: 25,
      email: "poole.sanders@holberton.nz",
      id: "5debd764a7c57c7839d722e9",
      name: { first: "Poole", last: "Sanders" },
      picture: "http://placehold.it/32x32"
    });
  });

  it('should have correct message entity', () => {
    const message = normalizedData.entities.messages["efb6c485-00f7-4fdf-97cc-5e12d14d6c41"];
    expect(message).toEqual({
      guid: "efb6c485-00f7-4fdf-97cc-5e12d14d6c41",
      isRead: false,
      type: "default",
      value: "Cursus risus at ultrices mi."
    });
  });

  it('should have correct notification entity', () => {
    const notif = normalizedData.entities.notifications["5debd7642e815cd350407777"];
    expect(notif).toEqual({
      id: "5debd7642e815cd350407777",
      author: "5debd764f8452ef92346c772",
      context: "3068c575-d619-40af-bf12-dece1ee18dd3"
    });
  });
});
