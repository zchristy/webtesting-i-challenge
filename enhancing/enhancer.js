module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  const { enhancement } = item
  if(enhancement >= 20) {
    return { ...item, enhancement: 20 }
  } else {
    return { ...item, enhancement: enhancement + 1 };
  }
}

function fail(item) {
  return { ...item };
}

function repair(item) {

  return {...item, durability: 100}
}

function get(item) {
  return { ...item };
}
