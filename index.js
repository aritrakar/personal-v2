const projects = [];

fetch("./projectsData.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log("projects INSIDE: ", projects);
    return data.items;
  });
