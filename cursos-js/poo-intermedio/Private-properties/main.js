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
  const private = {
    _learningPaths: [],
  };
  Object.defineProperty(this, "learningPaths", {
    get() {
      return private._learningPaths;
    },
    set(newLP) {
      if (newLP instanceof LearningPath) {
        private._learningPaths.push(newLP);
      } else {
        console.warn(
          "Alguno de los LPs no es una instancia del prototipo LearningPath"
        );
      }
    },
    configurable: false,
  });

  for (const learningPathIndex in learningPaths) {
    this.learningPaths = learningPaths[learningPathIndex];
  }
}

Object.defineProperty(Student.prototype, "learningPaths", {
  get() {
    return this._learningPaths;
  },
  set(newLP) {
    if (newLP instanceof LearningPath) {
      this.learningPaths.push(newLP);
    } else {
      console.warn(
        "Alguno de los LPs no es una instancia del prototipo LearningPath"
      );
    }
  },
});
const escualeWeb = new LearningPath({ name: "Escuela de WebDev" });
const escualeData = new LearningPath({ name: "Escuela de de Data Science" });
const andres = new Student({
  name: "Andrés",
  email: "email@email.com",
  learningPaths: [escualeWeb, escualeData],
});
