import {mount} from "@vue/test-utils";
import Calculator from "@/components/Calculator.vue";
import {assert, describe} from 'vitest'

describe('Calculator tests', () => {
    describe('Correct arithmetic', () => {
        test("Multiply function works as expected", () => {
            const wrapper = mount(Calculator)
            expect(Calculator).toBeTruthy();

            const expectedValue = 10;
            wrapper.vm.multiply();

            const actualValue = wrapper.vm.$data.operator(2, 5)

            expect(expectedValue).toBe(actualValue)
        })

        test("Divide function works as expected", () => {
            const wrapper = mount(Calculator)
            expect(Calculator).toBeTruthy();

            const expectedValue = 3;
            wrapper.vm.divide();

            const actualValue = wrapper.vm.$data.operator(6, 2)

            expect(expectedValue).toBe(actualValue)
        })

        test("Addition function works as expected", () => {
            const wrapper = mount(Calculator)
            expect(Calculator).toBeTruthy();

            const expectedValue = 8;
            wrapper.vm.add();

            const actualValue = wrapper.vm.$data.operator(6, 2)

            expect(expectedValue).toBe(actualValue)
        })

        test("Subtract function works as expected", () => {
            const wrapper = mount(Calculator)
            expect(Calculator).toBeTruthy();

            const expectedValue = 5;
            wrapper.vm.minus();

            const actualValue = wrapper.vm.$data.operator(8, 3)

            expect(expectedValue).toBe(actualValue)
        })
    })
})