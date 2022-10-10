//獲得正整數範圍，有含上限(最小值,最大值)
function getIntRange(min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min);
}

//獲得正整數 含輸入的數到0 
function getIntTo0(x) {
    return Math.floor(Math.random() * (x + 1));
}
//獲得正整數 含輸入的數到1 
function getIntTo1(x) {
    return Math.floor(Math.random() * x + 1);
}

// 閏年檢查 (傳入年分) 回傳T/F
function checkYear(InY) {
    let ch1 = 0, ch2 = 0, ch3 = 0;
    ch1 = InY % 4;
    ch2 = InY % 400;
    ch3 = InY % 100;

    if (ch1 != 0) {
        return false;
    }
    else {
        if (ch2 == 0) {
            return true;
        }
        else {
            if (ch3 == 0) {
                return false;
            }
            else {
                return true;
            }
        }
    }
}

//檢查密碼 (傳入字串)回傳T/F
function checkPassword(ForCheck) {
    let re = /(?=^\S)(?=.*[A-Z].*)(?=.*[a-z].*)(?=.*[0-9].*)(?=.{8,})(?=.*[\W].*)(?!.*\s.*)/g;
    let str = ForCheck.value;
    return re.test(str);
}

//產生身分證，直接產生字串
function makeID() {
    let stChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let randomChar = 0;
    randomChar = Math.floor(Math.random() * (26));
    stc = stChar[randomChar];

    // 取得英文對應數值
    let N01 = 0;
    {
        if (stc[0] == "B" || stc[0] == "N" || stc[0] == "Z") {
            N01 = 0;
        }
        else if (stc[0] == "A" || stc[0] == "M" || stc[0] == "W") {
            N01 = 1;
        }
        else if (stc[0] == "L" || stc[0] == "Y" || stc[0] == "K") {
            N01 = 2;
        }
        else if (stc[0] == "J" || stc[0] == "V" || stc[0] == "X") {
            N01 = 3;
        }
        else if (stc[0] == "H" || stc[0] == "U") {
            N01 = 4;
        }
        else if (stc[0] == "G" || stc[0] == "T") {
            N01 = 5;
        }
        else if (stc[0] == "F" || stc[0] == "I" || stc[0] == "S") {
            N01 = 6;
        }
        else if (stc[0] == "E" || stc[0] == "R") {
            N01 = 7;
        }
        else if (stc[0] == "D" || stc[0] == "O" || stc[0] == "Q") {
            N01 = 8;
        }
        else if (stc[0] == "C" || stc[0] == "P") {
            N01 = 9;
        }
    }


    // 取得性別碼
    let rn = 0, sumN = N01, sumChar = stc, k = 7, rnGender = 0;
    rnGender = Math.floor(Math.random() * 2 + 1);
    sumN = sumN + rnGender * 8;
    sumChar = sumChar + rnGender;

    // 取得中間7碼
    for (let i = 1; i <= 7; i++) {
        rn = Math.floor(Math.random() * 10);
        sumN = sumN + rn * k;
        sumChar = sumChar + rn;
        k--;
    }
    // 檢查碼
    let ama = (sumN % 10)
    let checkNum = 10 - ama;


    if (ama == 0) {
        sumChar = sumChar + 0;
    }
    else {
        sumChar = sumChar + checkNum;
    }
    sumN = sumN + checkNum;
    return sumChar;
}

//檢查身分證字號字串(輸入字串，回傳為T/F)
function checkIDStr(str) {
    let re = /^[A-Z][12][0-9]{8}$/gi;
    return re.test(str);
}

//檢查身分證字號(字串需先檢查完，回傳為T/F)
function checkID(ST) {
    let sum = 0, i = 8, N01 = 0;
    // 英文驗證
    if (ST[0] == "B" || ST[0] == "N" || ST[0] == "Z") {
        N01 = 0;
    }
    else if (ST[0] == "A" || ST[0] == "M" || ST[0] == "W") {
        N01 = 1;
    }
    else if (ST[0] == "L" || ST[0] == "Y" || ST[0] == "K") {
        N01 = 2;
    }
    else if (ST[0] == "J" || ST[0] == "V" || ST[0] == "X") {
        N01 = 3;
    }
    else if (ST[0] == "H" || ST[0] == "U") {
        N01 = 4;
    }
    else if (ST[0] == "G" || ST[0] == "T") {
        N01 = 5;
    }
    else if (ST[0] == "F" || ST[0] == "I" || ST[0] == "S") {
        N01 = 6;
    }
    else if (ST[0] == "E" || ST[0] == "R") {
        N01 = 7;
    }
    else if (ST[0] == "D" || ST[0] == "O" || ST[0] == "Q") {
        N01 = 8;
    }
    else if (ST[0] == "C" || ST[0] == "P") {
        N01 = 9;
    }
    // 數字和
    for (let Num of ST) {
        if (isNaN(Num)) {
            continue;
        }
        else {
            sum = sum + Num * i;
        }
        if (i != 1) {
            i--;
        }
    }
    sum = sum + N01;
    //輸出
    let checkID = sum % 10;
    if (checkID == 0) {
        return true;
    }
    else {
        return false;
    }
}

//排序(陣列，排序方式0升序，1降序) 回傳陣列  ※移用時子屬性要改 
function arrforsort(arrin, sort) {
    let arrsorted = arrin.sort((a, b) => {
        if (sort === 1) {
            return b.price - a.price;  //降序
        }
        else {
            return a.price - b.price;   //升序
        }
    })
    return arrsorted;
}

//篩選 輸入(陣列，要篩選的文字) 回傳陣列 ※移用時要改篩選對象
function FILT(arr, txt) {
    let arrout = arr.filter((value, index, array) => {
        if (value.product_name.indexOf(txt) !== -1) {
            return value.product_name;
        }
    })
    return arrout;
}

//設定頁數 (按鈕外框,資料全長,切割長度)
function SetPageButton(btnFrameOP, fullArrayLength, cutLength) {
    while (btnFrameOP.hasChildNodes()) {
        btnFrameOP.removeChild(btnFrameOP.lastChild);
    }
    let page = Math.ceil(fullArrayLength / cutLength);

    let docFrag = document.createDocumentFragment();

    for (let i = 0; i < page; i++) {
        let pageNumber = document.createElement("div");
        pageNumber.classList.add("btnpage");
        let num = document.createTextNode(`${i + 1}`);
        pageNumber.appendChild(num)
        docFrag.appendChild(pageNumber);
    }
    btnFrameOP.appendChild(docFrag);

    if (FR.hasChildNodes()) {
        FR.childNodes[pagenow - 1].setAttribute("style", "color: red")
    }

    let pages = document.querySelectorAll(".btnpage")
    for (let i = 0; i < pages.length; i++) {
        pages[i].addEventListener("click", () => {

            pagenow = i + 1;

            let SCHCON = searchInput.value;
            let sorted = 1
            if (SUP.checked) {
                sorted = 0;
            }
            Output(showBox, clipArr(arrforsort(FILT(S8MEALS, SCHCON), sorted), cutAmount, pagenow));

        })
    }
}

//切割陣列(陣列,切割數量,第幾頁) 輸出陣列 (有連動到設定頁數)
function clipArr(arrin, amount, page) {
    let START = (page - 1) * amount;
    let END = page * amount;
    let arrcliped = arrin.slice(START, END);

    pageall = Math.ceil(arrin.length / amount)
    SetPageButton(FR, arrin.length, amount);
    return arrcliped;

}

//選擇器
function qs(queryTarget) {
    return document.querySelector(queryTarget);
}

//全部選擇器
function qsA(queryTarget) {
    return document.querySelectorAll(queryTarget);
}

//取得屬性 傳入節點,屬姓名
function getStyle(DOM, style) {
    return window.getComputedStyle(DOM).getPropertyValue(style);
}