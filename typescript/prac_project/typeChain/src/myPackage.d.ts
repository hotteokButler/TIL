// js file에 선언된 module을 ts환경에서 사용하기 위해서는 declare module을 통해 선언해야함

interface Config {
  url: string;
}

declare module 'myPackage' {
  function init(config: Config): boolean;

  function exit(code: number): number;
}
