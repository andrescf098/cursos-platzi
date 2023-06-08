const juan = {
  name: "Juanito",
  approvedCourses: ["Curso 1", "Curso 2"],
  caracteristicas: {
    age: 18,
    colorCabello: "Negro",
    gustos: {
      musica: ["rock", "punk", "ska"],
      peliculas: ["drama", "horros", "comedia"],
    },
  },
  addCourse(newCourse) {
    console.log("This", this);
    console.log("This.approvedCourses", this.approvedCourses);
    this.approvedCourses.push(newCourse);
  },
};

function deepFreez(param) {
  if (typeof param !== "object") {
    Object.freeze(param);
    for (const key in param) {
      deepFreez(param[key]);
    }
  }
}
