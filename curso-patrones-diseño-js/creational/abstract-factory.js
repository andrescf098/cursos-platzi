class MastodonCar {
  useGPS() {
    throw new Error('This method should be overwritten!');
  }
}

class RhinoCar {
  useGPS() {
    throw new Error('This method should be overwritten!');
  }
}

class MastodonSedanCar extends MastodonCar {
  useGPS() {
    console.log('Mastodon [SEDAN] car use GPS');
  }
}
class MastodonHatchbackCar extends MastodonCar {
  useGPS() {
    console.log('Mastodon [HATCHBACK] car use GPS');
  }
}

class RhinoSedanCar extends RhinoCar {
  useGPS() {
    console.log('Rhino [SEDAN] car use GPS');
  }
}
class RhinoHatchbackCar extends RhinoCar {
  useGPS() {
    console.log('Rhino [HATCHBACK] car use GPS');
  }
}

class CarAbstractFactory {
  createMastodon() {
    throw new Error('This method should be overwritten!');
  }
  createRhino() {
    throw new Error('This method should be overwritten!');
  }
}

class SedanCarFactory {
  createMastodon() {
    return new MastodonSedanCar();
  }
  createRhino() {
    return new RhinoSedanCar();
  }
}

class HatchbackCarFactory {
  createMastodon() {
    return new MastodonHatchbackCar();
  }
  createRhino() {
    return new RhinoHatchbackCar();
  }
}

function appCarFactory(factory) {
  const mastodon = factory.createMastodon();
  const rhino = factory.createRhino();
  mastodon.useGPS();
  rhino.useGPS();
}

function createFactory(type) {
  const factories = {
    sedan: SedanCarFactory,
    hatchback: HatchbackCarFactory,
  };
  const Factory = factories[type];
  return new Factory();
}

appCarFactory(createFactory('sedan'));
appCarFactory(createFactory('hatchback'));
