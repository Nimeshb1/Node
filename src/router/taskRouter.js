import express from "express";
const router = express.Router();

// router.all("/", (req, res, next) => {
//   // console.log("got hit to all");
//   next();
// });

//detlet this fakedb when integrate with database
let fakeDb = [{ _id: 1, task: "Watching Tv", hr: 40, type: "entry" }];

router.get("/", (req, res) => {
  res.json({
    status: "success",
    message: "List of the tasks",
    fakeDb,
  });
});

router.post("/", (req, res, next) => {
  try {
    const data = req.body;

    //run the db query to add to db
    fakeDb.push(data);

    res.json({
      status: "success",
      message: "The new task has been added",
    });
  } catch (error) {
    error.code = 500;

    next(error);
  }
});

router.put("/", (req, res) => {
  res.json({
    message: "updating data to the db",
  });
});

router.patch("/", (req, res, next) => {
  const { _id, type } = req.body;
  console.log(req.body);

  try {
    fakeDb.map((item) => {
      if (item._id === _id) {
        item.type = type;
      }
      return item;
    });

    res.json({
      status: "sucess",
      message: "updating data to bdns",
    });
  } catch (error) {
    error.code = 500;
    next(error);
  }
});

// router.delete("/:_id", (req, res, next) => {
router.delete("/", (req, res, next) => {
  const _idArg = req.body;
  console.log(_idArg);
  fakeDb = fakeDb.filter(({ _id }) => !_idArg.includes(_id));
  try {
    res.json({
      status: "sucess",
      message: "deleted sucesfully",
    });
  } catch (error) {
    error.code = 500;
    next(error);
  }
});

export default router;
