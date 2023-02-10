const submitBtn = document.getElementById("submit");

document.querySelector("#main-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const voter_name = document.getElementById("voter_name").value;
  const estimation = document.getElementById("estimation").value;
  const res = await post("/polls/create", { voter_name, estimation });
  console.log("create poll res: ", res);
});

const resultBtn = document.getElementById("results-submit");

resultBtn.addEventListener("click", (e) => {
  e.preventDefault();
  // window.location = "/results";
  get("/polls/get").then((res) => {
    console.log("All polls: ", res);
  });
});
