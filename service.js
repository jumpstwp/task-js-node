const url = require("url");

exports.task1 = (req, res) => {
  const reqUrl = url.parse(req.url, true);
  const name = "Task1";
  //   if (reqUrl.query.name) {
  //     name = reqUrl.query.name;
  //   }

  const words = [
    "AMOR",
    "XISELA",
    "JAMON",
    "ROMA",
    "OMAR",
    "MORA",
    "ESPONJA",
    "RAMO",
    "JAPONES",
    "ARMO",
    "MOJAN",
    "MARO",
    "ORAM",
    "MONJA",
    "ALEXIS"
  ];
  console.log(words);
  const sortWords = words.sort();

  function mutation(arr) {
    arr[0] = arr[0].toLowerCase();
    arr[1] = arr[1].toLowerCase();
    let checkArray = arr[1].split("");
    for (let i = 0; i < checkArray.length; i++) {
      if (arr[0].indexOf(checkArray[i]) == -1) return false;
    }
    return true;
  }
  const comepareWords = [...words];
  const result = [];

  function exists(arr, search) {
    return arr.some(row => row.includes(search));
  }

  for (let i = 0; i < sortWords.length; i++) {
    result.push([sortWords[i]]);
    for (let j = 0; j < comepareWords.length; j++) {
      if (
        mutation([sortWords[i], comepareWords[j]]) === true &&
        sortWords[i] !== comepareWords[j]
      ) {
        result[i].push(comepareWords[j]);
      } else {
        continue;
      }
    }
  }

  console.log(result);

  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(result));
};

exports.task2 = (req, res) => {
  const reqUrl = url.parse(req.url, true);
  var name = "Task2";
  if (reqUrl.query.name) {
    name = reqUrl.query.name;
  }

  var response = {
    text: "Hello " + name
  };

  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(response));

  return res;
};
