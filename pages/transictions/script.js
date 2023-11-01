let transactions = document.querySelector(".transactions");
function transictions(arr) {
  arr.forEach((item) => {
    let transaction = document.createElement("div");
    let time = document.createElement("p");
    let date = document.createElement("p");
    let currency = document.createElement("img");
    let id = document.createElement("p");
    let sum = document.createElement("p");
    let statusBox = document.createElement("div");
    let status = document.createElement("p");

    transaction.classList.add("transaction");
    statusBox.classList.add("statusBox");
    currency.src = "/img/bitcoin.png"
    time.innerHTML = item.time;
    date.innerHTML = item.date;
    currency.innerHTML = item.currency;
    id.innerHTML = item.id;
    sum.innerHTML = sum.id;
    status.innerHTML = "Successful";
    statusBox.append(status);
    transaction.append(time, date, currency, id, sum,statusBox);
    transactions.append(transaction);
  });
}
let addTrans = document.querySelector(".AddTrans");
addTrans.onclick = () => {
  window.location.href = "/pages/addTransiction/";
};
fetch("http://localhost:7000/transictions")
  .then((res) => res.json())
  .then((res) => transictions(res));
