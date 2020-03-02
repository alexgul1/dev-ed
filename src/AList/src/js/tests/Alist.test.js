const AList = require('../AList');

describe('AList Methods ([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])', function() {
  describe('size()', function() {
    const aList = new AList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    it('получаем длину массива', function() {
      assert.equal(aList.size(), 12);
    });
  });
  describe('addStart()', function() {
    const aList = new AList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    aList.addStart(5);
    it('добавляем в начале 5, получаем длину массива и проверяем его', function() {
      assert.equal(aList.size(), 13);
    });
    it('проверяем массив', function() {
      assert.deepEqual(aList.array, [5, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    });
  });
  describe('addEnd()', function() {
    const aList = new AList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    aList.addEnd(34);
    it('добавляем в конец 34 и получаем длину массива', function() {
      assert.equal(aList.size(), 13);
    });
    it('проверяем массив', function() {
      assert.deepEqual(aList.array, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 34]);
    });
  });
  describe('addPosition()', function() {
    const aList = new AList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    aList.addPosition(7, 34);
    it('добавляем в конец 34 и получаем длину массива', function() {
      assert.equal(aList.size(), 13);
    });
    it('проверяем массив', function() {
      assert.deepEqual(aList.array, [1, 2, 3, 4, 5, 6, 7, 34, 8, 9, 10, 11, 12]);
    });
  });
  describe('delStart()', function() {
    const aList = new AList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    aList.delStart();
    it('удаляем первый элемент и получаем длину массива', function() {
      assert.equal(aList.size(), 11);
    });
    it('проверяем массив', function() {
      assert.deepEqual(aList.array, [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    });
  });
  describe('delEnd()', function() {
    const aList = new AList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    aList.delEnd();
    it('удаляем последний элемент и получаем длину массива', function() {
      assert.equal(aList.size(), 11);
    });
    it('проверяем массив', function() {
      assert.deepEqual(aList.array, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
    });
  });
  describe('delPosition()', function() {
    const aList = new AList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    aList.delPosition(5);
    it('удаляем 5 элемент и получаем длину массива', function() {
      assert.equal(aList.size(), 11);
    });
    it('проверяем массив', function() {
      assert.deepEqual(aList.array, [1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12]);
    });
  });
  describe('get()', function() {
    const aList = new AList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    it('получаем 3 элемент', function() {
      assert.equal(aList.get(3), 4);
    });
  });
  describe('set()', function() {
    const aList = new AList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    aList.set(7, 56);
    it('вставляем 56 на 7 место и проверяем массив', function() {
      assert.deepEqual(aList.array, [1, 2, 3, 4, 5, 6, 7, 56, 9, 10, 11, 12]);
    });
  });
  describe('toString()', function() {
    const aList = new AList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    it('получаем строковое представление массива', function() {
      assert.equal(aList.toString(), '123456789101112');
    });
  });
  describe('min()', function() {
    const aList = new AList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    it('получаем минимальное число', function() {
      assert.equal(aList.min(), 1);
    });
  });
  describe('max()', function() {
    const aList = new AList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    it('получаем максимальное число', function() {
      assert.equal(aList.max(), 12);
    });
  });
  describe('minIndex()', function() {
    const aList = new AList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    it('получаем индекс минимального числа', function() {
      assert.equal(aList.minIndex(), 0);
    });
  });
  describe('maxIndex()', function() {
    const aList = new AList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    it('получаем индекс максимального числа', function() {
      assert.equal(aList.maxIndex(), 11);
    });
  });
  describe('reverse()', function() {
    const aList = new AList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    aList.reverse();
    it('переворачиваем и проверяем массив', function() {
      assert.deepEqual(aList.array, [12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
    });
  });
  describe('sort()', function() {
    const aList = new AList([12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
    aList.sort();
    it('сортируем массив [12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1] и проверяем его', function() {
      assert.deepEqual(aList.array, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    });
  });
  describe('halfReverse()', function() {
    const aList = new AList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    aList.halfReverse();
    it('делим массив пополам, переворачиваем и проверяем массив', function() {
      assert.deepEqual(aList.array, [6, 5, 4, 3, 2, 1, 12, 11, 10, 9, 8, 7]);
    });
  });
  describe('halfReverse()', function() {
    const aList = new AList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
    aList.halfReverse();
    it('делим массив пополам, переворачиваем и проверяем массив', function() {
      assert.deepEqual(aList.array, [5, 4, 3, 2, 1, 6, 11, 10, 9, 8, 7]);
    });
  });
  describe('clear()', function() {
    const aList = new AList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    aList.addStart(6);
    aList.clear();
    it('добавляем 6 в начало и возвращаем исходное состояние и проверяем', function() {
      assert.deepEqual(aList.array, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    });
  });
});
