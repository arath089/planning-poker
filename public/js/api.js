async function get(
  url,
  data,
  headers = {
    "Content-Type": "application/json",
  }
) {
  try {
    let res = await fetch(url, {
      method: "GET",
      headers: headers,
      body: JSON.stringify(data),
    });

    if (res.ok === true && res.status === 200) {
      return await res.json();
    } else {
      var errRes = await res.json();
      if (!errRes) {
        errRes = res;
      }
      return Promise.reject(errRes);
    }
  } catch (error) {
    console.log("Fetch Post Error: ", error);
  }
}

async function post(
  url,
  data,
  headers = {
    "Content-Type": "application/json",
  }
) {
  try {
    let res = await fetch(url, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(data),
    });

    if (res.ok === true && res.status === 200) {
      return await res.json();
    } else {
      var errRes = await res.json();
      if (!errRes) {
        errRes = res;
      }
      return Promise.reject(errRes);
    }
  } catch (error) {
    console.log("Fetch Post Error: ", error);
  }
}
