const fs = require("fs");

exports.getQuery = async (req, res) => {
  const data = JSON.parse(
    fs.readFileSync(`${__dirname}/../data/queryData.json`, "utf-8")
  );

  if (Object.keys(req.query).length === 0) {
    return res.status(404).json({
      status: "Not found",
    });
  }

  const filteredQuery = data?.filter((item) =>
    item.title.toLowerCase().startsWith(req.query.title.toLowerCase())
  );
  res.status(200).json({
    status: "success",
    data: filteredQuery,
  });
};

exports.visitedQuery = async (req, res) => {
  const data = await JSON.parse(
    fs.readFileSync(`${__dirname}/../data/queryData.json`, "utf-8")
  );

  const updatedData = await data.map((item) =>
    +item.id === +req.body.id ? { ...item, visited: true } : item
  );
  await fs.writeFileSync(
    `${__dirname}/../data/queryData.json`,
    JSON.stringify(updatedData),
    "utf-8"
  );

  res.status(200).json({
    status: "ok",
  });
};

exports.getData = (req, res) => {
  const data = JSON.parse(
<<<<<<< Updated upstream
    fs.readFileSync(`${__dirname}/../data/queryData.json`, "utf-8")
  );

  const content = data.filter((item) => item.id === req.query.id);
=======
    fs.readFileSync(`${__dirname}/../data/description.json`, "utf-8")
  );

  const content = data.filter((item) => item.id === req.query.id);

  console.log(content);
  
>>>>>>> Stashed changes
  res.status(200).json({
    status: "asdjahdh",
    data: content,
  });
};
