const students = [
  {
    id: '1',
    firstName: 'Luke',
    lastName: 'Lancaster',
    isDead: false,
  },
  {
    id: '2',
    firstName: 'Loke',
    lastName: 'Loncaster',
    isDead: false,
  },
  {
    id: '3',
    firstName: 'Lake',
    lastName: 'Lancastar',
    isDead: false,
  },
  {
    id: '4',
    firstName: 'Leke',
    lastName: 'Lencaster',
    isDead: false,
  },
  {
    id: '5',
    firstName: 'Loke',
    lastName: 'Lincaster',
    isDead: false,
  },
  {
    id: '6',
    firstName: 'Lyke',
    lastName: 'Lyncaster',
    isDead: false,
  },
  {
    id: '7',
    firstName: 'Lake',
    lastName: 'Luncaster',
    isDead: false,
  },
  {
    id: '8',
    firstName: 'Luuke',
    lastName: 'Launcaster',
    isDead: false,
  },

];

const livingStudents = () => students.filter((s) => !s.isDead);

const dearlyBeloved = () => students.filter((s) => s.isDead);

const followTheLight = (id) => {
  const key = students.findIndex((s) => s.id === id);
  students[key].isDead = true;
};

export default { livingStudents, dearlyBeloved, followTheLight };
