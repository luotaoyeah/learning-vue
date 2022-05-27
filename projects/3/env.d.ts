/// <reference types="vite/client" />

interface ImportMetaEnv {
    /** 自定义的环境变量. */
    VITE_FOO: string;
    VITE_FOO_BAZ: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
