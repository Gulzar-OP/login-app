import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();

// Ye line __dirname ko set karne ke liye hai
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// React build ko static folder ki tarah serve karo
app.use(express.static(path.join(__dirname, 'client/build')));

// Agar koi route match nahi hota, to React ka index.html return karo
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build/index.html'));
});

// Server start karo
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
