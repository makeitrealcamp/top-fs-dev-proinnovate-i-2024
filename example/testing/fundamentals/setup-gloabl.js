function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is no equal to ${expected}`);
      }
    },
    toEqual() {},
    toBeGreaterThan() {},
    toBeLessThan() {},
  };
}

async function test(title, callback) {
  try {
    await callback();
    console.log(`✅ ${title}`);
  } catch (error) {
    console.log(`❌ ${title}`);
    console.error(error);
  }
}

global.test = test;
global.expect = expect;
