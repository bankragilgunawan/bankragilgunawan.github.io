const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// DAFTAR KODE PREMIUM ANDA
const PREMIUM_KEYS = ["PRO99", "JACKPOT2026", "VIP-USER"];

app.post('/verify', (req, res) => {
    const { code } = req.body;
    if (PREMIUM_KEYS.includes(code)) {
        res.json({ status: "success", message: "Akses Aktif" });
    } else {
        res.status(401).json({ status: "error", message: "Kode Salah" });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server jalan di port ${PORT}`));
