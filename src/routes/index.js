import { Router } from "express";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const router = Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/about", (req, res) => {
  res.render("about");
});

router.get("/contact", (req, res) => {
  res.render("contact");
});

router.get("/data/products.json", (req, res) => {
  const filePath = join(__dirname, "../data/products.json");
  console.log("File path:", filePath); // Esto te ayudará a ver qué ruta está tratando de acceder
  res.sendFile(filePath);
});


export default router;