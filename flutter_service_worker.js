'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter.js": "888483df48293866f9f41d3d9274a779",
"icons/Icon-512.png": "3a0d763411753bc6fb68525e8eba0db3",
"icons/Icon-maskable-512.png": "4c760115bd841a602e441ea349fa37e0",
"icons/Icon-192.png": "e48de45a2366b0c4bcff23964df27b21",
"icons/Icon-maskable-192.png": "e9f836ce3e007e44c37633d1a78a7255",
"manifest.json": "ed0e9854775aac57af882d70e0572d11",
"index.html": "335f88bdb0385c9c43abda72c01bc072",
"/": "335f88bdb0385c9c43abda72c01bc072",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin.json": "3b890e667a1bc7ddc7a613ed30fb4074",
"assets/assets/english.png": "015a5fdbb9c32f341aac4d2084c462a0",
"assets/assets/privacy/privacy_policy_fr.md": "672370c43cf07243bcce6b7c2aedb5f8",
"assets/assets/privacy/privacy_policy_es.md": "afc942c8de19ba58801044f8f815851e",
"assets/assets/privacy/privacy_policy_en.md": "998c2d7157329c30f9f8af646615083c",
"assets/assets/privacy/privacy_policy_pt.md": "89123f2fdffcda6641c922a29d01de8a",
"assets/assets/french.png": "cb5833b57e88ceec5dd9b577067f8de8",
"assets/assets/logo.svg": "6086b809122270baee3ed4446ac93b06",
"assets/assets/fade_icon_selected.png": "1a301be85442f4f1a8d4a07e04b1faa1",
"assets/assets/portugese.png": "43f2ff9e7759db969836d582ddb124d6",
"assets/assets/fonts/NotoSans-Bold.ttf": "2ea5e0855d5a3ec3f561b5bc62b39805",
"assets/assets/fonts/NotoSans-Regular.ttf": "f46b08cc90d994b34b647ae24c46d504",
"assets/assets/fonts/NotoSans-Italic.ttf": "a6d070775dd5e6bfff61870528c6248a",
"assets/assets/fade_icon.png": "aa0c182116f100182abd7f065cf2a361",
"assets/assets/json/catalog/MIN-PrototypeDataModel.json": "f6e27e2be1c25f6ae8f6012d0c0d6204",
"assets/assets/json/catalog/ERTMED-PrototypeDataModel-Windows.json": "dadb04622eb66aa945c2a3bb70eae167",
"assets/assets/json/catalog/EBBA2024-PrototypeDataModel.vab": "3761b3339303b585434bbf1c117c9ab5",
"assets/assets/json/catalog/MIN-PrototypeDataModel.vab": "96362558f285af23c6ee5a43cc2fbe71",
"assets/assets/json/catalog/ERTMED-PrototypeDataModel-FLAC.json": "93b10dd5a1eac983d193d5a8bcf5177a",
"assets/assets/json/catalog/MUSICTEST-PrototypeDataModel.vab": "d108abfeb66802fdb614c3b5d750f46c",
"assets/assets/json/catalog/CIMEB2012-PrototypeDataModel.vab": "e50f1efc049a4d9de614188f65f3dbbb",
"assets/assets/json/catalog/CIMEB2012-EN-PrototypeDataModel.json": "02c7f0192cb4b05a7ede4087770d796b",
"assets/assets/json/catalog/EBB2022-PrototypeDataModel.vab": "f65b9e1ca17bc577b2840403e34d9775",
"assets/assets/json/catalog/CIMEB2012-PT-PrototypeDataModel.json": "1df2197e35e9fcf3f571f2337e9259f0",
"assets/assets/json/catalog/MUSICTEST-PrototypeDataModel.json": "bb9edbaad308ad1f0c37d2c1e079ec09",
"assets/assets/json/catalog/CIMEB2012-PrototypeDataModel.json": "13588393605442162162760252d5b7c7",
"assets/assets/json/catalog/CIMEB2012-ES-PrototypeDataModel.vab": "dc8fa816d7a132fb61e395f9e5ad2cb9",
"assets/assets/json/catalog/CIMEB2012-ES-PrototypeDataModel.json": "37caa7352c1b632653ae8ed16053fed9",
"assets/assets/json/catalog/ERTMED-PrototypeDataModel.json": "7bebe005dab67b3f2666e78d26b79a5e",
"assets/assets/json/catalog/ERTMED-PrototypeDataModel-FLAC.vab": "d166968811579a43cdbdd07c1d5aafa4",
"assets/assets/json/catalog/ERTMED-PrototypeDataModel-FLAC2025.vab": "202210102c4cba2d62add3492c791522",
"assets/assets/json/catalog/EBB2022-PrototypeDataModel.json": "680989125ed055584475b93162d60700",
"assets/assets/json/catalog/CIMEB2012-PT-PrototypeDataModel.vab": "9bf302b9acf002fd676972b9de51774a",
"assets/assets/json/catalog/EBBMED-PrototypeDataModel.vab": "f7e648a6a3300696eef7494084432be3",
"assets/assets/json/catalog/ERTMED-PrototypeDataModel-FLAC2025.json": "225492f66352eae5e6bf57afe9af37ea",
"assets/assets/json/catalog/MEDMETHODO-PrototypeDataModel.json": "d47936b13ae686d123b61d83069e5041",
"assets/assets/json/catalog/ERTMED-PrototypeDataModel-Windows.vab": "160671628809aa2e21958a2037d566fd",
"assets/assets/json/catalog/EBBA2024-PrototypeDataModel.json": "1292502765aa5bf877c79cc59b87a033",
"assets/assets/json/catalog/EBBMED-PrototypeDataModel.json": "9147a7f08c71c05a143f1c3d678d1785",
"assets/assets/json/catalog/MEDMETHODO-PrototypeDataModel.vab": "7eaf81eb9c7f5426493eeaaa9d167274",
"assets/assets/json/catalog/ERTMED-PrototypeDataModel.vab": "e9690d7d289f74ab80600a67b9149e93",
"assets/assets/json/catalog/CIMEB2012-EN-PrototypeDataModel.vab": "fea2b9a0dbfe8582be66cc55a9184f90",
"assets/assets/json/demoCatalog/DemonstrationsMED-EN-PrototypeDataModel.json": "a0f6812472310de980b12a7aadfe01a8",
"assets/assets/json/demoCatalog/DemonstrationsMED-PrototypeDataModel.json": "c7db571d03b12f4a9f50d67c590af738",
"assets/assets/json/demoCatalog/DemonstrationsMED-ES-PrototypeDataModel.vab": "ce60cc0d34c73f132bb0054392b78072",
"assets/assets/json/demoCatalog/DemonstrationsMED-PrototypeDataModel-ForEBB.json": "21344b571d871127b2924a0117249636",
"assets/assets/json/demoCatalog/DemonstrationsMED-PT-PrototypeDataModel.json": "0c88adb5a384bb81db041e614b61ed44",
"assets/assets/json/demoCatalog/DemonstrationsMED-PT-PrototypeDataModel.vab": "132b719f6b9b7ad1149a14508bd33645",
"assets/assets/json/demoCatalog/DemonstrationsMED-PrototypeDataModel-ForEBB.vab": "98c15e339853ddf9154e83eb4fcc20ce",
"assets/assets/json/demoCatalog/DemonstrationsMED-EN-PrototypeDataModel.vab": "4472e5ca2981151a1a6c9ae5332e5880",
"assets/assets/json/demoCatalog/DemonstrationsMED-ES-PrototypeDataModel.json": "5abd92a8fa9fb56c53064098fa6ef11d",
"assets/assets/json/demoCatalog/DemonstrationsMED-PrototypeDataModel.vab": "4d4e780b48ade3da65a292bf1bfa8d03",
"assets/assets/json/sessions/AnimationDefault.json": "8885b149fe6422ef3a2f3bd8736d0031",
"assets/assets/json/sessions/AnimationDefaultSession%2520CIMEB.json": "e144d9ba35c7a6fc29716927769c7077",
"assets/assets/json/sessions/TestSession.json": "96c1e5d916c2271a2ec7e0e599975bb8",
"assets/assets/json/sessions/sample.json": "1df72fe9166a8d20a6b8addf525a0fb0",
"assets/assets/json/sessions/Les%2520couleurs%2520de%2520la%2520rencontre.json": "486dfa0bd4babcc8024cb5e42c41965d",
"assets/assets/json/sessions/AnimationDefaultSession.json": "757e759a23fa05e1e51f5166adb9e15b",
"assets/assets/json/ChangeLog.json": "d0221f4f719ed183e9c6b29021f2a3de",
"assets/assets/logo.png": "aa97a13df4ef89389d36d2416475c688",
"assets/assets/logo.ico": "d78d77f0629f4bbb936daa5de178b2d6",
"assets/assets/spanish.png": "f54a4d62d5f0b70d478170d636ca6f3d",
"assets/assets/cfg/hash.txt": "2d12a9a2e5fb5e6b662f5c85b9fb1423",
"assets/assets/cfg/app_settings.json": "f5cbc476c603bd6540f760f3a8142f43",
"assets/assets/help/en/troubleshooting.md": "ca1b88cfd4b09e2e83607789bb36a294",
"assets/assets/help/en/gettingstarted.md": "1204e88a66e7bec8b85ed5b9c6545c61",
"assets/assets/help/en/license.md": "447cb74f2b8ad9c744d8ee23a07ef37f",
"assets/assets/help/en/features.md": "3e94348dad97bbe25ab3118eb0481599",
"assets/assets/help/en/images/SessionExplorationAnimateSessionButton.png": "75d2bf61f735d3aa92e77f2b8e27e0a8",
"assets/assets/help/en/images/SessionEditionMusicBeeingPlayed.png": "2dbe702276c25d9505c31e90a85b87b9",
"assets/assets/help/en/images/SessionEditionEditThemeButton.png": "e9b76ac4b7cd7ed4f572370567e07c36",
"assets/assets/help/en/images/RefineMusic.png": "f3c06bdc5317b0969c5afa872ff9048c",
"assets/assets/help/en/images/PropositionEditionExplorationButton.png": "7c020d5616bf034d97a4fdd339acc5f6",
"assets/assets/help/en/images/SessionEditionOnCurveDeleteButton.png": "e2e01c33950c4b1c87708a72a6898a08",
"assets/assets/help/en/images/SessionEditionAnotateButton.png": "9808275bf84817e221ad3323b5402ed5",
"assets/assets/help/en/images/SessionEditionOnCurveRedistributeButton.png": "3e2edbe3e13f49878ebca8a871a4a42e",
"assets/assets/help/en/images/SessionEditionCatalogInstructionsButton.png": "f8795601aba8783b737e9428f148df8d",
"assets/assets/help/en/images/SessionEditionEditPropositionButton.png": "753ea87d8ec91a9381180f4176ccbb32",
"assets/assets/help/en/images/SessionExplorationTopButtonPanel.png": "c4d56356198a8d853998a203fb679a10",
"assets/assets/help/en/images/SessionEditionFadeButton.png": "5ac8cbaf1bafc35d401fc829d4162bec",
"assets/assets/help/en/images/SessionEditionExitButton.png": "ce55431a1f96b871bc510b9b16c883e2",
"assets/assets/help/en/images/SessionExplorationDuplicateSessionButton.png": "9d1c189d724d4df831a1203d10167433",
"assets/assets/help/en/images/SessionExplorationCreateSessionButton.png": "f9f998618bbafdce828a4d064f983df9",
"assets/assets/help/en/images/SessionEditionDragAndDropButton.png": "e1fc1230931bc57fdd793c72cb7f25fe",
"assets/assets/help/en/images/SessionExplorationDeleteSessionButton.png": "e2e01c33950c4b1c87708a72a6898a08",
"assets/assets/help/en/images/PropositionEditionAutocompletion.png": "e1421feb5b78ffdc4cbcc0dfcb1de70f",
"assets/assets/help/en/images/CatalogMusicButton.png": "97559679bf270ecfba2d287ce98cccde",
"assets/assets/help/en/images/PauseButton.png": "28ba9529c609c73e82863f329f694002",
"assets/assets/help/en/images/SessionEditionInsctructionEditionArea.png": "96b0466de9253513f1d9549227b84026",
"assets/assets/help/en/images/SessionEdition.png": "2a2b517199689a21dfaf0f8ec57b831f",
"assets/assets/help/en/images/PlayButton.png": "75d2bf61f735d3aa92e77f2b8e27e0a8",
"assets/assets/help/en/images/SessionEditionTitleEditor.png": "ac8ef835490b0476010e75792159b43f",
"assets/assets/help/en/images/SessionExplorationExportToCSVButton.png": "62482d59bdbed6fb9503d08bf64ba2fb",
"assets/assets/help/en/images/CatalogExerciseButton.png": "68a8f99142a69b62d517f2138772cd9b",
"assets/assets/help/en/images/SessionExplorationLoadSessionButton.png": "4742b62747dee4355813aae2ccd52a2d",
"assets/assets/help/en/images/PropositionEditionInstructions.png": "461fb66fcef6e8c8e1a5a135530e5fdf",
"assets/assets/help/en/images/SessionSaveOrShareDialog.png": "5e0958b5feb244c481af2b123d9254c9",
"assets/assets/help/en/images/PropositionEditionRefineButton.png": "625769eca28347558ee98b4967a82cf8",
"assets/assets/help/en/images/SessionEditionOnCurveKeyButton.png": "6b28a6ca6e81af45aa6b0e972b81b340",
"assets/assets/help/en/images/SessionEditionShareSessionButton.png": "03b18105cc2264f01acda54e7b3ba7fa",
"assets/assets/help/en/images/SessionEditionOnCurve.png": "f6def1634106779b4c574669d0842f2a",
"assets/assets/help/en/images/SessionEditionAddPropositionButton.png": "a645d8866f364e8820dedd9b159db8e5",
"assets/assets/help/en/images/SessionExplorationEditSessionButton.png": "f63f75566f752fb50b6d0e268035a4c6",
"assets/assets/help/en/images/SessionEditionVideoButton.png": "7e53b51760628952139b6379e0895090",
"assets/assets/help/en/images/SessionEditionDatePicker.png": "d89d085cec56058d61c4b284fab84440",
"assets/assets/help/en/images/SessionEditionAnimationToggleButton.png": "e1baee1b974832c979fc5f02bc4a63c2",
"assets/assets/help/en/images/SessionEditionDeletePropositionButton.png": "e2e01c33950c4b1c87708a72a6898a08",
"assets/assets/help/en/images/SessionExplorationEditCurveSessionButton.png": "1d4e21b6975ef039bd21b27ede13b0ae",
"assets/assets/help/en/images/SessionExplorationAdvancedFilterButton.png": "00e6ffe8853db16f2b8d4751dee85fef",
"assets/assets/help/en/images/SessionSaveOrShareButton.png": "0d1719562428c4a7eaf0e2daad490280",
"assets/assets/help/en/images/SessionEditionSpecificInstructionIcon.png": "c3466516db81096a4d076be522cc9ef3",
"assets/assets/help/en/images/image_license.png": "a9c3352ef8d31d3ba60fa04614b9d0e7",
"assets/assets/help/en/images/SessionEditionLoopButton.png": "5866a44529b0a43415679dee0da6c0b7",
"assets/assets/help/en/images/PropositionEditionWidget.png": "2384e275ffb57cb4e3251f1dbc849077",
"assets/assets/help/en/images/SessionEditionPrintButton.png": "6c5029caf541fe39bea5930db7182f6c",
"assets/assets/help/en/images/MainMenu.png": "167f47b6ef24e5c7a1ab6f8066e199e3",
"assets/assets/help/en/images/SessionExplorationHorizontalSessionNavigationButton.png": "c7414764e6f371f9fffbced684e070dc",
"assets/assets/help/en/images/SessionExplorationPrintSessionButton.png": "fdcdc3de25d794f3b067f45e482dc895",
"assets/assets/help/en/images/SessionAnimation.png": "2f7e2962346a344198571832b2d8fffd",
"assets/assets/help/en/images/SessionLine.png": "95fb55aee92d5b696e9c984841e13bc5",
"assets/assets/help/fr/troubleshooting.md": "ced78780c9a17d5a019de0bd73e907aa",
"assets/assets/help/fr/gettingstarted.md": "3cadf31dc5a50a85fc04e808f2ee0fd9",
"assets/assets/help/fr/license.md": "b33296109e2e7e5cf4c5e2e22abf9008",
"assets/assets/help/fr/features.md": "77868181cdc74f7a6f764738cb26734c",
"assets/assets/help/fr/images/SessionExplorationAnimateSessionButton.png": "75d2bf61f735d3aa92e77f2b8e27e0a8",
"assets/assets/help/fr/images/SessionEditionMusicBeeingPlayed.png": "2dbe702276c25d9505c31e90a85b87b9",
"assets/assets/help/fr/images/SessionEditionEditThemeButton.png": "e9b76ac4b7cd7ed4f572370567e07c36",
"assets/assets/help/fr/images/RefineMusic.png": "f97a385ae77dfad2426a3a039862c97d",
"assets/assets/help/fr/images/PropositionEditionExplorationButton.png": "7c020d5616bf034d97a4fdd339acc5f6",
"assets/assets/help/fr/images/SessionEditionOnCurveDeleteButton.png": "e2e01c33950c4b1c87708a72a6898a08",
"assets/assets/help/fr/images/SessionEditionAnotateButton.png": "9808275bf84817e221ad3323b5402ed5",
"assets/assets/help/fr/images/SessionEditionOnCurveRedistributeButton.png": "3e2edbe3e13f49878ebca8a871a4a42e",
"assets/assets/help/fr/images/SessionEditionCatalogInstructionsButton.png": "f8795601aba8783b737e9428f148df8d",
"assets/assets/help/fr/images/SessionEditionEditPropositionButton.png": "753ea87d8ec91a9381180f4176ccbb32",
"assets/assets/help/fr/images/SessionExplorationTopButtonPanel.png": "c4d56356198a8d853998a203fb679a10",
"assets/assets/help/fr/images/SessionEditionFadeButton.png": "5ac8cbaf1bafc35d401fc829d4162bec",
"assets/assets/help/fr/images/SessionEditionExitButton.png": "ce55431a1f96b871bc510b9b16c883e2",
"assets/assets/help/fr/images/SessionExplorationDuplicateSessionButton.png": "9d1c189d724d4df831a1203d10167433",
"assets/assets/help/fr/images/SessionExplorationCreateSessionButton.png": "f9f998618bbafdce828a4d064f983df9",
"assets/assets/help/fr/images/SessionEditionDragAndDropButton.png": "e1fc1230931bc57fdd793c72cb7f25fe",
"assets/assets/help/fr/images/SessionExplorationDeleteSessionButton.png": "e2e01c33950c4b1c87708a72a6898a08",
"assets/assets/help/fr/images/PropositionEditionAutocompletion.png": "9e613a451166a836d88c96f56107e249",
"assets/assets/help/fr/images/CatalogMusicButton.png": "de36cd9a74a5b0168bed6f46f15854ea",
"assets/assets/help/fr/images/PauseButton.png": "28ba9529c609c73e82863f329f694002",
"assets/assets/help/fr/images/SessionEditionInsctructionEditionArea.png": "3f67c1059838fc4c7d629bb82fd7a7d2",
"assets/assets/help/fr/images/SessionEdition.png": "167395e35fe761a76e581adae283112b",
"assets/assets/help/fr/images/PlayButton.png": "75d2bf61f735d3aa92e77f2b8e27e0a8",
"assets/assets/help/fr/images/SessionEditionTitleEditor.png": "1a70401b1088a4674c67745394bdafab",
"assets/assets/help/fr/images/SessionExplorationExportToCSVButton.png": "62482d59bdbed6fb9503d08bf64ba2fb",
"assets/assets/help/fr/images/CatalogExerciseButton.png": "db9261e42fa7b10a0a514783a2b29784",
"assets/assets/help/fr/images/SessionExplorationLoadSessionButton.png": "4742b62747dee4355813aae2ccd52a2d",
"assets/assets/help/fr/images/PropositionEditionInstructions.png": "561006b0c9cef907806949f3d12453dd",
"assets/assets/help/fr/images/SessionSaveOrShareDialog.png": "fdcf8dcd03091bc13299b61a6a304bc9",
"assets/assets/help/fr/images/PropositionEditionRefineButton.png": "625769eca28347558ee98b4967a82cf8",
"assets/assets/help/fr/images/SessionEditionOnCurveKeyButton.png": "6b28a6ca6e81af45aa6b0e972b81b340",
"assets/assets/help/fr/images/SessionEditionShareSessionButton.png": "03b18105cc2264f01acda54e7b3ba7fa",
"assets/assets/help/fr/images/SessionEditionOnCurve.png": "f8f109cdd93512cb08ff471e35697710",
"assets/assets/help/fr/images/SessionEditionAddPropositionButton.png": "a645d8866f364e8820dedd9b159db8e5",
"assets/assets/help/fr/images/SessionExplorationEditSessionButton.png": "f63f75566f752fb50b6d0e268035a4c6",
"assets/assets/help/fr/images/SessionEditionVideoButton.png": "7e53b51760628952139b6379e0895090",
"assets/assets/help/fr/images/SessionEditionDatePicker.png": "cc9cae426702e79ee588ffae64007e92",
"assets/assets/help/fr/images/SessionEditionAnimationToggleButton.png": "e1baee1b974832c979fc5f02bc4a63c2",
"assets/assets/help/fr/images/SessionEditionDeletePropositionButton.png": "e2e01c33950c4b1c87708a72a6898a08",
"assets/assets/help/fr/images/SessionExplorationEditCurveSessionButton.png": "1d4e21b6975ef039bd21b27ede13b0ae",
"assets/assets/help/fr/images/SessionExplorationAdvancedFilterButton.png": "00e6ffe8853db16f2b8d4751dee85fef",
"assets/assets/help/fr/images/SessionSaveOrShareButton.png": "0d1719562428c4a7eaf0e2daad490280",
"assets/assets/help/fr/images/SessionEditionSpecificInstructionIcon.png": "c3466516db81096a4d076be522cc9ef3",
"assets/assets/help/fr/images/image_license.png": "c9827008353d6e36ffeecbba8f334fb4",
"assets/assets/help/fr/images/SessionEditionLoopButton.png": "5866a44529b0a43415679dee0da6c0b7",
"assets/assets/help/fr/images/PropositionEditionWidget.png": "be1dc11ea65b451907cfd10d8fc862ab",
"assets/assets/help/fr/images/SessionEditionPrintButton.png": "6c5029caf541fe39bea5930db7182f6c",
"assets/assets/help/fr/images/MainMenu.png": "167f47b6ef24e5c7a1ab6f8066e199e3",
"assets/assets/help/fr/images/SessionExplorationHorizontalSessionNavigationButton.png": "c7414764e6f371f9fffbced684e070dc",
"assets/assets/help/fr/images/SessionExplorationPrintSessionButton.png": "fdcdc3de25d794f3b067f45e482dc895",
"assets/assets/help/fr/images/SessionAnimation.png": "396b2c928e20fae0437c3b8ec39476b5",
"assets/assets/help/fr/images/SessionLine.png": "16f1d0e4d56882fe2e0692ff2d44e382",
"assets/assets/help/es/troubleshooting.md": "c66e2f17603d399ecf8391708792f246",
"assets/assets/help/es/gettingstarted.md": "bdabb285632f30f5d7dbbd0e5cacba7f",
"assets/assets/help/es/license.md": "42254d219a5e4ee3fd0ac29e2e0f9d88",
"assets/assets/help/es/features.md": "546183ff9a1a27b2ddddde21a736966a",
"assets/assets/help/es/images/SessionExplorationAnimateSessionButton.png": "75d2bf61f735d3aa92e77f2b8e27e0a8",
"assets/assets/help/es/images/SessionEditionMusicBeeingPlayed.png": "2dbe702276c25d9505c31e90a85b87b9",
"assets/assets/help/es/images/SessionEditionEditThemeButton.png": "e9b76ac4b7cd7ed4f572370567e07c36",
"assets/assets/help/es/images/RefineMusic.png": "5219bf6d488e93f0d96669eab3f8e3cb",
"assets/assets/help/es/images/PropositionEditionExplorationButton.png": "7c020d5616bf034d97a4fdd339acc5f6",
"assets/assets/help/es/images/SessionEditionOnCurveDeleteButton.png": "e2e01c33950c4b1c87708a72a6898a08",
"assets/assets/help/es/images/SessionEditionAnotateButton.png": "9808275bf84817e221ad3323b5402ed5",
"assets/assets/help/es/images/SessionEditionOnCurveRedistributeButton.png": "3e2edbe3e13f49878ebca8a871a4a42e",
"assets/assets/help/es/images/SessionEditionCatalogInstructionsButton.png": "f8795601aba8783b737e9428f148df8d",
"assets/assets/help/es/images/SessionEditionEditPropositionButton.png": "753ea87d8ec91a9381180f4176ccbb32",
"assets/assets/help/es/images/SessionExplorationTopButtonPanel.png": "c4d56356198a8d853998a203fb679a10",
"assets/assets/help/es/images/SessionEditionFadeButton.png": "5ac8cbaf1bafc35d401fc829d4162bec",
"assets/assets/help/es/images/SessionEditionExitButton.png": "ce55431a1f96b871bc510b9b16c883e2",
"assets/assets/help/es/images/SessionExplorationDuplicateSessionButton.png": "9d1c189d724d4df831a1203d10167433",
"assets/assets/help/es/images/SessionExplorationCreateSessionButton.png": "f9f998618bbafdce828a4d064f983df9",
"assets/assets/help/es/images/SessionEditionDragAndDropButton.png": "e1fc1230931bc57fdd793c72cb7f25fe",
"assets/assets/help/es/images/SessionExplorationDeleteSessionButton.png": "e2e01c33950c4b1c87708a72a6898a08",
"assets/assets/help/es/images/PropositionEditionAutocompletion.png": "e5ce5986a659743c56544c4b45709026",
"assets/assets/help/es/images/CatalogMusicButton.png": "a37321c45f00b9f8dacfec48495e6faf",
"assets/assets/help/es/images/PauseButton.png": "28ba9529c609c73e82863f329f694002",
"assets/assets/help/es/images/SessionEditionInsctructionEditionArea.png": "124c1841adf0a67af2332aa50f1f98f4",
"assets/assets/help/es/images/SessionEdition.png": "a56aa5e53cc4e27f707e992ca1c8d31c",
"assets/assets/help/es/images/PlayButton.png": "75d2bf61f735d3aa92e77f2b8e27e0a8",
"assets/assets/help/es/images/SessionEditionTitleEditor.png": "5f956e0cb5d601690df1760bcce9ef66",
"assets/assets/help/es/images/SessionExplorationExportToCSVButton.png": "62482d59bdbed6fb9503d08bf64ba2fb",
"assets/assets/help/es/images/CatalogExerciseButton.png": "7113fc8cba9ba7487e0a2abbc6293d10",
"assets/assets/help/es/images/SessionExplorationLoadSessionButton.png": "4742b62747dee4355813aae2ccd52a2d",
"assets/assets/help/es/images/PropositionEditionInstructions.png": "bb4885d416129d46eebd375f12400e41",
"assets/assets/help/es/images/SessionSaveOrShareDialog.png": "0addc3718c4dd84f9bc7de7f295e20bb",
"assets/assets/help/es/images/PropositionEditionRefineButton.png": "625769eca28347558ee98b4967a82cf8",
"assets/assets/help/es/images/SessionEditionOnCurveKeyButton.png": "6b28a6ca6e81af45aa6b0e972b81b340",
"assets/assets/help/es/images/SessionEditionShareSessionButton.png": "03b18105cc2264f01acda54e7b3ba7fa",
"assets/assets/help/es/images/SessionEditionOnCurve.png": "b9255f436f6a06cf840a05af46e8f923",
"assets/assets/help/es/images/SessionEditionAddPropositionButton.png": "a645d8866f364e8820dedd9b159db8e5",
"assets/assets/help/es/images/SessionExplorationEditSessionButton.png": "f63f75566f752fb50b6d0e268035a4c6",
"assets/assets/help/es/images/SessionEditionVideoButton.png": "7e53b51760628952139b6379e0895090",
"assets/assets/help/es/images/SessionEditionDatePicker.png": "81fd45c43fae8769383396c6952406bf",
"assets/assets/help/es/images/SessionEditionAnimationToggleButton.png": "e1baee1b974832c979fc5f02bc4a63c2",
"assets/assets/help/es/images/SessionEditionDeletePropositionButton.png": "e2e01c33950c4b1c87708a72a6898a08",
"assets/assets/help/es/images/SessionExplorationEditCurveSessionButton.png": "1d4e21b6975ef039bd21b27ede13b0ae",
"assets/assets/help/es/images/SessionExplorationAdvancedFilterButton.png": "00e6ffe8853db16f2b8d4751dee85fef",
"assets/assets/help/es/images/SessionSaveOrShareButton.png": "0d1719562428c4a7eaf0e2daad490280",
"assets/assets/help/es/images/SessionEditionSpecificInstructionIcon.png": "c3466516db81096a4d076be522cc9ef3",
"assets/assets/help/es/images/image_license.png": "37e2f399c6eb484121e08fdeb2783fd3",
"assets/assets/help/es/images/SessionEditionLoopButton.png": "5866a44529b0a43415679dee0da6c0b7",
"assets/assets/help/es/images/PropositionEditionWidget.png": "4a136ccc41b3f9f4df167ee83c9614ee",
"assets/assets/help/es/images/SessionEditionPrintButton.png": "6c5029caf541fe39bea5930db7182f6c",
"assets/assets/help/es/images/MainMenu.png": "167f47b6ef24e5c7a1ab6f8066e199e3",
"assets/assets/help/es/images/SessionExplorationHorizontalSessionNavigationButton.png": "c7414764e6f371f9fffbced684e070dc",
"assets/assets/help/es/images/SessionExplorationPrintSessionButton.png": "fdcdc3de25d794f3b067f45e482dc895",
"assets/assets/help/es/images/SessionAnimation.png": "da59de157f4bd3ffbe00488151ae0c84",
"assets/assets/help/es/images/SessionLine.png": "9c5f5bab786fca7d8997e5eeca1b344f",
"assets/assets/help/pt/troubleshooting.md": "acdad9251b452d29a0375bf52541ee35",
"assets/assets/help/pt/gettingstarted.md": "2cf6e4ea6d63d7cd45a03597059046c4",
"assets/assets/help/pt/license.md": "412c3f0d792d79b09873f9d1ad1dae74",
"assets/assets/help/pt/features.md": "98818efbc8128ef5566b8688c4ec41c1",
"assets/assets/help/pt/images/SessionExplorationAnimateSessionButton.png": "75d2bf61f735d3aa92e77f2b8e27e0a8",
"assets/assets/help/pt/images/SessionEditionMusicBeeingPlayed.png": "2dbe702276c25d9505c31e90a85b87b9",
"assets/assets/help/pt/images/SessionEditionEditThemeButton.png": "e9b76ac4b7cd7ed4f572370567e07c36",
"assets/assets/help/pt/images/RefineMusic.png": "9e6a706c5a0737bb0e96bc1d0098a737",
"assets/assets/help/pt/images/PropositionEditionExplorationButton.png": "7c020d5616bf034d97a4fdd339acc5f6",
"assets/assets/help/pt/images/SessionEditionOnCurveDeleteButton.png": "e2e01c33950c4b1c87708a72a6898a08",
"assets/assets/help/pt/images/SessionEditionAnotateButton.png": "9808275bf84817e221ad3323b5402ed5",
"assets/assets/help/pt/images/SessionEditionOnCurveRedistributeButton.png": "3e2edbe3e13f49878ebca8a871a4a42e",
"assets/assets/help/pt/images/SessionEditionCatalogInstructionsButton.png": "f8795601aba8783b737e9428f148df8d",
"assets/assets/help/pt/images/SessionEditionEditPropositionButton.png": "753ea87d8ec91a9381180f4176ccbb32",
"assets/assets/help/pt/images/SessionExplorationTopButtonPanel.png": "c4d56356198a8d853998a203fb679a10",
"assets/assets/help/pt/images/SessionEditionFadeButton.png": "5ac8cbaf1bafc35d401fc829d4162bec",
"assets/assets/help/pt/images/SessionEditionExitButton.png": "ce55431a1f96b871bc510b9b16c883e2",
"assets/assets/help/pt/images/SessionExplorationDuplicateSessionButton.png": "9d1c189d724d4df831a1203d10167433",
"assets/assets/help/pt/images/SessionExplorationCreateSessionButton.png": "f9f998618bbafdce828a4d064f983df9",
"assets/assets/help/pt/images/SessionEditionDragAndDropButton.png": "e1fc1230931bc57fdd793c72cb7f25fe",
"assets/assets/help/pt/images/SessionExplorationDeleteSessionButton.png": "e2e01c33950c4b1c87708a72a6898a08",
"assets/assets/help/pt/images/PropositionEditionAutocompletion.png": "52b6e76496c79b8bba0aec13a524a5ba",
"assets/assets/help/pt/images/CatalogMusicButton.png": "a37321c45f00b9f8dacfec48495e6faf",
"assets/assets/help/pt/images/PauseButton.png": "28ba9529c609c73e82863f329f694002",
"assets/assets/help/pt/images/SessionEditionInsctructionEditionArea.png": "10df53cb4f25f4d17141e6c112759c80",
"assets/assets/help/pt/images/SessionEdition.png": "091c082ba325d5c0f6e437c8d7d1e48f",
"assets/assets/help/pt/images/PlayButton.png": "75d2bf61f735d3aa92e77f2b8e27e0a8",
"assets/assets/help/pt/images/SessionEditionTitleEditor.png": "ff54322dd3b1d33228184c7e50f6a4d7",
"assets/assets/help/pt/images/SessionExplorationExportToCSVButton.png": "62482d59bdbed6fb9503d08bf64ba2fb",
"assets/assets/help/pt/images/CatalogExerciseButton.png": "423f642a00dc10a305478591d15b1282",
"assets/assets/help/pt/images/SessionExplorationLoadSessionButton.png": "4742b62747dee4355813aae2ccd52a2d",
"assets/assets/help/pt/images/PropositionEditionInstructions.png": "fc458613aa2b5d6c600dd4881beaa3e2",
"assets/assets/help/pt/images/SessionSaveOrShareDialog.png": "c20df1f614a17f958c1e16386d3e07c0",
"assets/assets/help/pt/images/PropositionEditionRefineButton.png": "625769eca28347558ee98b4967a82cf8",
"assets/assets/help/pt/images/SessionEditionOnCurveKeyButton.png": "6b28a6ca6e81af45aa6b0e972b81b340",
"assets/assets/help/pt/images/SessionEditionShareSessionButton.png": "03b18105cc2264f01acda54e7b3ba7fa",
"assets/assets/help/pt/images/SessionEditionOnCurve.png": "765e0e635449306410b293476ccb6c7a",
"assets/assets/help/pt/images/SessionEditionAddPropositionButton.png": "a645d8866f364e8820dedd9b159db8e5",
"assets/assets/help/pt/images/SessionExplorationEditSessionButton.png": "f63f75566f752fb50b6d0e268035a4c6",
"assets/assets/help/pt/images/SessionEditionVideoButton.png": "7e53b51760628952139b6379e0895090",
"assets/assets/help/pt/images/SessionEditionDatePicker.png": "4a31e528966b1ccd8d59aacb7f3897ff",
"assets/assets/help/pt/images/SessionEditionAnimationToggleButton.png": "e1baee1b974832c979fc5f02bc4a63c2",
"assets/assets/help/pt/images/SessionEditionDeletePropositionButton.png": "e2e01c33950c4b1c87708a72a6898a08",
"assets/assets/help/pt/images/SessionExplorationEditCurveSessionButton.png": "1d4e21b6975ef039bd21b27ede13b0ae",
"assets/assets/help/pt/images/SessionExplorationAdvancedFilterButton.png": "00e6ffe8853db16f2b8d4751dee85fef",
"assets/assets/help/pt/images/SessionSaveOrShareButton.png": "0d1719562428c4a7eaf0e2daad490280",
"assets/assets/help/pt/images/SessionEditionSpecificInstructionIcon.png": "c3466516db81096a4d076be522cc9ef3",
"assets/assets/help/pt/images/image_license.png": "d32c589f3e2946108fec596446417c01",
"assets/assets/help/pt/images/SessionEditionLoopButton.png": "5866a44529b0a43415679dee0da6c0b7",
"assets/assets/help/pt/images/PropositionEditionWidget.png": "a9fe36f77de5e36adca57f1d9730b029",
"assets/assets/help/pt/images/SessionEditionPrintButton.png": "6c5029caf541fe39bea5930db7182f6c",
"assets/assets/help/pt/images/MainMenu.png": "167f47b6ef24e5c7a1ab6f8066e199e3",
"assets/assets/help/pt/images/SessionExplorationHorizontalSessionNavigationButton.png": "c7414764e6f371f9fffbced684e070dc",
"assets/assets/help/pt/images/SessionExplorationPrintSessionButton.png": "fdcdc3de25d794f3b067f45e482dc895",
"assets/assets/help/pt/images/SessionAnimation.png": "9c1f14836901fa33999e319bc2266fb1",
"assets/assets/help/pt/images/SessionLine.png": "ea0f5ce1e34a2537eff13c8c890be396",
"assets/assets/danse_icon.png": "2a102bd1e4a47de910497ceb623491e0",
"assets/fonts/MaterialIcons-Regular.otf": "4c0719fc34a65949fe9eba63461947d7",
"assets/NOTICES": "e6c8aeceba33f42a6bc4bc0b968f55eb",
"assets/packages/material_design_icons_flutter/lib/fonts/materialdesignicons-webfont.ttf": "3759b2f7a51e83c64a58cfe07b96a8ee",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/packages/iconsax_flutter/fonts/FlutterIconsax.ttf": "6ebc7bc5b74956596611c6774d8beb5b",
"assets/packages/media_kit/assets/web/hls1.4.10.js": "bd60e2701c42b6bf2c339dcf5d495865",
"assets/FontManifest.json": "01e1c35e042a90e3efad4488f9be97ce",
"assets/AssetManifest.bin": "13ea16bb333f714adad2c6293500c8bc",
"assets/AssetManifest.json": "9be203a6bd0f5d2e9fcd6d763e2c18b6",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"favicon.png": "d0239789fe665a20ba5516876aa6dd6d",
"flutter_bootstrap.js": "45dbd5ad84e7edbe7fcfa13e98193fb7",
"version.json": "d9327004768d3e7ac7c66932d2b26843",
"main.dart.js": "ca19f01dcf6620c8950a865ccb48ad28"};
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
