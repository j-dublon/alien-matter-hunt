const { findRegion } = require("../Utils/utils");

describe("findRegion", () => {
  it("should return new but unmodified meteorite object if latitude and longitude are blank", () => {
    const meteorite = [
      {
        name: "Aachen",
        id: "1",
        nametype: "Valid",
        recclass: "L5",
        mass: "21",
        fall: "Fell",
        year: "1880-01-01T00:00:00.000",
        reclat: "",
        reclong: "",
        geolocation: {
          latitude: "50.775",
          longitude: "6.08333",
        },
      },
    ];
    expect(findRegion(meteorite)).not.toBe(meteorite);
    expect(findRegion(meteorite)).toEqual([
      {
        name: "Aachen",
        id: "1",
        nametype: "Valid",
        recclass: "L5",
        mass: "21",
        fall: "Fell",
        year: "1880-01-01T00:00:00.000",
        reclat: "",
        reclong: "",
        region: "",
        geolocation: {
          latitude: "50.775",
          longitude: "6.08333",
        },
      },
    ]);
  });
  it("should modify meteorite object to reflect region based on latitude and longitude", () => {
    const meteorite = [
      {
        name: "Aachen",
        id: "1",
        nametype: "Valid",
        recclass: "L5",
        mass: "21",
        fall: "Fell",
        year: "1880-01-01T00:00:00.000",
        reclat: "50.775000",
        reclong: "6.083330",
        geolocation: {
          latitude: "50.775",
          longitude: "6.08333",
        },
      },
    ];
    expect(findRegion(meteorite)).toEqual([
      {
        name: "Aachen",
        id: "1",
        nametype: "Valid",
        recclass: "L5",
        mass: "21",
        fall: "Fell",
        year: "1880-01-01T00:00:00.000",
        reclat: "50.775000",
        reclong: "6.083330",
        region: "Europe",
        geolocation: {
          latitude: "50.775",
          longitude: "6.08333",
        },
      },
    ]);
    const meteorite2 = [
      {
        name: "Adhi Kot",
        id: "379",
        nametype: "Valid",
        recclass: "EH4",
        mass: "4239",
        fall: "Fell",
        year: "1919-01-01T00:00:00.000",
        reclat: "32.100000",
        reclong: "71.800000",
        geolocation: {
          latitude: "32.1",
          longitude: "71.8",
        },
      },
    ];
    expect(findRegion(meteorite2)).toEqual([
      {
        name: "Adhi Kot",
        id: "379",
        nametype: "Valid",
        recclass: "EH4",
        mass: "4239",
        fall: "Fell",
        year: "1919-01-01T00:00:00.000",
        reclat: "32.100000",
        reclong: "71.800000",
        region: "Asia",
        geolocation: {
          latitude: "32.1",
          longitude: "71.8",
        },
      },
    ]);
  });
  it("should work with an array of meteorites", () => {
    const meteorites = [
      {
        name: "Adhi Kot",
        id: "379",
        nametype: "Valid",
        recclass: "EH4",
        mass: "4239",
        fall: "Fell",
        year: "1919-01-01T00:00:00.000",
        reclat: "32.100000",
        reclong: "71.800000",
        geolocation: {
          latitude: "32.1",
          longitude: "71.8",
        },
      },
      {
        name: "Adzhi-Bogdo (stone)",
        id: "390",
        nametype: "Valid",
        recclass: "LL3-6",
        mass: "910",
        fall: "Fell",
        year: "1949-01-01T00:00:00.000",
        reclat: "44.833330",
        reclong: "95.166670",
        geolocation: {
          latitude: "44.83333",
          longitude: "95.16667",
        },
      },
      {
        name: "Agen",
        id: "392",
        nametype: "Valid",
        recclass: "H5",
        mass: "30000",
        fall: "Fell",
        year: "1814-01-01T00:00:00.000",
        reclat: "44.216670",
        reclong: "0.616670",
        geolocation: {
          latitude: "44.21667",
          longitude: "0.61667",
        },
      },
    ];
    expect(findRegion(meteorites)).toEqual([
      {
        name: "Adhi Kot",
        id: "379",
        nametype: "Valid",
        recclass: "EH4",
        mass: "4239",
        fall: "Fell",
        year: "1919-01-01T00:00:00.000",
        reclat: "32.100000",
        reclong: "71.800000",
        region: "Asia",
        geolocation: {
          latitude: "32.1",
          longitude: "71.8",
        },
      },
      {
        name: "Adzhi-Bogdo (stone)",
        id: "390",
        nametype: "Valid",
        recclass: "LL3-6",
        mass: "910",
        fall: "Fell",
        year: "1949-01-01T00:00:00.000",
        reclat: "44.833330",
        reclong: "95.166670",
        region: "Asia",
        geolocation: {
          latitude: "44.83333",
          longitude: "95.16667",
        },
      },
      {
        name: "Agen",
        id: "392",
        nametype: "Valid",
        recclass: "H5",
        mass: "30000",
        fall: "Fell",
        year: "1814-01-01T00:00:00.000",
        reclat: "44.216670",
        reclong: "0.616670",
        region: "Europe",
        geolocation: {
          latitude: "44.21667",
          longitude: "0.61667",
        },
      },
    ]);
  });
});
