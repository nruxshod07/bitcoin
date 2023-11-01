let postData = async (url, body) => {
  const res = await fetch("http://localhost:7000/transictions", {
    method: "post",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return res;
};
let sumInp = document.querySelector("#sum");
let currencyInp = document.querySelector("#currency")
let form = document.forms[0];

form.onsubmit = (e) => {
  e.preventDefault();
  error = false;
  if (error) {
    console.log("error");
  } else {
    submit();
  }
};
function submit() {
    let date = new Date()
  let user = {
    time:`${date.getHours()}:${date.getMinutes()}`,
    date:`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`,
  };
  

  let fm = new FormData(form);

  fm.forEach((value, key) => {
    user[key] = value;
  });
  console.log(user);
  postData("/transictions", user);
}
