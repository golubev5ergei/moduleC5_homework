const parser = new DOMParser();

const xmlString = `<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>`;

const xmlDOM = parser.parseFromString(xmlString, "text/xml");


const listNode = xmlDOM.querySelector('list');
const studentNode = listNode.querySelectorAll("student");
// const firstNameNode = studentNode.querySelector("first");
// const secondNameNode = studentNode.querySelector("second");
// const nameNode = studentNode.querySelector("name");
// const nameAtrr = nameNode.getAttribute("lang");
// const ageNode = studentNode.querySelector("age");
// const profNode = studentNode.querySelector("prof");

const result = [];

studentNode.forEach((item) => {
  const firstNname = item.querySelector('first');
  const secondName = item.querySelector('second');
  const ageValue = item.querySelector('age');
  const profValue = item.querySelector('prof');
  const nameNode = item.querySelector('name');
  
  

  result.push({
    name: `${firstNname.textContent} ${secondName.textContent}`,
    age: ageValue.textContent,
    prof: profValue.textContent,
    lang: nameNode.getAttribute('lang'),
  });
});

const resultJS = {
  list: result,
};

// const result = {
//   name: firstNameNode.textContent,
//   age: ageNode.textContent,
//   prof: profNode.textContent,
//   lang: nameAtrr

// };

console.log(resultJS);

