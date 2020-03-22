const regExp = require('../regExp');

/* describe('task', function () {
  it('подаем на вход ', function () {
    assert.deepEqual(regExp.task(), []);
  });
});  */
describe('regExp', function() {
  describe('task1', function() {
    it('подаем на вход ahb acb aeb aeeb adcb axeb', function() {
      assert.deepEqual(regExp.task1('ahb acb aeb aeeb adcb axeb'), ['ahb', 'acb', 'aeb']);
    });
    it('подаем на вход ahgb acb aeb aeeb adcb axeb', function() {
      assert.deepEqual(regExp.task1('ahgb acb aeb aeeb adcb axeb'), ['acb', 'aeb']);
    });
    it('подаем на вход aeeb adcb axeb', function() {
      assert.deepEqual(regExp.task1('aeeb adcb axeb'), null);
    });
  });
  describe('task2', function() {
    it('подаем на вход aba aca aea abba adca abea', function() {
      assert.deepEqual(regExp.task2('aba aca aea abba adca abea'), ['abba', 'adca', 'abea']);
    });
    it('подаем на вход aba aca aea abba adgca abea', function() {
      assert.deepEqual(regExp.task2('aba aca aea abba addca abea'), ['abba', 'abea']);
    });
    it('подаем на вход abgga aca aea', function() {
      assert.deepEqual(regExp.task2('abgga aca aea'), null);
    });
  });
  describe('task3', function() {
    it('подаем на вход aba aca aea abba adca abea', function() {
      assert.deepEqual(regExp.task3('aba aca aea abba adca abea'), ['abba', 'abea']);
    });
  });
  describe('task4', function() {
    it('подаем на вход aa aba abba abbba abca abea', function() {
      assert.deepEqual(regExp.task4('aa aba abba abbba abca abea'), ['aba', 'abba', 'abbba']);
    });
    it('подаем на вход aa aba abbba abca abea', function() {
      assert.deepEqual(regExp.task4('aa aba abbba abca abea'), ['aba', 'abbba']);
    });
    it('подаем на вход aa a abca abea', function() {
      assert.deepEqual(regExp.task4('aa a abca abea'), null);
    });
  });
  describe('task5', function() {
    it('подаем на вход aa aba abba abbba abca abea', function() {
      assert.deepEqual(regExp.task5('aa aba abba abbba abca abea'), ['aa', 'aba', 'abba', 'abbba']);
    });
    it('подаем на вход aa aba abbba abca abea', function() {
      assert.deepEqual(regExp.task5('aa aba abbba abca abea'), ['aa', 'aba', 'abbba']);
    });
    it('подаем на вход abca abea', function() {
      assert.deepEqual(regExp.task5(' abca abea'), null);
    });
  });
  describe('task6', function() {
    it('подаем на вход aa aba abba abbba abca abea', function() {
      assert.deepEqual(regExp.task6('aa aba abba abbba abca abea'), ['aa', 'aba']);
    });
    it('подаем на вход aa abba abbba abca abea', function() {
      assert.deepEqual(regExp.task6('aa abba abbba abca abea'), ['aa']);
    });
    it('подаем на вход abba abbba abca abea', function() {
      assert.deepEqual(regExp.task6('abbba abca abea'), null);
    });
  });
  describe('task7', function() {
    it('подаем на вход aa aba abba abbba abca abea', function() {
      assert.deepEqual(regExp.task7('aa aba abba abbba abca abea'), ['aa', 'aba', 'abba', 'abbba']);
    });
  });
  describe('task8', function() {
    it('подаем на вход ab abab abab abababab abea', function() {
      assert.deepEqual(regExp.task8('ab abab abab abababab abea'), [
        'ab',
        'abab',
        'abab',
        'abababab',
      ]);
    });
    it('подаем на вход ab abab abababab abea', function() {
      assert.deepEqual(regExp.task8('ab abab abababab'), ['ab', 'abab', 'abababab']);
    });
    it('подаем на вход  abea', function() {
      assert.deepEqual(regExp.task8('gfg'), null);
    });
  });
  describe('task9', function() {
    it('подаем на вход a.a aba aea', function() {
      assert.deepEqual(regExp.task9('a.a aba aea'), ['a.a']);
    });
  });
  describe('task10', function() {
    it('подаем на вход 2+3 223 2223', function() {
      assert.deepEqual(regExp.task10('2+3 223 2223'), ['2+3']);
    });
    it('подаем на вход 223 2223', function() {
      assert.deepEqual(regExp.task10('223 2223'), null);
    });
  });
  describe('task11', function() {
    it('подаем на вход 23 2+3 2++3 2+++3 345 567', function() {
      assert.deepEqual(regExp.task11('23 2+3 2++3 2+++3 345 567'), ['2+3', '2++3', '2+++3']);
    });
    it('подаем на вход 23 345 567', function() {
      assert.deepEqual(regExp.task11('23 345 567'), null);
    });
  });
  describe('task12', function() {
    it('подаем на вход 23 2+3 2++3 2+++3 445 677', function() {
      assert.deepEqual(regExp.task12('23 2+3 2++3 2+++3 445 677'), ['23', '2+3', '2++3', '2+++3']);
    });
    it('подаем на вход 23 2+++3 445 677', function() {
      assert.deepEqual(regExp.task12('23 2+++3 445 677'), ['23', '2+++3']);
    });
    it('подаем на вход 445 677', function() {
      assert.deepEqual(regExp.task12('445 677'), null);
    });
  });
  describe('task13', function() {
    it('подаем на вход *+ *q+ *qq+ *qqq+ *qqq qqq+', function() {
      assert.deepEqual(regExp.task13('*+ *q+ *qq+ *qqq+ *qqq qqq+'), ['*q+', '*qq+', '*qqq+']);
    });
    it('подаем на вход *+ *q+ *qqq qqq+', function() {
      assert.deepEqual(regExp.task13('*+ *q+ *qqq qqq+'), ['*q+']);
    });
    it('подаем на вход *+ *qqq qqq+', function() {
      assert.deepEqual(regExp.task13('*+ *qqq qqq+'), null);
    });
  });
  describe('task14', function() {
    it('подаем на вход aba accca azzza wwwwa', function() {
      assert.deepEqual(regExp.task14('aba accca azzza wwwwa'), '!b! !ccc! !zzz! wwww!');
    });
    it('подаем на вход aaba aaccca azzza wwwwa', function() {
      assert.deepEqual(regExp.task14('aaba aaccca azzza wwwwa'), '!zzz! wwww!');
    });
  });
  describe('task15', function() {
    it('подаем на вход aa aba abba abbba abbbba abbbbba', function() {
      assert.deepEqual(regExp.task15('aa aba abba abbba abbbba abbbbba'), [
        'abba',
        'abbba',
        'abbbba',
      ]);
    });
    it('подаем на вход aa aba abba abbbbba', function() {
      assert.deepEqual(regExp.task15('aa aba abba abbbbba'), ['abba']);
    });
    it('подаем на вход aa aba abbbbba', function() {
      assert.deepEqual(regExp.task15('aa aba abbbbba'), null);
    });
  });
  describe('task16', function() {
    it('подаем на вход aa aba abba abbba abbbba abbbbba', function() {
      assert.deepEqual(regExp.task16('aa aba abba abbba abbbba abbbbba'), [
        'aa',
        'aba',
        'abba',
        'abbba',
      ]);
    });
    it('подаем на вход aa abbba abbbba abbbbba', function() {
      assert.deepEqual(regExp.task16('aa abbba abbbba abbbbba'), ['aa', 'abbba']);
    });
    it('подаем на вход abbbba abbbbba', function() {
      assert.deepEqual(regExp.task16('abbbba abbbbba'), null);
    });
  });
  describe('task17', function() {
    it('подаем на вход aa aba abba abbba abbbba abbbbba', function() {
      assert.deepEqual(regExp.task17('aa aba abba abbba abbbba abbbbba'), [
        'aa',
        'aba',
        'abba',
        'abbba',
        'abbbba',
      ]);
    });
    it('подаем на вход aa abbba abbbba abbbbba', function() {
      assert.deepEqual(regExp.task17('aa abbba abbbba abbbbba'), ['aa', 'abbba', 'abbbba']);
    });
    it('подаем на вход abbbba abbbbba', function() {
      assert.deepEqual(regExp.task17('abbbbba'), null);
    });
  });
  describe('task18', function() {
    it('подаем на вход a1a a2a a3a a4a a5a aba aca', function() {
      assert.deepEqual(regExp.task18('a1a a2a a3a a4a a5a aba aca'), [
        'a1a',
        'a2a',
        'a3a',
        'a4a',
        'a5a',
      ]);
    });
    it('подаем на вход a1a a4a a5a aba aca', function() {
      assert.deepEqual(regExp.task18('a1a a4a a5a aba aca'), ['a1a', 'a4a', 'a5a']);
    });
    it('подаем на вход aba aca', function() {
      assert.deepEqual(regExp.task18('aba aca'), null);
    });
  });
  describe('task19', function() {
    it('подаем на вход a1a a22a a333a a4444a a55555a aba aca', function() {
      assert.deepEqual(regExp.task19('a1a a22a a333a a4444a a55555a aba aca'), [
        'a1a',
        'a22a',
        'a333a',
        'a4444a',
        'a55555a',
      ]);
    });
    it('подаем на вход a1a a22a a55555a aba aca', function() {
      assert.deepEqual(regExp.task19('a1a a22a a55555a aba aca'), ['a1a', 'a22a', 'a55555a']);
    });
    it('подаем на вход aba aca', function() {
      assert.deepEqual(regExp.task19('aba aca'), null);
    });
  });
  describe('task20', function() {
    it('подаем на вход aa a1a a22a a333a a4444a a55555a aba aca', function() {
      assert.deepEqual(regExp.task20('aa a1a a22a a333a a4444a a55555a aba aca'), [
        'aa',
        'a1a',
        'a22a',
        'a333a',
        'a4444a',
        'a55555a',
      ]);
    });
    it('подаем на вход aa a1a a22a a55555a aba aca', function() {
      assert.deepEqual(regExp.task20('aa a1a a22a a55555a aba aca'), [
        'aa',
        'a1a',
        'a22a',
        'a55555a',
      ]);
    });
    it('подаем на вход aba aca', function() {
      assert.deepEqual(regExp.task20('aba aca'), null);
    });
  });
  describe('task21', function() {
    it('подаем на вход avb a1b a2b a3b a4b a5b abb acb', function() {
      assert.deepEqual(regExp.task21('avb a1b a2b a3b a4b a5b abb acb'), ['avb', 'abb', 'acb']);
    });
    it('подаем на вход a4b a5b abb acb', function() {
      assert.deepEqual(regExp.task21('a4b a5b abb acb'), ['abb', 'acb']);
    });
    it('подаем на вход a4b a5b', function() {
      assert.deepEqual(regExp.task21('a4b a5b'), null);
    });
  });
  describe('task22', function() {
    it('подаем на вход ave a#b a2b a$b a4b a5b a-b acb', function() {
      assert.deepEqual(regExp.task22('ave a#b a2b a$b a4b a5b a-b acb'), ['a#b', 'a$b', 'a-b']);
    });
    it('подаем на вход a4b a5b a-b acb', function() {
      assert.deepEqual(regExp.task22('a4b a5b a-b acb'), ['a-b']);
    });
    it('подаем на вход a4b a5b acb', function() {
      assert.deepEqual(regExp.task22('a4b a5b acb'), null);
    });
  });
  describe('task23', function() {
    it('подаем на вход ave a#a a2a a$a a4a a5a a-a aca', function() {
      assert.deepEqual(
        regExp.task23('ave a#a a2a a$a a4a a5a a-a aca'),
        'ave!a#a!a2a!a$a!a4a!a5a!a-a!aca',
      );
    });
    it('подаем на вход ave  aca', function() {
      assert.deepEqual(regExp.task23('ave  aca'), 'ave!!aca');
    });
  });
  describe('task24', function() {
    it('подаем на вход aba aea aca aza axa', function() {
      assert.deepEqual(regExp.task24('aba aea aca aza axa'), ['aba', 'aea', 'axa']);
    });
  });
  describe('task25', function() {
    it('подаем на вход aba aea aca aza axa a.a a+a a*a', function() {
      assert.deepEqual(regExp.task25('aba aea aca aza axa a.a a+a a*a'), [
        'aba',
        'a.a',
        'a+a',
        'a*a',
      ]);
    });
  });
  describe('task26', function() {
    it('подаем на вход ava a1a a2a a3a a4a a5a aba aca', function() {
      assert.deepEqual(regExp.task26('ava a1a a2a a3a a4a a5a aba aca'), ['a3a', 'a4a', 'a5a']);
    });
    it('подаем на вход ava a1a a2a aba aca', function() {
      assert.deepEqual(regExp.task26('ava a1a a2a aba aca'), null);
    });
  });
  describe('task27', function() {
    it('подаем на вход ava a1a a2a a3a a4a a5a aba aca', function() {
      assert.deepEqual(regExp.task27('ava aka a1a a2a a3a a4a a5a aba aca'), ['aba', 'aca']);
    });
    it('подаем на вход ava a1a a2a a3a a4a a5a', function() {
      assert.deepEqual(regExp.task27('ava aka a1a a2a a3a a4a a5a'), null);
    });
  });
  describe('task28', function() {
    it('подаем на вход ava aza aga a1a a2a a3a a4a a5a aba aca', function() {
      assert.deepEqual(regExp.task28('ava aza aga a1a a2a a3a a4a a5a aba aca'), [
        'ava',
        'aza',
        'aba',
        'aca',
      ]);
    });
    it('подаем на вход ava aka aga', function() {
      assert.deepEqual(regExp.task28('ava aka aga'), ['ava', 'aka']);
    });
    it('подаем на вход ava a1a a2a a3a a4a a5a', function() {
      assert.deepEqual(regExp.task28('aga a1a a2a a3a a4a a5a'), null);
    });
  });
  describe('task29', function() {
    it('подаем на вход ava aza aga a4a a5a aZa aKa aba aca', function() {
      assert.deepEqual(regExp.task29('ava aza aga a4a a5a aZa aKa aba aca'), [
        'aZa',
        'aKa',
        'aba',
        'aca',
      ]);
    });
    it('подаем на вход ava aza aga a4a a5a aZa aca', function() {
      assert.deepEqual(regExp.task29('ava aza aga a4a a5a aZa aca'), ['aZa', 'aca']);
    });
    it('подаем на вход ava aza aga a4a a5a', function() {
      assert.deepEqual(regExp.task29('ava aza aga a4a a5a'), null);
    });
  });
  describe('task30', function() {
    it('подаем на вход aba aea aca aza axa a-a a#a', function() {
      assert.deepEqual(regExp.task30('aba aea aca aza axa a-a a#a'), [
        'aba',
        'aca',
        'aza',
        'a-a',
        'a#a',
      ]);
    });
    it('подаем на вход aea axa', function() {
      assert.deepEqual(regExp.task30('aea axa'), null);
    });
  });
  describe('task31', function() {
    it('подаем на вход wйw wяw wёw wqw', function() {
      assert.deepEqual(regExp.task31('wйw wяw wёw wqw'), ['wйw', 'wяw', 'wёw']);
    });
    it('подаем на вход wqw', function() {
      assert.deepEqual(regExp.task31('wqw'), null);
    });
  });
  describe('task32', function() {
    it('подаем на вход aAXa aeffa aGha aza ax23a a3sSa', function() {
      assert.deepEqual(regExp.task32('aAXa aeffa aGha aza ax23a a3sSa'), ['aeffa', 'aza']);
    });
    it('подаем на вход aGha ax23a a3sSa', function() {
      assert.deepEqual(regExp.task32('aGha ax23a a3sSa'), null);
    });
  });
  describe('task33', function() {
    it('подаем на вход aAXa aeffa aGha aza ax23a a3sSa', function() {
      assert.deepEqual(regExp.task33('aAXa aeffa aGha aza ax23a a3sSa'), [
        'aAXa',
        'aeffa',
        'aGha',
        'aza',
      ]);
    });
    it('подаем на вход ax23a a3sSa', function() {
      assert.deepEqual(regExp.task33('ax23a a3sSa'), null);
    });
  });
  describe('task34', function() {
    it('подаем на вход aAXa aeffa aGha aza ax23a a3sSa', function() {
      assert.deepEqual(regExp.task34('aAXa aeffa aGha aza ax23a a3sSa'), ['aeffa', 'aza', 'ax23a']);
    });
    it('подаем на вход aAXa aGha  a3sSa', function() {
      assert.deepEqual(regExp.task34('aAXa aGha  a3sSa'), null);
    });
  });
  describe('task35', function() {
    it('подаем на вход ааа ббб ёёё ззз ййй ААА БББ ЁЁЁ ЗЗЗ ЙЙЙ', function() {
      assert.deepEqual(regExp.task35('ааа ббб ёёё ззз ййй ААА БББ ЁЁЁ ЗЗЗ ЙЙЙ'), [
        'ааа',
        'ббб',
        'ёёё',
        'ззз',
        'ййй',
        'ААА',
        'БББ',
        'ЁЁЁ',
        'ЗЗЗ',
        'ЙЙЙ',
      ]);
    });
  });
  describe('task36', function() {
    it('подаем на вход aaa aaa aaa', function() {
      assert.deepEqual(regExp.task36('aaa aaa aaa'), '! aaa aaa');
    });
    it('подаем на вход kkkk aaa aaa aaa', function() {
      assert.deepEqual(regExp.task36('kkkk aaa aaa aaa'), '! aaa aaa aaa');
    });
  });
  describe('task37', function() {
    it('подаем на вход aaa aaa aaa', function() {
      assert.deepEqual(regExp.task37('aaa aaa aaa'), 'aaa aaa !');
    });
    it('подаем на вход aaa aaa aaa sadsad', function() {
      assert.deepEqual(regExp.task37('aaa aaa aaa sadsad'), 'aaa aaa aaa !');
    });
  });
  describe('task38', function() {
    it('подаем на вход aeeea aeea aea axa axxa axxxa', function() {
      assert.deepEqual(regExp.task38('aeeea aeea aea axa axxa axxxa'), [
        'aeeea',
        'aeea',
        'aea',
        'axa',
        'axxa',
        'axxxa',
      ]);
    });
    it('подаем на вход aedsfdseea aeea aea axa axxa axxxa', function() {
      assert.deepEqual(regExp.task38('aedsfdseea aeea aea axa axxa axxxa'), [
        'aeea',
        'aea',
        'axa',
        'axxa',
        'axxxa',
      ]);
    });
    it('подаем на вход aedsfdseea aexxea aea axa axxa axxxa', function() {
      assert.deepEqual(regExp.task38('aedsfdseea aexxea aea axa axxa axxxa'), [
        'aea',
        'axa',
        'axxa',
        'axxxa',
      ]);
    });
    it('подаем на вход aedsfdseea aexxea', function() {
      assert.deepEqual(regExp.task38('aedsfdseea aexxea'), null);
    });
  });
  describe('task39', function() {
    it('подаем на вход aeeea aeea aea axa axxa axxxa', function() {
      assert.deepEqual(regExp.task39('aeeea aeea aea axa axxa axxxa'), [
        'aeea',
        'axa',
        'axxa',
        'axxxa',
      ]);
    });
    it('подаем на вход aeeea aedddea aea axa axxa axxxa', function() {
      assert.deepEqual(regExp.task39('aeeea aedddea aea axa axxa axxxa'), ['axa', 'axxa', 'axxxa']);
    });
    it('подаем на вход aeeea aedddea', function() {
      assert.deepEqual(regExp.task39('aeeea aedddea'), null);
    });
  });
  describe('task40', function() {
    it('подаем на вход a\\a abc', function() {
      assert.deepEqual(regExp.task40('a\\a abc'), '! abc');
    });
    it('подаем на вход a\\\\a abc', function() {
      assert.deepEqual(regExp.task40('a\\\\a abc'), 'a\\\\a abc');
    });
  });
  describe('task41', function() {
    it('подаем на вход a\\a a\\\\a a\\\\\\a', function() {
      assert.deepEqual(regExp.task41('a\\a a\\\\a a\\\\\\a'), 'a\\a a\\\\a !');
    });
    it('подаем на вход a\\a a\\\\a a\\\\\\\\a', function() {
      assert.deepEqual(regExp.task41('a\\a a\\\\a a\\\\\\\\a'), 'a\\a a\\\\a a\\\\\\\\a');
    });
  });
  describe('task42', function() {
    it('подаем на вход bbb /aaa\\ bbb /ccc\\', function() {
      assert.deepEqual(regExp.task42('bbb /aaa\\ bbb /ccc\\'), 'bbb ! bbb !');
    });
    it('подаем на вход bbb /aaa\\ bbb /ccc\\', function() {
      assert.deepEqual(regExp.task42('bbb /aaaa\\ bbb /ccc\\'), 'bbb /aaaa\\ bbb !');
    });
  });
  describe('task43', function() {
    it('подаем на вход aaa@bbb eee7@kkk', function() {
      assert.deepEqual(regExp.task43('aaa@bbb eee7@kkk'), 'bbb@aaa kkk@eee7');
    });
    it('подаем на вход aaa@bbb eee7@kkk', function() {
      assert.deepEqual(regExp.task43('aawwa@b34bb e55ee7@kkk'), 'b34bb@aawwa kkk@e55ee7');
    });
  });
  describe('task44', function() {
    it('подаем на вход a1b2c3', function() {
      assert.deepEqual(regExp.task44('a1b2c3'), 'a11b22c33');
    });
    it('подаем на вход a134b2c3', function() {
      assert.deepEqual(regExp.task44('a134b2c3'), 'a113344b22c33');
    });
  });
  describe('task45', function() {
    it('подаем на вход mymail@mail.ru', function() {
      assert.deepEqual(regExp.task45('mymail@mail.ru'), true);
    });
    it('подаем на вход my.mail@mail.ru', function() {
      assert.deepEqual(regExp.task45('my.mail@mail.ru'), true);
    });
    it('подаем на вход my-mail@mail.ru', function() {
      assert.deepEqual(regExp.task45('my-mail@mail.ru'), true);
    });
    it('подаем на вход my_mail@mail.ru', function() {
      assert.deepEqual(regExp.task45('my_mail@mail.ru'), true);
    });
    it('подаем на вход my_mail@@mail.ru', function() {
      assert.deepEqual(regExp.task45('my_mail@@mail.ru'), false);
    });
    it('подаем на вход my_mail@mail..ru', function() {
      assert.deepEqual(regExp.task45('my_mail@mail..ru'), false);
    });
  });
  describe('task46', function() {
    it('подаем на вход mymail@mail.ru adfdsf my_mail@mail.ru sad sad my.mail@mail.ru', function() {
      assert.deepEqual(
        regExp.task46('mymail@mail.ru adfdsf my_mail@mail.ru sad sad my.mail@mail.ru'),
        ['mymail@mail.ru', 'my_mail@mail.ru', 'my.mail@mail.ru'],
      );
    });
    it('подаем на вход mymail@@mail.ru adfdsf my_mail@mail.ru sad sad my.mail@mail.ru', function() {
      assert.deepEqual(
        regExp.task46('mymail@@mail.ru adfdsf my_mail@mail.ru sad sad my.mail@mail.ru'),
        ['my_mail@mail.ru', 'my.mail@mail.ru'],
      );
    });
    it('подаем на вход mymail@@mail.ru adfdsf sad sad', function() {
      assert.deepEqual(regExp.task46('mymail@@mail.ru adfdsf sad sad'), null);
    });
  });
  describe('task47', function() {
    it('подаем на вход site.ru', function() {
      assert.deepEqual(regExp.task47('site.ru'), true);
    });
    it('подаем на вход my-site.com', function() {
      assert.deepEqual(regExp.task47('my-site.com'), true);
    });
    it('подаем на вход my-site..com', function() {
      assert.deepEqual(regExp.task47('my-site..com'), false);
    });
  });
  describe('task48', function() {
    it('подаем на вход http://site.ru', function() {
      assert.deepEqual(regExp.task48('http://site.ru'), true);
    });
    it('подаем на вход http://site.com', function() {
      assert.deepEqual(regExp.task48('http://site.com'), true);
    });
    it('подаем на вход http:///site.ru', function() {
      assert.deepEqual(regExp.task48('http:///site.ru'), false);
    });
    it('подаем на вход http://site.ru', function() {
      assert.deepEqual(regExp.task48('http://site..ru'), false);
    });
  });
  describe('task49', function() {
    it('подаем на вход http://site.ru', function() {
      assert.deepEqual(regExp.task49('http://site.ru'), true);
    });
    it('подаем на вход https://site.com', function() {
      assert.deepEqual(regExp.task49('https://site.com'), true);
    });
    it('подаем на вход https:///site.ru', function() {
      assert.deepEqual(regExp.task49('https:///site.ru'), false);
    });
    it('подаем на вход http://site.ru', function() {
      assert.deepEqual(regExp.task49('http://site..ru'), false);
    });
  });
  describe('task50', function() {
    it('подаем на вход httpdsgfdg', function() {
      assert.deepEqual(regExp.task50('httpdsgfdg'), true);
    });
    it('подаем на вход https.dsffdg', function() {
      assert.deepEqual(regExp.task50('https.dsffdg'), true);
    });
    it("подаем на вход ' https'", function() {
      assert.deepEqual(regExp.task50(' https'), false);
    });
    it("подаем на вход 'asdf'", function() {
      assert.deepEqual(regExp.task50('asdf'), false);
    });
  });
  describe('task51', function() {
    it("подаем на вход '.txt'", function() {
      assert.deepEqual(regExp.task51('.txt'), true);
    });
    it("подаем на вход '.html'", function() {
      assert.deepEqual(regExp.task51('.html'), true);
    });
    it("подаем на вход '.php'", function() {
      assert.deepEqual(regExp.task51('.php'), true);
    });
    it("подаем на вход '.php '", function() {
      assert.deepEqual(regExp.task51('.php '), false);
    });
    it("подаем на вход '.phphtml'", function() {
      assert.deepEqual(regExp.task51('.phphtml'), false);
    });
  });
  describe('task52', function() {
    it("подаем на вход 'jpg'", function() {
      assert.deepEqual(regExp.task52('.jpg'), true);
    });
    it("подаем на вход 'jpeg'", function() {
      assert.deepEqual(regExp.task52('.jpeg'), true);
    });
    it("подаем на вход 'jddpg'", function() {
      assert.deepEqual(regExp.task52('.jddpg'), false);
    });
    it("подаем на вход 'jpeg '", function() {
      assert.deepEqual(regExp.task52('.jpeg '), false);
    });
  });
  describe('task53', function() {
    it("подаем на вход '1234'", function() {
      assert.deepEqual(regExp.task53('1234'), true);
    });
    it("подаем на вход '123459876543'", function() {
      assert.deepEqual(regExp.task53('123459876543'), true);
    });
    it("подаем на вход '1234598765432453654645'", function() {
      assert.deepEqual(regExp.task53('1234598765432453654645'), false);
    });
    it("подаем на вход '123safdsg4598765'", function() {
      assert.deepEqual(regExp.task53('123safdsg4598765'), false);
    });
  });
  describe('task54', function() {
    it("подаем на вход '124353'", function() {
      assert.deepEqual(regExp.task54('124353'), 18);
    });
    it("подаем на вход '12 43 53'", function() {
      assert.deepEqual(regExp.task54('12 43 53'), 18);
    });
    it("подаем на вход '12sd 4dsf 35sd 3'", function() {
      assert.deepEqual(regExp.task54('12sd 4dsf 35sd 3'), 18);
    });
  });
  describe('task55', function () {
    it('подаем на вход http://site.ru', function () {
      assert.deepEqual(regExp.task55('http://site.ru'), '<a href="http://site.ru">site.ru</a>');
    });
    it('подаем на вход http://site.com', function () {
      assert.deepEqual(regExp.task55('http://site.com'), '<a href="http://site.com">site.com</a>');
    });
    it('подаем на вход https://site.com', function () {
      assert.deepEqual(regExp.task55('https://site.com'), '<a href="https://site.com">site.com</a>');
    });
  });
  describe('task56', function () {
    it("подаем на вход 'dkjf   sdfds   df'", function () {
      assert.deepEqual(regExp.task56('dkjf   sdfds   df'), 'dkjf sdfds df');
    });
    it("подаем на вход '   dkjf   sdfds   df'", function () {
      assert.deepEqual(regExp.task56('   dkjf   sdfds   df'), ' dkjf sdfds df');
    });
    it("подаем на вход '   dkjf sdfds df'", function () {
      assert.deepEqual(regExp.task56('   dkjf sdfds df'), ' dkjf sdfds df');
    });
  });
  describe('task57', function () {
    it("подаем на вход '/* jdksjfk:dsjfkfg; */ dsfgf fdg'", function () {
      assert.deepEqual(regExp.task57('/* jdksjfk:dsjfkfg; */ dsfgf fdg'), ' dsfgf fdg');
    });
  });
  describe('task58', function () {
    it("подаем на вход '<!-- dskg asfd sdf --> dsgfkd kf f'", function () {
      assert.deepEqual(regExp.task58('<!-- dskg asfd sdf --> dsgfkd kf f'), ' dsgfkd kf f');
    });
  });
  describe('task59', function () {
    it('подаем на вход ', function () {
      assert.deepEqual(regExp.task59('aaab asdfaaab safaaaz'), '!b asdf!b safaaaz');
    });
  });
  describe('task60', function () {
    it('подаем на вход aaab asdfaaab safaaaz', function () {
      assert.deepEqual(regExp.task60('aaab asdfaaab safaaaz aaak'), 'aaab asdfaaab saf!z !k');
    });
  });
  describe('task61', function () {
    it('подаем на вход 2 3 4 10 wa 3', function () {
      assert.deepEqual(regExp.task61('2 3 4 10 wa 3'), '4 9 16 100 wa 9');
    });
  });
  describe('task62', function () {
    it("подаем на вход 2aaa'3'bbb'4'", function() {
      assert.deepEqual(regExp.task62("2aaa'3'bbb'4'"), "2aaa'6'bbb'8'");
    });
  });
  describe('task63', function () {
    it('подаем на вход {{тскет}}', function () {
      assert.deepEqual(regExp.task63('{{текст}}'), '{{тскет}}');
    });
    it('подаем на вход {{тскет}} sdfdf', function () {
      assert.deepEqual(regExp.task63('{{текст}} sdfdf'), '{{тскет}} sdfdf');
    });
    it('подаем на вход sdfdf', function () {
      assert.deepEqual(regExp.task63('sdfdf'), 'sdfdf');
    });
  });
  describe('task64', function () {
    it('подаем на вход 23 + 35 =', function () {
      assert.deepEqual(regExp.task64('23 + 35 ='), '23 + 35 = 58');
    });
    it('подаем на вход 230 + 350 =', function () {
      assert.deepEqual(regExp.task64('230 + 350 ='), '230 + 350 = 580');
    });
  });
  describe('task65', function () {
    it('подаем на вход 1900', function () {
      assert.deepEqual(regExp.task65('1900'), true);
    });
    it('подаем на вход 1999', function () {
      assert.deepEqual(regExp.task65('1999'), true);
    });
    it('подаем на вход 2000', function () {
      assert.deepEqual(regExp.task65('2000'), true);
    });
    it('подаем на вход 2050', function () {
      assert.deepEqual(regExp.task65('2050'), true);
    });
    it('подаем на вход 2100', function () {
      assert.deepEqual(regExp.task65('2100'), true);
    });
    it('подаем на вход 2990', function () {
      assert.deepEqual(regExp.task65('2990'), false);
    });
    it('подаем на вход 1800', function () {
      assert.deepEqual(regExp.task65('1800'), false);
    });
  });
  describe('task66', function () {
    it('подаем на вход 12:59', function () {
      assert.deepEqual(regExp.task66('12:59'), true);
    });
    it('подаем на вход 23:41', function () {
      assert.deepEqual(regExp.task66('23:41'), true);
    });
    it('подаем на вход 00:12', function () {
      assert.deepEqual(regExp.task66('00:12'), true);
    });
    it('подаем на вход 00:00', function () {
      assert.deepEqual(regExp.task66('00:00'), true);
    });
    it('подаем на вход 24.00', function () {
      assert.deepEqual(regExp.task66('24.00'), false);
    });
    it('подаем на вход 12:60', function () {
      assert.deepEqual(regExp.task66('12:60'), false);
    });
  });
  describe('task67', function () {
    it('подаем на вход 9.59 am', function () {
      assert.deepEqual(regExp.task67('9.59 am'), true);
    });
    it('подаем на вход 12.30 pm', function () {
      assert.deepEqual(regExp.task67('12.30 pm'), true);
    });
    it('подаем на вход 14.30 pm', function () {
      assert.deepEqual(regExp.task67('14.30 pm'), false);
    });
    it('подаем на вход 10.60 pm', function () {
      assert.deepEqual(regExp.task67('10.60 pm'), false);
    });
  });
  describe('task68', function () {
    it('подаем на вход abbc ggaa dgfd', function () {
      assert.deepEqual(regExp.task68('abbc ggaa dgfd'), '  dgfd');
    });
  });
  describe('task 69-70', function () {
    it('подаем на вход dsf xxx xxx sd', function () {
      assert.deepEqual(regExp.task69_70('dsf xxx xxx sd'), 'dsf xxx sd');
    });
    it('подаем на вход dsf xxx xxx xxx xxx xxx sd', function () {
      assert.deepEqual(regExp.task69_70('dsf xxx xxx xxx xxx xxx sd'), 'dsf xxx sd');
    });
  });
});