function requiredParam(param) {
  throw new Error(param + " es obligatorio");
}

function createStudent({
  name = requiredParam("name"),
  email = requiredParam("email"),
  age,
  twitter,
  instagram,
  facebook,
  approvedCourses = [],
  lerningPaths = [],
} = {}) {
  const private = {
    _name: name,
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
        console.warn("Tu nombre debe tener al menos 1 caracter");
      }
    },
  };

  return public;
}

const andres = createStudent({ name: "Andrés", email: "email@email.com" });
