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
let nameInput = document.querySelector(".name");
let surnameInput = document.querySelector(".surname");
let signIn = document.querySelector(".signIn");
let signUp = document.querySelector(".signUp");
let error;

signIn.onclick = () => {
  form.onsubmit = (e) => {
    e.preventDefault();
    error = false;
    if (nameInput.value.length === 0 || surnameInput.value.lenght === 0) {
      error = true;
    } else error = false;

    if (error) {
      console.log("error");
    } else {
      SignIn();

      // window.location.href = 'mainPage/index.html'
    }
  };
};
signUp.onclick = () => {
  form.onsubmit = (e) => {
    e.preventDefault();
    error = false;
    if (nameInput.value.length === 0 || surnameInput.value.lenght === 0) {
      error = true;
    } else error = false;

    if (error) {
      console.log("error");
    } else {
      SignUp();
      fetch("http://localhost:7000/users")
        .then((res) => res.json())
        .then((res) => console.log(res));
      // window.location.href = 'mainPage/index.html'
    }
  };
};

form.onsubmit = (e) => {
  e.preventDefault();
  error = false;
  if (nameInput.value.length === 0 || surnameInput.value.lenght === 0) {
    error = true;
  } else error = false;

  if (error) {
    console.log("error");
  } else {
    submit();
    // window.location.href = 'mainPage/index.html'
  }
};

function SignUp() {
  let user = {};

  let fm = new FormData(form);

  fm.forEach((value, key) => {
    user[key] = value;
  });
  console.log(user);

  postData("/users", user).then((res) => {
    if (res.status === 200 || res.status === 201) {
      //   location.assign("/pages/signin");
    }
  });
}

function SignIn() {
  let user = {};

  let fm = new FormData(form);

  fm.forEach((value, key) => {
    user[key] = value;
  });
  console.log(user);
  //   fetch("http://localhost:7000/users")
  //     .then((res) => res.json())
  //     .then((res) => {
  //       let { user } = res;
  //     })
  //     .then((res) => {

  //     });

  fetch("http://localhost:7000/users")
    .then((res) => res.json())
    .then((res) => {
      let error;
      res.forEach((userInfo) => {
        if (
          userInfo.emailOrLogin === user.emailOrLogin &&
          userInfo.password === user.password
        ) {
            window.location.href = "mainPage/index.html"
        } else {
            console.log("bye");
        }
      });
    });
}
