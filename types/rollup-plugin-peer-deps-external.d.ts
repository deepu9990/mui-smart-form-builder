declare module 'rollup-plugin-peer-deps-external' {
  import { Plugin } from 'rollup';
  
  interface PeerDepsExternalOptions {
    includeDependencies?: boolean;
  }
  
  function peerDepsExternal(options?: PeerDepsExternalOptions): Plugin;
  
  export = peerDepsExternal;
}
