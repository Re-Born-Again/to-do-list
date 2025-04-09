import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "todolist",
  password: "",
  port: 5432,
});
db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let items = [];

async function getItemsFromDB(){
  try {
    const result = await db.query(
      "SELECT * FROM items"
    );
    const newitems = [];
    result.rows.forEach((val)=>newitems.push(val));
    items = newitems;
  } catch (err) {
    console.log(err);
  }
}

app.get("/", async (req, res) => {
  await getItemsFromDB();
  res.render("index.ejs", {
    listTitle: "Today",
    listItems: items,
  });
});

app.post("/add", async (req, res) => {
  const item = req.body.newItem;
  try {
    await db.query("INSERT INTO items (title) VALUES ($1)",[item]);
  } catch (err) {
    console.log(err);
  }
  res.redirect("/");
});

app.post("/edit", async (req, res) => {
  const id = req.body.updatedItemId;
  const newtitle = req.body.updatedItemTitle;
  try {
    await db.query("UPDATE items SET title = $2 WHERE id = $1;",[id,newtitle]);
  } catch (err) {
    console.log(err);
  }
  res.redirect("/");
});

app.post("/delete", async (req, res) => {
  const id = req.body.deleteItemId;
  try {
    await db.query("DELETE FROM items WHERE id = $1;",[id]);
  } catch (err) {
    console.log(err);
  }
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
