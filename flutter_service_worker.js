'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"manifest.json": "ed0e9854775aac57af882d70e0572d11",
"icons/Icon-192.png": "e48de45a2366b0c4bcff23964df27b21",
"icons/Icon-maskable-512.png": "4c760115bd841a602e441ea349fa37e0",
"icons/Icon-maskable-192.png": "e9f836ce3e007e44c37633d1a78a7255",
"icons/Icon-512.png": "3a0d763411753bc6fb68525e8eba0db3",
"main.dart.js": "9f2d09d169fc30ee3eef9222d13c4c8f",
"version.json": "af34a2d7b3f0a6a4c310b49d497b5b9c",
"assets/NOTICES": "ca955cb3ab697faf2257286e7d4a3fb5",
"assets/fonts/MaterialIcons-Regular.otf": "eefe63518041cf6d8733107513795bf3",
"assets/AssetManifest.json": "4a0f53190e1eb10b6d1cc94a2b11c774",
"assets/assets/fonts/NotoSans-Regular.ttf": "f46b08cc90d994b34b647ae24c46d504",
"assets/assets/fonts/NotoSans-Italic.ttf": "a6d070775dd5e6bfff61870528c6248a",
"assets/assets/fonts/NotoSans-Bold.ttf": "2ea5e0855d5a3ec3f561b5bc62b39805",
"assets/assets/cfg/app_settings.json": "2d842329cbf5dfca89cb67f2882fbf5a",
"assets/assets/cfg/hash.txt": "39a9c83aab8d6801be65054549d19202",
"assets/assets/fade_icon_selected.png": "1a301be85442f4f1a8d4a07e04b1faa1",
"assets/assets/logo.png": "aa97a13df4ef89389d36d2416475c688",
"assets/assets/english.png": "015a5fdbb9c32f341aac4d2084c462a0",
"assets/assets/danse_icon.png": "2a102bd1e4a47de910497ceb623491e0",
"assets/assets/json/demoCatalog/DemonstrationsMED-PrototypeDataModel-ForEBB.json": "21344b571d871127b2924a0117249636",
"assets/assets/json/demoCatalog/DemonstrationsMED-PrototypeDataModel-ForEBB.vab": "98c15e339853ddf9154e83eb4fcc20ce",
"assets/assets/json/demoCatalog/DemonstrationsMED-EN-PrototypeDataModel.json": "a0f6812472310de980b12a7aadfe01a8",
"assets/assets/json/demoCatalog/DemonstrationsMED-ES-PrototypeDataModel.vab": "ce60cc0d34c73f132bb0054392b78072",
"assets/assets/json/demoCatalog/DemonstrationsMED-PT-PrototypeDataModel.vab": "132b719f6b9b7ad1149a14508bd33645",
"assets/assets/json/demoCatalog/DemonstrationsMED-PrototypeDataModel.vab": "4d4e780b48ade3da65a292bf1bfa8d03",
"assets/assets/json/demoCatalog/DemonstrationsMED-EN-PrototypeDataModel.vab": "4472e5ca2981151a1a6c9ae5332e5880",
"assets/assets/json/demoCatalog/DemonstrationsMED-PrototypeDataModel.json": "c7db571d03b12f4a9f50d67c590af738",
"assets/assets/json/demoCatalog/DemonstrationsMED-ES-PrototypeDataModel.json": "5abd92a8fa9fb56c53064098fa6ef11d",
"assets/assets/json/demoCatalog/DemonstrationsMED-PT-PrototypeDataModel.json": "0c88adb5a384bb81db041e614b61ed44",
"assets/assets/json/ChangeLog.json": "125e474f680e14d1486ce0acfe46f80b",
"assets/assets/json/sessions/sample.json": "1df72fe9166a8d20a6b8addf525a0fb0",
"assets/assets/json/sessions/TestSession.json": "96c1e5d916c2271a2ec7e0e599975bb8",
"assets/assets/json/sessions/Les%2520couleurs%2520de%2520la%2520rencontre.json": "486dfa0bd4babcc8024cb5e42c41965d",
"assets/assets/json/sessions/AnimationDefaultSession%2520CIMEB.json": "e144d9ba35c7a6fc29716927769c7077",
"assets/assets/json/sessions/AnimationDefaultSession.json": "757e759a23fa05e1e51f5166adb9e15b",
"assets/assets/json/sessions/AnimationDefault.json": "8885b149fe6422ef3a2f3bd8736d0031",
"assets/assets/json/catalog/MUSICTEST-PrototypeDataModel.json": "bb9edbaad308ad1f0c37d2c1e079ec09",
"assets/assets/json/catalog/CIMEB2012-ES-PrototypeDataModel.vab": "dc8fa816d7a132fb61e395f9e5ad2cb9",
"assets/assets/json/catalog/ERTMED-PrototypeDataModel-Windows.vab": "160671628809aa2e21958a2037d566fd",
"assets/assets/json/catalog/CIMEB2012-EN-PrototypeDataModel.vab": "fea2b9a0dbfe8582be66cc55a9184f90",
"assets/assets/json/catalog/EBB2022-PrototypeDataModel.vab": "f65b9e1ca17bc577b2840403e34d9775",
"assets/assets/json/catalog/EBBA2024-PrototypeDataModel.json": "1292502765aa5bf877c79cc59b87a033",
"assets/assets/json/catalog/CIMEB2012-ES-PrototypeDataModel.json": "37caa7352c1b632653ae8ed16053fed9",
"assets/assets/json/catalog/CIMEB2012-PrototypeDataModel.json": "13588393605442162162760252d5b7c7",
"assets/assets/json/catalog/CIMEB2012-PrototypeDataModel.vab": "e50f1efc049a4d9de614188f65f3dbbb",
"assets/assets/json/catalog/ERTMED-PrototypeDataModel-FLAC2025.json": "225492f66352eae5e6bf57afe9af37ea",
"assets/assets/json/catalog/MUSICTEST-PrototypeDataModel.vab": "d108abfeb66802fdb614c3b5d750f46c",
"assets/assets/json/catalog/EBBMED-PrototypeDataModel.json": "9147a7f08c71c05a143f1c3d678d1785",
"assets/assets/json/catalog/EBBA2024-PrototypeDataModel.vab": "3761b3339303b585434bbf1c117c9ab5",
"assets/assets/json/catalog/ERTMED-PrototypeDataModel-FLAC.vab": "d166968811579a43cdbdd07c1d5aafa4",
"assets/assets/json/catalog/MIN-PrototypeDataModel.vab": "96362558f285af23c6ee5a43cc2fbe71",
"assets/assets/json/catalog/MEDMETHODO-PrototypeDataModel.vab": "7eaf81eb9c7f5426493eeaaa9d167274",
"assets/assets/json/catalog/EBBMED-PrototypeDataModel.vab": "f7e648a6a3300696eef7494084432be3",
"assets/assets/json/catalog/ERTMED-PrototypeDataModel.vab": "e9690d7d289f74ab80600a67b9149e93",
"assets/assets/json/catalog/ERTMED-PrototypeDataModel-Windows.json": "dadb04622eb66aa945c2a3bb70eae167",
"assets/assets/json/catalog/MIN-PrototypeDataModel.json": "f6e27e2be1c25f6ae8f6012d0c0d6204",
"assets/assets/json/catalog/ERTMED-PrototypeDataModel-FLAC2025.vab": "202210102c4cba2d62add3492c791522",
"assets/assets/json/catalog/CIMEB2012-PT-PrototypeDataModel.vab": "9bf302b9acf002fd676972b9de51774a",
"assets/assets/json/catalog/ERTMED-PrototypeDataModel.json": "7bebe005dab67b3f2666e78d26b79a5e",
"assets/assets/json/catalog/CIMEB2012-EN-PrototypeDataModel.json": "02c7f0192cb4b05a7ede4087770d796b",
"assets/assets/json/catalog/ERTMED-PrototypeDataModel-FLAC.json": "93b10dd5a1eac983d193d5a8bcf5177a",
"assets/assets/json/catalog/CIMEB2012-PT-PrototypeDataModel.json": "1df2197e35e9fcf3f571f2337e9259f0",
"assets/assets/json/catalog/MEDMETHODO-PrototypeDataModel.json": "d47936b13ae686d123b61d83069e5041",
"assets/assets/json/catalog/EBB2022-PrototypeDataModel.json": "680989125ed055584475b93162d60700",
"assets/assets/fade_icon.png": "aa0c182116f100182abd7f065cf2a361",
"assets/assets/portugese.png": "43f2ff9e7759db969836d582ddb124d6",
"assets/assets/logo.svg": "6086b809122270baee3ed4446ac93b06",
"assets/assets/french.png": "cb5833b57e88ceec5dd9b577067f8de8",
"assets/assets/logo.ico": "d78d77f0629f4bbb936daa5de178b2d6",
"assets/assets/help/pt/gettingstarted.md": "94f6b136f307634f62d1d2f74fd6c7df",
"assets/assets/help/pt/license.md": "d686d6b2e2a33398d79ac5282ab9aef3",
"assets/assets/help/pt/images/SessionEditionExitButton.png": "ce55431a1f96b871bc510b9b16c883e2",
"assets/assets/help/pt/images/SessionExplorationDeleteSessionButton.png": "e2e01c33950c4b1c87708a72a6898a08",
"assets/assets/help/pt/images/SessionEditionOnCurveRedistributeButton.png": "3e2edbe3e13f49878ebca8a871a4a42e",
"assets/assets/help/pt/images/SessionExplorationPrintSessionButton.png": "fdcdc3de25d794f3b067f45e482dc895",
"assets/assets/help/pt/images/SessionEditionDeletePropositionButton.png": "e2e01c33950c4b1c87708a72a6898a08",
"assets/assets/help/pt/images/SessionEditionTitleEditor.png": "1a70401b1088a4674c67745394bdafab",
"assets/assets/help/pt/images/SessionExplorationExportToCSVButton.png": "62482d59bdbed6fb9503d08bf64ba2fb",
"assets/assets/help/pt/images/SessionExplorationAnimateSessionButton.png": "75d2bf61f735d3aa92e77f2b8e27e0a8",
"assets/assets/help/pt/images/SessionAnimation.png": "396b2c928e20fae0437c3b8ec39476b5",
"assets/assets/help/pt/images/SessionExplorationEditSessionButton.png": "f63f75566f752fb50b6d0e268035a4c6",
"assets/assets/help/pt/images/SessionEditionAnotateButton.png": "9808275bf84817e221ad3323b5402ed5",
"assets/assets/help/pt/images/PropositionEditionInstructions.png": "561006b0c9cef907806949f3d12453dd",
"assets/assets/help/pt/images/SessionExplorationHorizontalSessionNavigationButton.png": "c7414764e6f371f9fffbced684e070dc",
"assets/assets/help/pt/images/SessionEditionShareSessionButton.png": "03b18105cc2264f01acda54e7b3ba7fa",
"assets/assets/help/pt/images/SessionEditionEditPropositionButton.png": "753ea87d8ec91a9381180f4176ccbb32",
"assets/assets/help/pt/images/SessionEditionInsctructionEditionArea.png": "3f67c1059838fc4c7d629bb82fd7a7d2",
"assets/assets/help/pt/images/SessionEditionCatalogInstructionsButton.png": "f8795601aba8783b737e9428f148df8d",
"assets/assets/help/pt/images/SessionEditionPrintButton.png": "6c5029caf541fe39bea5930db7182f6c",
"assets/assets/help/pt/images/SessionEditionMusicBeeingPlayed.png": "2dbe702276c25d9505c31e90a85b87b9",
"assets/assets/help/pt/images/SessionEditionFadeButton.png": "5ac8cbaf1bafc35d401fc829d4162bec",
"assets/assets/help/pt/images/SessionEditionDatePicker.png": "cc9cae426702e79ee588ffae64007e92",
"assets/assets/help/pt/images/image_license.png": "54c5e9907d43613e5283c3675ede0133",
"assets/assets/help/pt/images/PropositionEditionAutocompletion.png": "9e613a451166a836d88c96f56107e249",
"assets/assets/help/pt/images/SessionEditionOnCurveKeyButton.png": "6b28a6ca6e81af45aa6b0e972b81b340",
"assets/assets/help/pt/images/SessionEditionEditThemeButton.png": "e9b76ac4b7cd7ed4f572370567e07c36",
"assets/assets/help/pt/images/SessionEditionOnCurveDeleteButton.png": "e2e01c33950c4b1c87708a72a6898a08",
"assets/assets/help/pt/images/SessionExplorationTopButtonPanel.png": "c4d56356198a8d853998a203fb679a10",
"assets/assets/help/pt/images/PauseButton.png": "28ba9529c609c73e82863f329f694002",
"assets/assets/help/pt/images/PlayButton.png": "75d2bf61f735d3aa92e77f2b8e27e0a8",
"assets/assets/help/pt/images/SessionEditionAddPropositionButton.png": "a645d8866f364e8820dedd9b159db8e5",
"assets/assets/help/pt/images/SessionEditionAnimationToggleButton.png": "e1baee1b974832c979fc5f02bc4a63c2",
"assets/assets/help/pt/images/SessionEditionLoopButton.png": "5866a44529b0a43415679dee0da6c0b7",
"assets/assets/help/pt/images/SessionEdition.png": "167395e35fe761a76e581adae283112b",
"assets/assets/help/pt/images/RefineMusic.png": "f97a385ae77dfad2426a3a039862c97d",
"assets/assets/help/pt/images/SessionExplorationDuplicateSessionButton.png": "9d1c189d724d4df831a1203d10167433",
"assets/assets/help/pt/images/PropositionEditionExplorationButton.png": "7c020d5616bf034d97a4fdd339acc5f6",
"assets/assets/help/pt/images/MainMenu.png": "167f47b6ef24e5c7a1ab6f8066e199e3",
"assets/assets/help/pt/images/SessionEditionVideoButton.png": "7e53b51760628952139b6379e0895090",
"assets/assets/help/pt/images/SessionExplorationCreateSessionButton.png": "f9f998618bbafdce828a4d064f983df9",
"assets/assets/help/pt/images/SessionExplorationLoadSessionButton.png": "4742b62747dee4355813aae2ccd52a2d",
"assets/assets/help/pt/images/SessionEditionOnCurve.png": "f8f109cdd93512cb08ff471e35697710",
"assets/assets/help/pt/images/SessionExplorationAdvancedFilterButton.png": "00e6ffe8853db16f2b8d4751dee85fef",
"assets/assets/help/pt/images/PropositionEditionWidget.png": "be1dc11ea65b451907cfd10d8fc862ab",
"assets/assets/help/pt/images/SessionEditionSpecificInstructionIcon.png": "c3466516db81096a4d076be522cc9ef3",
"assets/assets/help/pt/images/PropositionEditionRefineButton.png": "625769eca28347558ee98b4967a82cf8",
"assets/assets/help/pt/images/SessionExplorationEditCurveSessionButton.png": "1d4e21b6975ef039bd21b27ede13b0ae",
"assets/assets/help/pt/troubleshooting.md": "8c0d9c28839f95c1eacc82197bcbc2ac",
"assets/assets/help/pt/features.md": "d76feb58355e04a422c2f744c7b57f16",
"assets/assets/help/es/gettingstarted.md": "2685563793611aea24373b93728dec07",
"assets/assets/help/es/license.md": "d002bdd984dd7d9b49edcf8807cbfc12",
"assets/assets/help/es/images/SessionEditionExitButton.png": "ce55431a1f96b871bc510b9b16c883e2",
"assets/assets/help/es/images/SessionExplorationDeleteSessionButton.png": "e2e01c33950c4b1c87708a72a6898a08",
"assets/assets/help/es/images/SessionEditionOnCurveRedistributeButton.png": "3e2edbe3e13f49878ebca8a871a4a42e",
"assets/assets/help/es/images/SessionExplorationPrintSessionButton.png": "fdcdc3de25d794f3b067f45e482dc895",
"assets/assets/help/es/images/SessionEditionDeletePropositionButton.png": "e2e01c33950c4b1c87708a72a6898a08",
"assets/assets/help/es/images/SessionEditionTitleEditor.png": "1a70401b1088a4674c67745394bdafab",
"assets/assets/help/es/images/SessionExplorationExportToCSVButton.png": "62482d59bdbed6fb9503d08bf64ba2fb",
"assets/assets/help/es/images/SessionExplorationAnimateSessionButton.png": "75d2bf61f735d3aa92e77f2b8e27e0a8",
"assets/assets/help/es/images/SessionAnimation.png": "396b2c928e20fae0437c3b8ec39476b5",
"assets/assets/help/es/images/SessionExplorationEditSessionButton.png": "f63f75566f752fb50b6d0e268035a4c6",
"assets/assets/help/es/images/SessionEditionAnotateButton.png": "9808275bf84817e221ad3323b5402ed5",
"assets/assets/help/es/images/PropositionEditionInstructions.png": "561006b0c9cef907806949f3d12453dd",
"assets/assets/help/es/images/SessionExplorationHorizontalSessionNavigationButton.png": "c7414764e6f371f9fffbced684e070dc",
"assets/assets/help/es/images/SessionEditionShareSessionButton.png": "03b18105cc2264f01acda54e7b3ba7fa",
"assets/assets/help/es/images/SessionEditionEditPropositionButton.png": "753ea87d8ec91a9381180f4176ccbb32",
"assets/assets/help/es/images/SessionEditionInsctructionEditionArea.png": "3f67c1059838fc4c7d629bb82fd7a7d2",
"assets/assets/help/es/images/SessionEditionCatalogInstructionsButton.png": "f8795601aba8783b737e9428f148df8d",
"assets/assets/help/es/images/SessionEditionPrintButton.png": "6c5029caf541fe39bea5930db7182f6c",
"assets/assets/help/es/images/SessionEditionMusicBeeingPlayed.png": "2dbe702276c25d9505c31e90a85b87b9",
"assets/assets/help/es/images/SessionEditionFadeButton.png": "5ac8cbaf1bafc35d401fc829d4162bec",
"assets/assets/help/es/images/SessionEditionDatePicker.png": "cc9cae426702e79ee588ffae64007e92",
"assets/assets/help/es/images/image_license.png": "3ce2f96441aa93d63df8ab646c7abbec",
"assets/assets/help/es/images/PropositionEditionAutocompletion.png": "9e613a451166a836d88c96f56107e249",
"assets/assets/help/es/images/SessionEditionOnCurveKeyButton.png": "6b28a6ca6e81af45aa6b0e972b81b340",
"assets/assets/help/es/images/SessionEditionEditThemeButton.png": "e9b76ac4b7cd7ed4f572370567e07c36",
"assets/assets/help/es/images/SessionEditionOnCurveDeleteButton.png": "e2e01c33950c4b1c87708a72a6898a08",
"assets/assets/help/es/images/SessionExplorationTopButtonPanel.png": "c4d56356198a8d853998a203fb679a10",
"assets/assets/help/es/images/PauseButton.png": "28ba9529c609c73e82863f329f694002",
"assets/assets/help/es/images/PlayButton.png": "75d2bf61f735d3aa92e77f2b8e27e0a8",
"assets/assets/help/es/images/SessionEditionAddPropositionButton.png": "a645d8866f364e8820dedd9b159db8e5",
"assets/assets/help/es/images/SessionEditionAnimationToggleButton.png": "e1baee1b974832c979fc5f02bc4a63c2",
"assets/assets/help/es/images/SessionEditionLoopButton.png": "5866a44529b0a43415679dee0da6c0b7",
"assets/assets/help/es/images/SessionEdition.png": "167395e35fe761a76e581adae283112b",
"assets/assets/help/es/images/RefineMusic.png": "f97a385ae77dfad2426a3a039862c97d",
"assets/assets/help/es/images/SessionExplorationDuplicateSessionButton.png": "9d1c189d724d4df831a1203d10167433",
"assets/assets/help/es/images/PropositionEditionExplorationButton.png": "7c020d5616bf034d97a4fdd339acc5f6",
"assets/assets/help/es/images/MainMenu.png": "167f47b6ef24e5c7a1ab6f8066e199e3",
"assets/assets/help/es/images/SessionEditionVideoButton.png": "7e53b51760628952139b6379e0895090",
"assets/assets/help/es/images/SessionExplorationCreateSessionButton.png": "f9f998618bbafdce828a4d064f983df9",
"assets/assets/help/es/images/SessionExplorationLoadSessionButton.png": "4742b62747dee4355813aae2ccd52a2d",
"assets/assets/help/es/images/SessionEditionOnCurve.png": "f8f109cdd93512cb08ff471e35697710",
"assets/assets/help/es/images/SessionExplorationAdvancedFilterButton.png": "00e6ffe8853db16f2b8d4751dee85fef",
"assets/assets/help/es/images/PropositionEditionWidget.png": "be1dc11ea65b451907cfd10d8fc862ab",
"assets/assets/help/es/images/SessionEditionSpecificInstructionIcon.png": "c3466516db81096a4d076be522cc9ef3",
"assets/assets/help/es/images/PropositionEditionRefineButton.png": "625769eca28347558ee98b4967a82cf8",
"assets/assets/help/es/images/SessionExplorationEditCurveSessionButton.png": "1d4e21b6975ef039bd21b27ede13b0ae",
"assets/assets/help/es/troubleshooting.md": "8c0d9c28839f95c1eacc82197bcbc2ac",
"assets/assets/help/es/features.md": "4d7c40824d5368e3af2e77be081648f2",
"assets/assets/help/fr/gettingstarted.md": "20a17461929f54f9036dbfe23819a049",
"assets/assets/help/fr/license.md": "e577d8decf879d9c6f91bc641de3de31",
"assets/assets/help/fr/images/SessionEditionExitButton.png": "ce55431a1f96b871bc510b9b16c883e2",
"assets/assets/help/fr/images/SessionExplorationDeleteSessionButton.png": "e2e01c33950c4b1c87708a72a6898a08",
"assets/assets/help/fr/images/SessionEditionOnCurveRedistributeButton.png": "3e2edbe3e13f49878ebca8a871a4a42e",
"assets/assets/help/fr/images/SessionExplorationPrintSessionButton.png": "fdcdc3de25d794f3b067f45e482dc895",
"assets/assets/help/fr/images/SessionEditionDeletePropositionButton.png": "e2e01c33950c4b1c87708a72a6898a08",
"assets/assets/help/fr/images/SessionEditionTitleEditor.png": "1a70401b1088a4674c67745394bdafab",
"assets/assets/help/fr/images/SessionExplorationExportToCSVButton.png": "62482d59bdbed6fb9503d08bf64ba2fb",
"assets/assets/help/fr/images/SessionExplorationAnimateSessionButton.png": "75d2bf61f735d3aa92e77f2b8e27e0a8",
"assets/assets/help/fr/images/SessionAnimation.png": "396b2c928e20fae0437c3b8ec39476b5",
"assets/assets/help/fr/images/SessionExplorationEditSessionButton.png": "f63f75566f752fb50b6d0e268035a4c6",
"assets/assets/help/fr/images/SessionEditionAnotateButton.png": "9808275bf84817e221ad3323b5402ed5",
"assets/assets/help/fr/images/PropositionEditionInstructions.png": "561006b0c9cef907806949f3d12453dd",
"assets/assets/help/fr/images/SessionExplorationHorizontalSessionNavigationButton.png": "c7414764e6f371f9fffbced684e070dc",
"assets/assets/help/fr/images/SessionEditionShareSessionButton.png": "03b18105cc2264f01acda54e7b3ba7fa",
"assets/assets/help/fr/images/SessionEditionEditPropositionButton.png": "753ea87d8ec91a9381180f4176ccbb32",
"assets/assets/help/fr/images/SessionEditionInsctructionEditionArea.png": "3f67c1059838fc4c7d629bb82fd7a7d2",
"assets/assets/help/fr/images/SessionEditionCatalogInstructionsButton.png": "f8795601aba8783b737e9428f148df8d",
"assets/assets/help/fr/images/SessionEditionPrintButton.png": "6c5029caf541fe39bea5930db7182f6c",
"assets/assets/help/fr/images/SessionEditionMusicBeeingPlayed.png": "2dbe702276c25d9505c31e90a85b87b9",
"assets/assets/help/fr/images/SessionEditionFadeButton.png": "5ac8cbaf1bafc35d401fc829d4162bec",
"assets/assets/help/fr/images/SessionEditionDatePicker.png": "cc9cae426702e79ee588ffae64007e92",
"assets/assets/help/fr/images/image_license.png": "e1509479283861b7d675a939bb5f69af",
"assets/assets/help/fr/images/PropositionEditionAutocompletion.png": "9e613a451166a836d88c96f56107e249",
"assets/assets/help/fr/images/SessionEditionOnCurveKeyButton.png": "6b28a6ca6e81af45aa6b0e972b81b340",
"assets/assets/help/fr/images/SessionEditionEditThemeButton.png": "e9b76ac4b7cd7ed4f572370567e07c36",
"assets/assets/help/fr/images/SessionEditionOnCurveDeleteButton.png": "e2e01c33950c4b1c87708a72a6898a08",
"assets/assets/help/fr/images/SessionExplorationTopButtonPanel.png": "c4d56356198a8d853998a203fb679a10",
"assets/assets/help/fr/images/PauseButton.png": "28ba9529c609c73e82863f329f694002",
"assets/assets/help/fr/images/PlayButton.png": "75d2bf61f735d3aa92e77f2b8e27e0a8",
"assets/assets/help/fr/images/SessionEditionAddPropositionButton.png": "a645d8866f364e8820dedd9b159db8e5",
"assets/assets/help/fr/images/SessionEditionAnimationToggleButton.png": "e1baee1b974832c979fc5f02bc4a63c2",
"assets/assets/help/fr/images/SessionEditionLoopButton.png": "5866a44529b0a43415679dee0da6c0b7",
"assets/assets/help/fr/images/SessionEdition.png": "167395e35fe761a76e581adae283112b",
"assets/assets/help/fr/images/RefineMusic.png": "f97a385ae77dfad2426a3a039862c97d",
"assets/assets/help/fr/images/SessionExplorationDuplicateSessionButton.png": "9d1c189d724d4df831a1203d10167433",
"assets/assets/help/fr/images/PropositionEditionExplorationButton.png": "7c020d5616bf034d97a4fdd339acc5f6",
"assets/assets/help/fr/images/MainMenu.png": "167f47b6ef24e5c7a1ab6f8066e199e3",
"assets/assets/help/fr/images/SessionEditionVideoButton.png": "7e53b51760628952139b6379e0895090",
"assets/assets/help/fr/images/SessionExplorationCreateSessionButton.png": "f9f998618bbafdce828a4d064f983df9",
"assets/assets/help/fr/images/SessionExplorationLoadSessionButton.png": "4742b62747dee4355813aae2ccd52a2d",
"assets/assets/help/fr/images/SessionEditionOnCurve.png": "f8f109cdd93512cb08ff471e35697710",
"assets/assets/help/fr/images/SessionExplorationAdvancedFilterButton.png": "00e6ffe8853db16f2b8d4751dee85fef",
"assets/assets/help/fr/images/PropositionEditionWidget.png": "be1dc11ea65b451907cfd10d8fc862ab",
"assets/assets/help/fr/images/SessionEditionSpecificInstructionIcon.png": "c3466516db81096a4d076be522cc9ef3",
"assets/assets/help/fr/images/PropositionEditionRefineButton.png": "625769eca28347558ee98b4967a82cf8",
"assets/assets/help/fr/images/SessionExplorationEditCurveSessionButton.png": "1d4e21b6975ef039bd21b27ede13b0ae",
"assets/assets/help/fr/troubleshooting.md": "a7f66f8c9bc5bd630ff65e9f105cef08",
"assets/assets/help/fr/features.md": "31f2e700e8326e97e98d4f8f88a77346",
"assets/assets/help/en/gettingstarted.md": "9f573e90d8437dca9f914ae3ddf09c18",
"assets/assets/help/en/license.md": "718585c3c3576424e667fb0b658899b2",
"assets/assets/help/en/images/SessionEditionExitButton.png": "ce55431a1f96b871bc510b9b16c883e2",
"assets/assets/help/en/images/SessionExplorationDeleteSessionButton.png": "e2e01c33950c4b1c87708a72a6898a08",
"assets/assets/help/en/images/SessionEditionOnCurveRedistributeButton.png": "3e2edbe3e13f49878ebca8a871a4a42e",
"assets/assets/help/en/images/SessionExplorationPrintSessionButton.png": "fdcdc3de25d794f3b067f45e482dc895",
"assets/assets/help/en/images/SessionEditionDeletePropositionButton.png": "e2e01c33950c4b1c87708a72a6898a08",
"assets/assets/help/en/images/SessionEditionTitleEditor.png": "1a70401b1088a4674c67745394bdafab",
"assets/assets/help/en/images/SessionExplorationExportToCSVButton.png": "62482d59bdbed6fb9503d08bf64ba2fb",
"assets/assets/help/en/images/SessionExplorationAnimateSessionButton.png": "75d2bf61f735d3aa92e77f2b8e27e0a8",
"assets/assets/help/en/images/SessionAnimation.png": "396b2c928e20fae0437c3b8ec39476b5",
"assets/assets/help/en/images/SessionExplorationEditSessionButton.png": "f63f75566f752fb50b6d0e268035a4c6",
"assets/assets/help/en/images/SessionEditionAnotateButton.png": "9808275bf84817e221ad3323b5402ed5",
"assets/assets/help/en/images/PropositionEditionInstructions.png": "561006b0c9cef907806949f3d12453dd",
"assets/assets/help/en/images/SessionExplorationHorizontalSessionNavigationButton.png": "c7414764e6f371f9fffbced684e070dc",
"assets/assets/help/en/images/SessionEditionShareSessionButton.png": "03b18105cc2264f01acda54e7b3ba7fa",
"assets/assets/help/en/images/SessionEditionEditPropositionButton.png": "753ea87d8ec91a9381180f4176ccbb32",
"assets/assets/help/en/images/SessionEditionInsctructionEditionArea.png": "3f67c1059838fc4c7d629bb82fd7a7d2",
"assets/assets/help/en/images/SessionEditionCatalogInstructionsButton.png": "f8795601aba8783b737e9428f148df8d",
"assets/assets/help/en/images/SessionEditionPrintButton.png": "6c5029caf541fe39bea5930db7182f6c",
"assets/assets/help/en/images/SessionEditionMusicBeeingPlayed.png": "2dbe702276c25d9505c31e90a85b87b9",
"assets/assets/help/en/images/SessionEditionFadeButton.png": "5ac8cbaf1bafc35d401fc829d4162bec",
"assets/assets/help/en/images/SessionEditionDatePicker.png": "cc9cae426702e79ee588ffae64007e92",
"assets/assets/help/en/images/image_license.png": "161541618cee683d6713120a9f9f2321",
"assets/assets/help/en/images/PropositionEditionAutocompletion.png": "9e613a451166a836d88c96f56107e249",
"assets/assets/help/en/images/SessionEditionOnCurveKeyButton.png": "6b28a6ca6e81af45aa6b0e972b81b340",
"assets/assets/help/en/images/SessionEditionEditThemeButton.png": "e9b76ac4b7cd7ed4f572370567e07c36",
"assets/assets/help/en/images/SessionEditionOnCurveDeleteButton.png": "e2e01c33950c4b1c87708a72a6898a08",
"assets/assets/help/en/images/SessionExplorationTopButtonPanel.png": "c4d56356198a8d853998a203fb679a10",
"assets/assets/help/en/images/PauseButton.png": "28ba9529c609c73e82863f329f694002",
"assets/assets/help/en/images/PlayButton.png": "75d2bf61f735d3aa92e77f2b8e27e0a8",
"assets/assets/help/en/images/SessionEditionAddPropositionButton.png": "a645d8866f364e8820dedd9b159db8e5",
"assets/assets/help/en/images/SessionEditionAnimationToggleButton.png": "e1baee1b974832c979fc5f02bc4a63c2",
"assets/assets/help/en/images/SessionEditionLoopButton.png": "5866a44529b0a43415679dee0da6c0b7",
"assets/assets/help/en/images/SessionEdition.png": "167395e35fe761a76e581adae283112b",
"assets/assets/help/en/images/RefineMusic.png": "f97a385ae77dfad2426a3a039862c97d",
"assets/assets/help/en/images/SessionExplorationDuplicateSessionButton.png": "9d1c189d724d4df831a1203d10167433",
"assets/assets/help/en/images/PropositionEditionExplorationButton.png": "7c020d5616bf034d97a4fdd339acc5f6",
"assets/assets/help/en/images/MainMenu.png": "167f47b6ef24e5c7a1ab6f8066e199e3",
"assets/assets/help/en/images/SessionEditionVideoButton.png": "7e53b51760628952139b6379e0895090",
"assets/assets/help/en/images/SessionExplorationCreateSessionButton.png": "f9f998618bbafdce828a4d064f983df9",
"assets/assets/help/en/images/SessionExplorationLoadSessionButton.png": "4742b62747dee4355813aae2ccd52a2d",
"assets/assets/help/en/images/SessionEditionOnCurve.png": "f8f109cdd93512cb08ff471e35697710",
"assets/assets/help/en/images/SessionExplorationAdvancedFilterButton.png": "00e6ffe8853db16f2b8d4751dee85fef",
"assets/assets/help/en/images/PropositionEditionWidget.png": "be1dc11ea65b451907cfd10d8fc862ab",
"assets/assets/help/en/images/SessionEditionSpecificInstructionIcon.png": "c3466516db81096a4d076be522cc9ef3",
"assets/assets/help/en/images/PropositionEditionRefineButton.png": "625769eca28347558ee98b4967a82cf8",
"assets/assets/help/en/images/SessionExplorationEditCurveSessionButton.png": "1d4e21b6975ef039bd21b27ede13b0ae",
"assets/assets/help/en/troubleshooting.md": "97fcefb4ca46d8b694235f5242111d7c",
"assets/assets/help/en/features.md": "f5891a1c8c8ef5db442a3d5685bd9878",
"assets/assets/spanish.png": "f54a4d62d5f0b70d478170d636ca6f3d",
"assets/FontManifest.json": "01e1c35e042a90e3efad4488f9be97ce",
"assets/AssetManifest.bin.json": "c1ee09480205340bff7d0b8b08b3d698",
"assets/AssetManifest.bin": "8ee3d9d9bb64288517aa852eb1dd51eb",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/material_design_icons_flutter/lib/fonts/materialdesignicons-webfont.ttf": "3759b2f7a51e83c64a58cfe07b96a8ee",
"assets/packages/media_kit/assets/web/hls1.4.10.js": "bd60e2701c42b6bf2c339dcf5d495865",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/packages/iconsax_flutter/fonts/FlutterIconsax.ttf": "6ebc7bc5b74956596611c6774d8beb5b",
"flutter_bootstrap.js": "e06b818e3991a23ca372b6a3a79efe6c",
"favicon.png": "d0239789fe665a20ba5516876aa6dd6d",
"index.html": "335f88bdb0385c9c43abda72c01bc072",
"/": "335f88bdb0385c9c43abda72c01bc072"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
