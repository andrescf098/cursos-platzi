function requiredParam(param) {
  throw new Error(param + " es obligatorio");
}

function LearningPath({ name = requiredParam("name"), courses = [] }) {
  const private = {
    _name: name,
    _courses: courses,
  };
  this.name = name;
  this.courses = courses;
}

function Student({
  name = requiredParam("name"),
  email = requiredParam("email"),
  age,
  twitter,
  instagram,
  facebook,
  approvedCourses = [],
  learningPaths = [],
} = {}) {
  this.name = name;
  this.email = email;
  this.age = age;
  this.approvedCourses = approvedCourses;
  this.socialMedia = {
    twitter,
    instagram,
    facebook,
  };
  if (!isArray(learningPaths)) {
    this.learningPaths = [];
    for (const learningPathIndex in learningPaths) {
      if (learningPaths[learningPathIndex] instanceof LearningPath) {
        this.learningPaths.push(learningPaths[learningPathIndex]);
      }
    }
  }
}

const escualeWeb = new LearningPath({ name: "Escuela de WebDev" });
const escualeData = new LearningPath({ name: "Escuela de de Data Science" });
const andres = new Student({
  name: "Andrés",
  email: "email@email.com",
  learningPaths: [escualeWeb, escualeData],
});
