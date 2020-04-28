const findRegion = (meteorites) => {
  const modifiedMeteorites = [];

  meteorites.forEach((meteorite) => {
    const modifiedMeteorite = { ...meteorite };
    const lat = Math.round(modifiedMeteorite.reclat);
    const long = Math.round(modifiedMeteorite.reclong);

    if (modifiedMeteorite.reclat === "" || modifiedMeteorite.reclong === "") {
      modifiedMeteorite.region = "";
    } else if (lat >= 35 && lat < 70 && long > -5 && long < 40) {
      modifiedMeteorite.region = "Europe";
    } else if (lat > -10 && lat < 80 && long >= 40 && long <= 180) {
      modifiedMeteorite.region = "Asia";
    } else if (lat <= -10 && lat > -50 && long > 110 && long <= 180) {
      modifiedMeteorite.region = "Australasia";
    } else if (lat < 35 && lat > -36 && long > -19 && long < 40) {
      modifiedMeteorite.region = "Africa";
    } else if (lat > 12 && lat < 80 && long < -60 && long > -160) {
      modifiedMeteorite.region = "NorthAmerica";
    } else if (lat <= 12 && lat > -60 && long < -35 && long > -85) {
      modifiedMeteorite.region = "SouthAmerica";
    }

    modifiedMeteorites.push(modifiedMeteorite);
  });

  return modifiedMeteorites;
};

module.exports = { findRegion };
