// "use client"

// import React, { useEffect, useState } from 'react';
// import { useUnifiedWalletContext, useUnifiedWallet } from '@jup-ag/wallet-adapter';
// import { DEFAULT_EXPLORER, FormProps } from './types';
// import WalletDisconnectedGraphic from './walletDisconnectIcon';

// // Add type definition for the Jupiter window object
// declare global {
//   interface Window {
//     Jupiter?: {
//       init: (config: {
//         endpoint: string;
//         refetchIntervalForTokenAccounts?: number;
//         formProps: FormProps;
//         enableWalletPassthrough: boolean;
//         passthroughWalletContextState?: any;
//         onRequestConnectWallet: () => void;
//         strictTokenList: boolean;
//         defaultExplorer: DEFAULT_EXPLORER;
//         useUserSlippage: boolean;
//       }) => void;
//       syncProps?: (props: { passthroughWalletContextState: any }) => void;
//     };
//   }
// }

// const ModalTerminal = (props: {
//   rpcUrl: string;
//   refetchIntervalForTokenAccounts?: number;
//   formProps: FormProps;
//   simulateWalletPassthrough: boolean;
//   strictTokenList: boolean;
//   defaultExplorer: DEFAULT_EXPLORER;
//   useUserSlippage: boolean;
// }) => {
//   const {
//     rpcUrl,
//     formProps,
//     simulateWalletPassthrough,
//     strictTokenList,
//     defaultExplorer,
//     useUserSlippage,
//     refetchIntervalForTokenAccounts,
//   } = props;

//   const [isJupiterReady, setIsJupiterReady] = useState(false);
//   const passthroughWalletContextState = useUnifiedWallet();
//   const { setShowModal } = useUnifiedWalletContext();

//   // Initialize Jupiter script
//   useEffect(() => {
//     const jupiterScript = document.createElement('script');
//     jupiterScript.src = 'https://terminal.jup.ag/main-v2.js';
//     jupiterScript.async = true;
//     jupiterScript.onload = () => setIsJupiterReady(true);
//     document.body.appendChild(jupiterScript);

//     return () => {
//       document.body.removeChild(jupiterScript);
//     };
//   }, []);

//   const launchTerminal = () => {
//     if (!window.Jupiter) {
//       console.error('Jupiter terminal is not loaded yet');
//       return;
//     }

//     window.Jupiter.init({
//       endpoint: rpcUrl,
//       refetchIntervalForTokenAccounts,
//       formProps,
//       enableWalletPassthrough: simulateWalletPassthrough,
//       passthroughWalletContextState: simulateWalletPassthrough ? passthroughWalletContextState : undefined,
//       onRequestConnectWallet: () => setShowModal(true),
//       strictTokenList,
//       defaultExplorer,
//       useUserSlippage,
//     });
//   };

//   // Sync passthrough wallet
//   useEffect(() => {
//     if (!isJupiterReady || !window.Jupiter?.syncProps) return;
    
//     window.Jupiter.syncProps({ passthroughWalletContextState });
//   }, [isJupiterReady, passthroughWalletContextState, props]);

//   return (
//     <div
//       className="p-4 hover:bg-white/10 rounded-xl cursor-pointer flex h-full w-full flex-col items-center justify-center text-white"
//       onClick={launchTerminal}
//     >
//       <WalletDisconnectedGraphic />
//       <span className="text-xs mt-4">
//         {isJupiterReady ? 'Launch Terminal Modal' : 'Loading Terminal...'}
//       </span>
//     </div>
//   );
// };

// export default ModalTerminal;