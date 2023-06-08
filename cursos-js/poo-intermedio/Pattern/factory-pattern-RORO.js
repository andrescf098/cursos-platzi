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
    changeName(newName) {
      private._name = newName;
    },
    readName() {
      return private._name;
    },
    age: age,
    email: email,
    socialMedia: {
      twitter,
      instagram,
      facebook,
    },
  };

  Object.defineProperty(public, "readName", {
    configurable: false,
    writable: false,
  });
  Object.defineProperty(public, "changeName", {
    configurable: false,
    writable: false,
  });

  return public;
}

const andres = createStudent({ name: "Andrés", email: "email@email.com" });
