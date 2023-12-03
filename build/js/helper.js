import { TIMEOUT_SEC } from "./config.js";

export function getRandomYear() {
  // Set the minimum and maximum year values
  const min = 2001;
  const max = 2023;

  // Generate a random number between min and max, inclusive
  const random = Math.floor(Math.random() * (max - min + 1)) + min;

  // Return the random year
  return random;
}

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};
// we made the 2 functions below into 1, aslo set uploadData = undifined , becuase when we are fetchin data we are not uploading data....
// Called AJAX becasue both are AJAX calls,
export const AJAX = async function (url, uploadData = undefined) {
  try {
    const fetchPro = uploadData
      ? fetch(url, {
          method: "POST",
          // the how will the data be sent,it will be in JSON format
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(uploadData),
        })
      : fetch(url);

    const res = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)]);

    const data = await res.json();
    // console.log(res);

    if (!res.ok) {
      throw new Error(`${data.message} (${res.status})`);
    }
    return data;
  } catch (err) {
    throw err; // we are rethrwoing error , so the error is rendered in model.js not here
  }
};
