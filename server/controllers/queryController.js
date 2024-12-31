const fs = require("fs");

exports.getQuery = async (req, res) => {
  const data = JSON.parse(
    fs.readFileSync(`${__dirname}/../data/queryData.json`, "utf-8")
  );
  console.log(req.query);

  if (Object.keys(req.query).length === 0) {
    return res.status(404).json({
      status: "Not found",
    });
  }

  const filteredQuery = data?.query.filter((item) =>
    item.title.toLowerCase().startsWith(req.query.title.toLowerCase())
  );
  res.status(200).json({
    status: "success",
    data: filteredQuery,
  });
};
