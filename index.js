/* 
1. Создать функцию, генерирующую шахматную доску. Можно использовать любые html-теги. 
Доска должна быть верно разлинована на черные и белые ячейки.
Строки должны нумероваться числами от 1 до 8, столбцы — латинскими буквами A, B, C, D, E, F, G, H.
*/

function chessBoard(size) {
    let body_elem = document.querySelector("body"); // body
    let div_prime = document.createElement("div"); // Основной div
    div_prime.style.cssText = "height: 450px; width: 450px;";
    body_elem.appendChild(div_prime);
    // Основной div для букв
    let div_letter = document.createElement("div");
    div_letter.style.cssText =
      "height: 50px; width: 400px; display: flex; margin: 0 0 0 50px; background-color: burlywood;";
    div_prime.appendChild(div_letter);
    // array для букв
    let arr_letter = [];
    for (let i = 0; i < size; i++) {
      let h = 65;
      h += i;
      arr_letter.push(String.fromCharCode(h));
    }
    console.log(arr_letter);
    //Цикл for letters
    for (let k = 0; k < size; k++) {
      let span = document.createElement("span");
      span.style.cssText =
        "display: flex; justify-content: center; align-items: center; height: 50px; width: 50px; text-align: center;";
      span.textContent = arr_letter[k];
      div_letter.appendChild(span);
    }
    // Основной div для клеток и чисел
    let div_chess = document.createElement("div");
    div_chess.style.cssText = "display: flex; background-color: burlywood;";
    div_prime.appendChild(div_chess);
    // div для чисел
    let div_number = document.createElement("div");
    div_number.style.cssText =
      "display: flex; flex-direction: column; align-self: flex-end; flex-wrap: wrap;  width: 50px;";
    div_chess.appendChild(div_number);
    // array для чисел
    let arr_num = [];
    for (let i = 1; i <= size; i++) {
      arr_num.push(i);
    }
    console.log(arr_num);
    // span для чисел
    for (let n = 0; n < size; n++) {
      let span_num = document.createElement("span");
      span_num.style.cssText =
        "display: flex; justify-content: center; align-items: center; width: 50px; height: 50px;";
      span_num.innerHTML = arr_num[n];
      div_number.appendChild(span_num);
    }
    // Основной div для клеток
    let div_chess_cont = document.createElement("div");
    div_chess_cont.style.cssText =
      "display: flex; height: 400px; width: 400px; display: flex;  flex-wrap: wrap;";
    div_chess.appendChild(div_chess_cont);
    // div для строки с клетками
    function get_div_chess_cont_item() {
      let div_chess_cont_item = document.createElement("div");
      div_chess_cont_item.style.cssText =
        "display: flex; height: 50px; width: 400px;";
      div_chess_cont.appendChild(div_chess_cont_item);
      return div_chess_cont_item;
    }
    // Создание массива для клеток
    let arr = [];
    for (let i = 0; i < size; i++) {
      arr[i] = [];
      let flag = i % 2 == 0;
      for (let j = 0; j < size; j++) {
        if (flag) {
          arr[i].push(0);
          flag = false;
        } else {
          arr[i].push(1);
          flag = true;
        }
      }
    }
    // Заполнение клеток
    for (let v = 0; v < size; v++) {
      const div_chess_cont_item = get_div_chess_cont_item();
      for (let h = 0; h < size; h++) {
        let flag = arr[v][h] == 0;
        if (flag) {
          let white = document.createElement("div");
          white.style.cssText =
            "height: 50px; width: 50px; background-color: white;";
          div_chess_cont_item.appendChild(white);
        } else {
          let black = document.createElement("div");
          black.style.cssText =
            "height: 50px; width: 50px; background-color: black;";
          div_chess_cont_item.appendChild(black);
        }
      }
    }
    console.log(arr);
  }
  
  chessBoard(10);
  