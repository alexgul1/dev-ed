function task1(str) {
  let re = /a.b/g;
  return str.match(re);
}

function task2(str) {
  let re = /a..a/g;
  return str.match(re);
}

function task3(str) {
  let re = /ab.a/g;
  return str.match(re);
}

function task4(str) {
  let re = /ab+a/g;
  return str.match(re);
}

function task5(str) {
  let re = /ab*a/g;
  return str.match(re);
}

function task6(str) {
  let re = /ab?a/g;
  return str.match(re);
}

function task7(str) {
  let re = /ab*a/g;
  return str.match(re);
}

function task8(str) {
  let re = /(ab)+(?=\b)/g;
  return str.match(re);
}

function task9(str) {
  let re = /a\.a/g;
  return str.match(re);
}

function task10(str) {
  let re = /\d\+\d/g;
  return str.match(re);
}

function task11(str) {
  let re = /\d\++\d/g;
  return str.match(re);
}
function task12(str) {
  let re = /2\+*3/g;
  return str.match(re);
}
function task13(str) {
  let re = /\*q+\+/g;
  return str.match(re);
}
function task14(str) {
  let re = /\ba(?!a).*a\b/g;
  return str.match(re).toString().replace(/\ba|a\b/g, '!');
}

function task15(str) {
  let re = /ab{2,4}a/g;
  return str.match(re);
}
function task16(str) {
  let re = /ab{0,3}a/g;
  return str.match(re);
}
function task17(str) {
  let re = /ab{0,4}a/g;
  return str.match(re);
}
function task18(str) {
  let re = /a\da/g;
  return str.match(re);
}
function task19(str) {
  let re = /a\d+a/g;
  return str.match(re);
}

function task20(str) {
  let re = /a\d*a/g;
  return str.match(re);
}

function task21(str) {
  let re = /a\Db/g;
  return str.match(re);
}

function task22(str) {
  let re = /a\Wb/g;
  return str.match(re);
}

function task23(str) {
  return str.replace(/ /g, '!');
}

function task24(str) {
  let re = /a[bex]a/g;
  return str.match(re);
}

function task25(str) {
  let re = /a[b.+*]a/g;
  return str.match(re);
}

function task26(str) {
  let re = /a[3-7]a/g;
  return str.match(re);
}

function task27(str) {
  let re = /a[a-g]a/g;
  return str.match(re);
}

function task28(str) {
  let re = /\ba[^ghi0-9]a\b/g;
  return str.match(re);
}

function task29(str) {
  let re = /\ba[a-fA-Z]a\b/g
  return str.match(re);
}

function task30(str) {
  let re = /\ba[^ex]a\b/g
  return str.match(re);
}

function task31(str) {
  let re = /\bw[а-яА-ЯёЁ]w\b/g
  return str.match(re);
}

function task32(str) {
  let re = /\ba[a-z]+a\b/g;
  return str.match(re);
}

function task33(str) {
  let re = /\ba[a-zA-Z]+a\b/g;
  return str.match(re);
}

function task34(str) {
  let re = /\ba[a-z0-9]+a\b/g;
  return str.match(re);
}
// ?????
function task35(str) {
  let re = /[а-яА-ЯёЁ]+/g
  return str.match(re);
}

function task36(str) {
  let re = /^\w+/g
  return str.replace(re, '!');
}

function task37(str) {
  let re = /\w+$/g;
  return str.replace(re, '!');
}

function task38(str) {
  let re = /\ba(e+|x+)a\b/g;
  return str.match(re);
}

function task39(str) {
  let re = /\ba(e{2}|x+)a\b/g;
  return str.match(re);
}

function task40(str) {
  let re = /\b\w\\\w\b/g;
  return str.replace(re, '!');
}

function task41(str) {
  let re = /\b\w\\{3}\w\b/g;
  return str.replace(re, '!');
}

function task42(str) {
  let re = /\B\/...\\\B/g;
  return str.replace(re, '!');
}

function task43(str) {
  let re = /\b(\w*|\d*)@(\w*|\d*)\b/g;
  return str.replace(re, '$2@$1');
}

function task44(str) {
  let re = /\d/g;
  return str.replace(re, '$&$&');
}

function task45(str) {
  let re = /[a-z\-_.]+@[a-z]+\.[a-z]+/g;
  return re.test(str);
}

function task46(str) {
  let re = /\b[a-z\-_.]+@[a-z]+\.[a-z]+\b/g;
  return str.match(re);
}

function task47(str) {
  let re = /[a-z\-]+\.[a-z]+/g;
  return re.test(str);
}

function task48(str) {
  let re = /http:\/\/[a-z\-]+\.[a-z]+/g;
  return re.test(str);
}

function task49(str) {
  let re = /https?:\/\/[a-z\-]+\.[a-z]+/g;
  return re.test(str);
}

function task50(str) {
  let re = /^https?.*/g;
  return re.test(str);
}

function task51(str) {
  let re = /\.(txt|html|php)$/g;
  return re.test(str);
}

function task52(str) {
  let re = /\.jpe?g$/g;
  return re.test(str)
}

function task53(str) {
  let re = /^\d{1,12}$/g;
  return re.test(str);
}

function task54(str) {
  let sum = 0;
  let re = /\d/g;
  let arr = str.match(re);
  arr.forEach(element => {
    sum += parseInt(element, 10);
  });
  return sum;
}

function task55(str) {
  let re = /(https?:\/\/)([a-z]+\.[a-z]+)/g;
  return str.replace(re, '<a href=\"$1$2\">$2</a>')
}

function task56(str) {
  let re = / {2,}/g;
  return str.replace(re, ' ');
}

function task57(str) {
  let re = /\/\*.*\*\//g;
  return str.replace(re, '');
}

function task58(str) {
  let re = /<!--.*-->/g;
  return str.replace(re, '');
}

function task59 (str) {
  let re = /aaa(?=b)/g;
  return str.replace(re, '!');
}

function task60(str) {
  let re = /aaa(?=[^b])/g
  return str.replace(re, '!');
}

function task61(str) {
  let re = /\d+/g;
  return str.replace(re, replacer);
  function replacer(match) {
    let num = parseInt(match, 10);
    return num * num;
  }
}

function task62(str) {
  let re = /(?!')\d+(?=')/g;
  return str.replace(re, replacer);
  function replacer(match) {
    let num = parseInt(match, 10);
    return num * 2;
  }
}

function task63(str) {
  let re = /(?!{)(?!{).+(?=}})/g;
  return str.replace(re, replacer);
  function replacer(match) {
    let revert = '';
    for (let i = match.length - 1; i >= 0; i--) {
      revert += match[i];
    }
    return revert;
  }
}

function task64(str) {
  let sum = 0;
  let re = /\d+/g;
  str.replace(re, replacer);
  function replacer(match) {
    sum += parseInt(match, 10);
  }
  return `${str} ${sum}`;
}

function task65(str) {
  let re = /[1][9][0-9][0-9]|[2][0][0-9][0-9]|2100/g;
  return re.test(str);
}

function task66(str) {
  let re = /^([0-1]\d|2[0-3]):[0-5]\d$/g
  return re.test(str);
}

function task67(str) {
  let re = /^(\d|10|11|12).[0-5]\d (am|pm)$/g;
  return re.test(str);
}

function task68(str) {
  let re = /\w*(.)\1\w*/g;
  return str.replace(re, '');
}

function task69_70(str) {
  let re = /(\b\w+\b\s)(?=.*?\1)/g;
  return str.replace(re, '');
}

module.exports = {
  task1,
  task2,
  task3,
  task4,
  task5,
  task6,
  task7,
  task8,
  task9,
  task10,
  task11,
  task12,
  task13,
  task14,
  task15,
  task16,
  task17,
  task18,
  task19,
  task20,
  task21,
  task22,
  task23,
  task24,
  task25,
  task26,
  task27,
  task28,
  task29,
  task30,
  task31,
  task32,
  task33,
  task34,
  task35,
  task36,
  task37,
  task38,
  task39,
  task40,
  task41,
  task42,
  task43,
  task44,
  task45,
  task46,
  task47,
  task48,
  task49,
  task50,
  task51,
  task52,
  task53,
  task54,
  task55,
  task56,
  task57,
  task58,
  task59,
  task60,
  task61,
  task62,
  task63,
  task64,
  task65,
  task66,
  task67,
  task68,
  task69_70,
};
