import * as dotenv from "dotenv";
dotenv.config();

void (() => {
  try {
    console.log("Hello world!");
  } catch (error) {
    console.error(error);
  }
})();
