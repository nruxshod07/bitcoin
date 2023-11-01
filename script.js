let postData = async (url, body) => {
  const res = await fetch("http://localhost:7000/users", {
    method: "post",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return res;
};
let form = document.forms[0];
let btn = document.querySelector("button");
let emailOrLogin = document.querySelector(".emailOrLogin");
let password = document.querySelector(".password");
let signIn = document.querySelector(".signIn");
let signUp = document.querySelector(".signUp");
let error;

signIn.onclick = () => {
  form.onsubmit = (e) => {
    e.preventDefault();
    error = false;
    if (emailOrLogin.value.length === 0 || password.value.length === 0) {
      error = true;
    } else error = false;

    if (error) {
      console.log("error");
    } else {
      SignIn();
    }
  };
};
signUp.onclick = () => {
  form.onsubmit = (e) => {
    e.preventDefault();
    error = false;
    if (emailOrLogin.value.length <= 0 || password.value.length <= 0) {
      error = true;
    } else {
      error = false;
    }
    console.log(emailOrLogin.value.length, password.value.length);
    if (error) {
      console.log("error");
    } else if (!error) {
      SignUp();
    }
  };
};

function SignUp() {
  let user = {};

  let fm = new FormData(form);

  fm.forEach((value, key) => {
    user[key] = value;
  });
  console.log(user);

  postData("/users", user);
  window.location.href = "/pages/overview/";
}

function SignIn() {
  let user = {};

  let fm = new FormData(form);

  fm.forEach((value, key) => {
    user[key] = value;
  });

  fetch("http://localhost:7000/users")
    .then((res) => res.json())
    .then((res) => {
      res.forEach((userInfo) => {
console.log(userInfo);
        if (
          userInfo.emailOrLogin === user.emailOrLogin &&
          userInfo.password === user.password
        ) {
          window.location.href = "/pages/overview/";
        } else {
          console.log("error");
        }
      });
    });
}
