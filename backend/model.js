
import mongoose from "mongoose"

const tickerSchema = new mongoose.Schema({
  name: String,
  last: String,
  buy: String,
  sell: String,
  high:String,
  low:String,
  volume: String,
  quote_unit:String,
  base_unit: String
});

export const Ticker = mongoose.model("Ticker",tickerSchema)
