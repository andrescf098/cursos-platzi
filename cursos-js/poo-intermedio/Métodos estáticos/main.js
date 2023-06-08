const andres = {
  name: "Andresito",
  age: 18,
  approvedCourses: ["Curso 1"],
  addCourse(newCourse) {
    this.approvedCourses.push(newCourse);
  },
};

console.log(Object.keys(andres));
console.log(Object.getOwnPropertyNames(andres));
console.log(Object.entries(andres));
console.log(Object.entries(andres)[3][0]);

console.log(Object.getOwnPropertyDescriptors(andres));

Object.defineProperty(andres, "pruebaNasa", {
  value: "extraterrestes",
  writable: true,
  enumerable: true,
  configurable: true,
});
console.log(Object.entries(andres));

Object.defineProperty(andres, "navigator", {
  value: "Chrome",
  writable: true,
  enumerable: false,
  configurable: true,
});
Object.defineProperty(andres, "editor", {
  value: "VS Code",
  writable: false,
  enumerable: true,
  configurable: true,
});
Object.defineProperty(andres, "terminal", {
  value: "WSL",
  writable: true,
  enumerable: true,
  configurable: false,
});
console.log(Object.getOwnPropertyDescriptors(andres));

Object.seal(andres);
Object.freeze(andres);

/* class SuperObject {
  static isObject(subject) {
    return typeof subject == "object";
  }

  static deepCopy(subject) {
    let copySubject;
    const subjectIsObject = isObject(subject);
    const subjectIsArray = isArray(subject);

    if (subjectIsArray) {
      copySubject = [];
    } else if (subjectIsObject) {
      copySubject = {};
    } else {
      return subject;
    }

    for (const key in subject) {
      const keyIsObject = isObject(subject[key]);
      if (keyIsObject) {
        copySubject[key] = deepCopy(subject[key]);
      } else {
        if (subjectIsArray) {
          copySubject.push(subject[key]);
        } else {
          copySubject[key] = subject[key];
        }
      }
    }
  }
}
 */

function SuperObject() {}
SuperObject.isObject = function (subject) {
  return typeof subject == "object";
};
SuperObject.deepCopy = function (subject) {
  let copySubject;
  const subjectIsObject = isObject(subject);
  const subjectIsArray = isArray(subject);

  if (subjectIsArray) {
    copySubject = [];
  } else if (subjectIsObject) {
    copySubject = {};
  } else {
    return subject;
  }

  for (const key in subject) {
    const keyIsObject = isObject(subject[key]);
    if (keyIsObject) {
      copySubject[key] = deepCopy(subject[key]);
    } else {
      if (subjectIsArray) {
        copySubject.push(subject[key]);
      } else {
        copySubject[key] = subject[key];
      }
    }
  }
};
