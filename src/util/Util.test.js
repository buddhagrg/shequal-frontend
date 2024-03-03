import { describe, expect } from "vitest";
import { getDaysLeft, getDefaultDateFormat } from "./Util";

const DATE = "2024-03-05T00:00:00";
const EXPIRED_DT = "2024-03-02T00:00:00";

describe("getDaysLeft", () => {
    test("function check successful result", () => {
        expect(getDaysLeft()).toEqual("");
        expect(getDaysLeft(EXPIRED_DT)).toEqual("Expired");
        expect(getDaysLeft(DATE)).toEqual("2 days left");
    });
});


describe("getDefaultDateFormat", () => {
    test("function check successful result", () => {
        expect(getDefaultDateFormat()).toEqual("");
        expect(getDefaultDateFormat(DATE)).toEqual("05-Mar, 2024");
    });
});

