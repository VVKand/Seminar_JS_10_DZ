const data = JSON.parse(datainfo);
console.log(data);
const content = document.querySelector(".content");

data.reverse().forEach((obj) => {
  content.insertAdjacentHTML(
    "afterend",
    `<h4>id: ${obj.id}</h4>
    <p>titel: ${obj.title}</p>
    <img src="${obj.url}">`
  );
});
