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
  const { enhancement, durability } = item

  if(enhancement < 15) {
    return { ...item, durability: durability - 5 }
  } else if (enhancement >= 15) {
    if(enhancement > 16) {
      return { ...item, enhancement: enhancement -1, durability: durability - 10 }
    } else {
      return { ...item, durability: durability - 10 }
    }
  }
}

function repair(item) {
  return {...item, durability: 100}
}

function get(item) {
  const { enhancement, name } = item

  if(enhancement === 0) {
    return { ...item };
  } else if(enhancement > 0) {
    if(enhancement > 20) {
      return { ...item, name: `[+20] ${name}` };
    } else {
      return { ...item, name: `[+${enhancement}] ${name}` };
    }
  } else {
    return { ...item, name: `[${enhancement}] ${name}` };
  }
}
