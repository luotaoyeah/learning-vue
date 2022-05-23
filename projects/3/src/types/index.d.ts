declare module 'vue' {
  interface ComponentCustomProperties {
    $log: (...data: any[]) => void;
  }
}

export {};
