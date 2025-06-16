import { normalize, schema } from 'normalizr';

const course = new schema.Entity('courses');
const courseList = [course];

export const coursesNormalizer = (data) => normalize(data, courseList);
