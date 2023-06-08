function requiredParam(param) {
  throw new Error(param + " es obligatorio");
}

function learningPaths({ name = requiredParam("name"), courses = [] }) {
  const private = {
    _name: name,
    _courses: courses,
  };
  const public = {
    get name() {
      return private._name;
    },
    set name(newName) {
      if (newName.length != 0) {
        return (private._name = newName);
      } else {
        console.warn("Tu nombre debe tener al menos 1 carácter");
      }
    },
    get courses() {
      return private._courses;
    },
  };
  return public;
}

function createStudent({
  name = requiredParam("name"),
  email = requiredParam("email"),
  age,
  twitter,
  instagram,
  facebook,
  approvedCourses = [],
} = {}) {
  const private = {
    _name: name,
    _learningPaths: learningPaths,
  };
  const public = {
    age: age,
    email: email,
    socialMedia: {
      twitter,
      instagram,
      facebook,
    },
    get name() {
      return private._name;
    },
    set name(newName) {
      if (newName.length != 0) {
        return (private._name = newName);
      } else {
        console.warn("Tu nombre debe tener al menos 1 carácter");
      }
    },
    get learningPaths() {
      return private._learningPaths;
    },
    set learningPaths(newLP) {
      if (!newLP.name) {
        console.warn("Tu LP no tiene la propiedad name");
        return;
      } else if (!newLP.courses) {
        console.warn("Tu LP no tiene courses");
      } else if (!isArray(newLP.courses)) {
        console.warn("Tu LP no es una lista (de cursos)");
      }
      private._learningPaths.push(newLP);
    },
  };

  return public;
}

const andres = createStudent({ name: "Andrés", email: "email@email.com" });
