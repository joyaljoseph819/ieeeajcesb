// GLOBAL VARIABLES

const gold_medal = `<img class="gold-medal" src="gold-medal.png" alt=""/>`;
let api_response = [];
let tableHTML = "";

let loadDetails = localStorage.getItem("pageLoadCount");

// Page Load Count
if (loadDetails) {
  let counter = JSON.parse(loadDetails).pageLoadCount + 1;
  // just update the counter and keep the date same.
  let currentDate = JSON.parse(loadDetails).date;
  localStorage.setItem(
    "pageLoadCount",
    JSON.stringify({
      pageLoadCount: counter,
      date: currentDate,
    })
  );
  console.log("local storage: ", localStorage.getItem("pageLoadCount"));
} else {
  localStorage.setItem(
    "pageLoadCount",
    JSON.stringify({ pageLoadCount: 1, date: new Date() })
  );
  console.log("local storage: ", localStorage.getItem("pageLoadCount"));
}

// Fetch API
if (!maxLimitReached() || 1 == 1) {
  fetch(
    "https://script.googleusercontent.com/macros/echo?user_content_key=DrLXNPbD3X8HM-3SKj6ExcdqixAWqWm5t0zZvpLuUxkCUtZIiOUIX_ygV3Do0EEkCUy5Uv0_2XZqPlWROptjHF6ckQTQOzUEm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnC7DnNqtsJkO9piZ0NVv-YCDiOD4tfhB6VQaWHDSgR9xi54s5Wxh0617Bxp7plS3vwbd7JZi5sF5WRuB7DQm6eayqlVsjIOf5A&lib=MelGmuroDAACWulTUQ--hk_Inqqfo8HQf"
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      api_response = data;
      document.getElementById("leaderboard-table").innerHTML = "";
      for (let i = 0; i < api_response.length; i++) {
        tableHTML += `<tr>
          <td class="number">${i + 1}</td>
          <td class="name">${api_response[i].NAME}</td>
          <td class="points">${api_response[i].SCORE} ${
          i === 0 ? gold_medal : ""
        }</td>
          </tr>`;
      }
      document.getElementById("leaderboard-table").innerHTML = tableHTML;
      localStorage.setItem("tableHTML", tableHTML);
    })
    .catch((error) => {
      console.log(error);
      document.getElementById(
        "leaderboard-table"
      ).innerHTML = `<p>Something went wrong. Please try again later.</p>`;
    });
} else {
  console.log("Max limit reached");
  document.getElementById("leaderboard-table").innerHTML =
    localStorage.getItem("tableHTML");
}

// Max Limit Reached
function maxLimitReached() {
  loadDetails = localStorage.getItem("pageLoadCount");
  if (!loadDetails) return false;
  const savedDetails = JSON.parse(loadDetails);
  if (
    savedDetails.pageLoadCount > 1 &&
    new Date(savedDetails.date).toDateString() === new Date().toDateString()
  ) {
    return true;
  }
  return false;
}
