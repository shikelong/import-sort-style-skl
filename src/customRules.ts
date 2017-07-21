
function startWithSubStr(text: string, prefix: string) : boolean {
  return text.startsWith(prefix);
}

function startWithAtSign(text: string) : boolean {
  return startWithSubStr(text, '@');
}

function startsWithDollarSign(text: string) : boolean {
  return startWithSubStr(text, '$');
}

function startWithTlideSign(text: string) : boolean {
  return startWithSubStr(text, '~');
}


export {
  startWithAtSign,
  startsWithDollarSign,
  startWithTlideSign
}
