import { objToQueryString } from "./utils";

describe("objToQueryString", () => {
  it("converts an object with key value pairs to a valid query string", () => {
    const params = {
      auto_play: false,
      buying: true,
      color: "#21160c"
    };

    expect(objToQueryString(params)).toEqual(
      "auto_play=false&buying=true&color=%2321160c"
    );
  });
});
