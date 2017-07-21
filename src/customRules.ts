import {IImport} from "import-sort-parser";

function startWithSubStr(text: string, prefix: string) : boolean {
  return text.startsWith(prefix);
}

function isRelativeModule(imported: IImport): boolean {
  return imported.moduleName.indexOf('.') === 0;
}

function isRootImortModule(imported: IImport) : boolean {
  return imported.moduleName.indexOf('@') === 0 || 
  imported.moduleName.indexOf('$') === 0 || 
  imported.moduleName.indexOf('~') === 0;
}

function isAbsoluteModule(imported: IImport): boolean {
  return !isRelativeModule(imported) && !isRootImortModule(imported);
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
  startWithTlideSign,
  isAbsoluteModule,
  isRelativeModule,
  isRootImortModule
}
