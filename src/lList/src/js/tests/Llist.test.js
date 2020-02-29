"use strict";

const LList = require('../LList');

describe('LList Methods', function () {
    describe('size()', function () {
        it('получаем длину листа', function () {
            let lList = new LList([1, 2, 3, 4, 5]);
            assert.equal(lList.size(), 5)
        });
        it('получаем длину листа', function () {
            let lList = new LList([]);
            assert.equal(lList.size(), undefined)
        });
    });

    describe('addStart()', function () {
        let kList = new LList([1, 2, 3, 4, 5]);
        it('добавляем в начало 12, получаем длину листа и проверяем 1 элемент', function () {
            kList.addStart(12);
            assert.equal(kList.size(), 6);
            assert.equal(kList.get(0), 12);
        });
    });

    describe('addEnd()', function () {
        let lList = new LList([1, 2, 3, 4, 5]);
        it('добавляем в конец 12, получаем длину листа и проверяем последний элемент', function () {
            lList.addEnd(12);
            assert.equal(lList.size(), 6);
            assert.equal(lList.get(5), 12);
        });
    });

    describe('addPosition()', function () {
        let lList = new LList([1, 2, 3, 4, 5]);
        it('добавляем на 2 место - 15  получаем длину листа и проверяем 2 элемент', function () {
            lList.addPosition(15, 1);
            assert.equal(lList.size(), 6);
            assert.equal(lList.get(1), 15);
            lList.clear();
        });
        it('добавляем на 1 место - 150  получаем длину листа и проверяем 1 элемент', function () {
            lList.addPosition(150, 0);
            assert.equal(lList.size(), 6);
            assert.equal(lList.get(0), 150);
            lList.clear();
        });
        it('добавляем на -10 место - 13  получаем длину листа и проверяем 1 элемент', function () {
            lList.addPosition(13, -10);
            assert.equal(lList.size(), 5);
            assert.equal(lList.get(-10), undefined);
        });
        it('добавляем в пустой лист на 5 место 12', function () {
            let lList = new LList([]);
            lList.addPosition(12,5)
            assert.equal(lList.size(), undefined);
        });
    });

    describe('get()', function () {
        let lList = new LList([1, 2, 3, 4, 5]);
        it('получаем 1 элемент', function () {
            assert.equal(lList.get(0), 1);
        });
        it('получаем -5 элемент', function () {
            assert.equal(lList.get(-5), undefined);
        });
        it('получаем 3 элемент', function () {
            assert.equal(lList.get(2), 3);
        });
        it('получаем 3 элемент в пустом листе', function () {
            let lList = new LList([]);
            assert.equal(lList.get(2), undefined);
        });
    });

    describe('set()', function () {
        let lList = new LList([1, 2, 3, 4, 5]);
        it('вставляем на 1 место - 15 проверяем длину и получаем 1 элемент', function () {
            lList.set(15, 0);
            assert.equal(lList.size(), 5);
            assert.equal(lList.get(0), 15);
        });
        it('вставляем на -5 место - 20 проверяем длину и получаем -5 элемент', function () {
            assert.equal(lList.set(20 ,-5));
            assert.equal(lList.size(), 5);
            assert.equal(lList.get(-5), undefined);
        });
        it('вставляем на 3 место - 12', function () {
            lList.set(12, 2);
            assert.equal(lList.size(), 5);
            assert.equal(lList.get(2), 12);
        });
        it('вставляем на 3 место - 12 в пустой лист', function () {
            let lList = new LList([]);
            lList.set(12, 2);
            assert.equal(lList.size(), undefined);
        });
    });

    describe('min()', function () {
        let lList = new LList([3, 2, -12, 4, 5]);
        it('получаем минимальный элемент', function () {
            assert.equal(lList.min(), -12);
        });
        it('получаем минимальный элемент в пустом листу', function () {
            let lList = new LList([]);
            assert.equal(lList.min(), undefined);
        });
    });

    describe('max()', function () {
        let lList = new LList([3, 2, -12, 4, 5]);
        it('получаем максимальный элемент', function () {
            assert.equal(lList.max(), 5);
        });
        it('получаем максимальный элемент в пустом листу', function () {
            let lList = new LList([]);
            assert.equal(lList.max(), undefined);

        });
    });
    describe('minIndex()', function () {
        let lList = new LList([3, 2, -12, 4, 5]);
        it('получаем индекс минимального элемента', function () {
            assert.equal(lList.minIndex(), 2);
        });
        it('получаем индекс минимального элемента в пустом листе', function () {
            let lList = new LList([]);
            assert.equal(lList.minIndex(), undefined);
        });
    });

    describe('maxIndex()', function () {
        let lList = new LList([3, 2, -12, 4, 5]);
        it('получаем индекс максимального элемента', function () {
            assert.equal(lList.maxIndex(), 4);
        });
        it('получаем индекс максимального элемента в пустом листе', function () {
            let lList = new LList([]);
            assert.equal(lList.maxIndex(), undefined);
        });
    });

    describe('delStart()', function () {
        let lList = new LList([3, 2, -12, 4, 5]);
        it('удаляем 1 элемент и проверяем длину', function () {
            assert.equal(lList.delStart(), 3);
            assert.equal(lList.size(), 4)
        });
    });

    describe('delEnd()', function () {
        let lList = new LList([3, 2, -12, 4, 5]);
        it('удаляем последний элемент и проверяем длину', function () {
            assert.equal(lList.delEnd(), 5);
            assert.equal(lList.size(), 4)
        });
    });

    describe('delPosition()', function () {
        let lList = new LList([7, 15, -12, 4, 5]);
        it('удаляем 2 элемент и проверяем длину', function () {
            assert.equal(lList.delPosition(1), 15);
            assert.equal(lList.size(), 4);
            lList.clear();
        });
        it('удаляем 1 элемент и проверяем длину', function () {
            assert.equal(lList.delPosition(0), 7);
            assert.equal(lList.size(), 4);
        });
        it('удаляем 1 элемент в пустом листе', function () {
            let lList = new LList([]);
            assert.equal(lList.delPosition(), undefined);
        });
    });

    describe('sort()', function () {
        let lList = new LList([7, 15, -12, 4, 5]);
        it('сортируем, используем метод toArray() что бы проверить сортировку', function () {
            lList.sort();
            assert.deepEqual(lList.toArray(), [-12, 4, 5, 7, 15])
        });
    });

    describe('reverse()', function () {
        let lList = new LList([7, 15, -12, 4, 5]);
        it('делаем реверс, используем метод toArray() что бы проверить метод', function () {
            lList.reverse();
            assert.deepEqual(lList.toArray(), [5, 4, -12, 15, 7])
        });
    });

    describe('halfReverse()', function () {
        it('делаем halfReverse, используем метод toArray() что бы проверить метод', function () {
            let lList = new LList([7, 15, -12, 4, 5]);
            lList.halfReverse();
            assert.deepEqual(lList.toArray(), [15, 7, -12, 5, 4])
        });
        it('делаем halfReverse, используем метод toArray() что бы проверить метод', function () {
            let lList = new LList([7, 15, -12, 4, 5, 50]);
            lList.halfReverse();
            assert.deepEqual(lList.toArray(), [-12, 15, 7, 50, 5, 4])
        });
    });

    describe('toArray()', function () {
        it('используем метод toArray()', function () {
            let lList = new LList([7, 15, -12, 4, 5]);
            assert.deepEqual(lList.toArray(), [7, 15, -12, 4, 5])
        });
    });

    describe('toString()', function () {
        it('используем метод toString()', function () {
            let lList = new LList([7, 15, -12, 4, 5]);
            assert.equal(lList.toString(), '7 15 -12 4 5 ')
        });
    });

    describe('clear()', function () {
        it('добавляем 7 в начало, 14 в конце и делаем сброс до дефолта', function () {
            let lList = new LList([7, 15, -12, 4, 5]);
            lList.addStart(7);
            lList.addEnd(14);
            lList.clear();
            assert.deepEqual(lList.toArray(), [7, 15, -12, 4, 5])
        });
    });
});