
import express from "express";
import axios from "axios";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.get("/weather", async (req, res) => {
  const city = req.query.city;
  if (!city) return res.status(400).json({ error: "City is required" });

  try {
    const apiKey = process.env.OPENWEATHER_API_KEY;
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );

    const data = response.data;
    const result = {
      city: data.name,
      temperature: data.main.temp,
      condition: data.weather[0].main,
      icon: `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`,
      humidity: data.main.humidity,
      windSpeed: data.wind.speed,
    };

    res.json(result);
  } catch (error) {
    console.error("Weather API error:", error.response?.data || error.message);
    res.status(500).json({ error: "Unable to fetch weather data" });
  }
});


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
