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
"assets/AssetManifest.bin.json": "7d5118ec7329713554e79bb73754ddd8",
"assets/assets/english.png": "015a5fdbb9c32f341aac4d2084c462a0",
"assets/assets/privacy/privacy_policy_fr.md": "d8632589d8bc9e1f014fe8ee70d5bfe0",
"assets/assets/privacy/privacy_policy_es.md": "ac0277c12dc995316b785da7bb73b288",
"assets/assets/privacy/privacy_policy_en.md": "c3862f6f0659ab1333d18c77d42d4d7c",
"assets/assets/privacy/privacy_policy_pt.md": "4c39f903f67fa210bda354eacd476bc9",
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
"assets/assets/json/catalog/EBGP-PrototypeDataModel.json": "e5a82abf32a6ea31b7c45729bd1b9aff",
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
"assets/assets/json/catalog/EBGP-PrototypeDataModel.vab": "dc76da4300788afec2213aa8f7647b23",
"assets/assets/json/catalog/EBBMED-PrototypeDataModel.vab": "f7e648a6a3300696eef7494084432be3",
"assets/assets/json/catalog/ERTMED-PrototypeDataModel-FLAC2025.json": "225492f66352eae5e6bf57afe9af37ea",
"assets/assets/json/catalog/ECBTO-PrototypeDataModel.vab": "2977fea9ef4062b1a5e238a290592cba",
"assets/assets/json/catalog/MEDMETHODO-PrototypeDataModel.json": "d47936b13ae686d123b61d83069e5041",
"assets/assets/json/catalog/ERTMED-PrototypeDataModel-Windows.vab": "160671628809aa2e21958a2037d566fd",
"assets/assets/json/catalog/EBBA2024-PrototypeDataModel.json": "1292502765aa5bf877c79cc59b87a033",
"assets/assets/json/catalog/EBBMED-PrototypeDataModel.json": "9147a7f08c71c05a143f1c3d678d1785",
"assets/assets/json/catalog/MEDMETHODO-PrototypeDataModel.vab": "7eaf81eb9c7f5426493eeaaa9d167274",
"assets/assets/json/catalog/ERTMED-PrototypeDataModel.vab": "e9690d7d289f74ab80600a67b9149e93",
"assets/assets/json/catalog/CIMEB2012-EN-PrototypeDataModel.vab": "fea2b9a0dbfe8582be66cc55a9184f90",
"assets/assets/json/catalog/ECBTO-PrototypeDataModel.json": "5e8bb97766ab6b0378f275397165c17c",
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
"assets/assets/json/ChangeLog.json": "c6174bc8c9381b54961221cc2e0f18b4",
"assets/assets/logo.png": "aa97a13df4ef89389d36d2416475c688",
"assets/assets/logo.ico": "d78d77f0629f4bbb936daa5de178b2d6",
"assets/assets/spanish.png": "f54a4d62d5f0b70d478170d636ca6f3d",
"assets/assets/cfg/hash.txt": "4c0f0fc7038666f59e5c240e50d4e5cd",
"assets/assets/cfg/app_settings.json": "d03520a5ad6d0ec2225f6f98b9761118",
"assets/assets/help/en/troubleshooting.md": "ca1b88cfd4b09e2e83607789bb36a294",
"assets/assets/help/en/gettingstarted.md": "8e1f5a3c0b83328b6deb45dfe8b155e9",
"assets/assets/help/en/license.md": "447cb74f2b8ad9c744d8ee23a07ef37f",
"assets/assets/help/en/features.md": "3911e41778959524e881bf93976b3173",
"assets/assets/help/en/images/SessionPrintIcons.png": "bc515be7a095ba86010b74138fe19a0f",
"assets/assets/help/en/images/SessionExplorationAnimateSessionButton.png": "75d2bf61f735d3aa92e77f2b8e27e0a8",
"assets/assets/help/en/images/CatalogExplorationByExercise.png": "05dcc38e4c2bacbd95d75cba2d823699",
"assets/assets/help/en/images/CatalogExplorationByMusic.png": "bc880b3dbb9c720f40d20642c4303931",
"assets/assets/help/en/images/SessionEditionMusicBeeingPlayed.png": "2dbe702276c25d9505c31e90a85b87b9",
"assets/assets/help/en/images/SessionEditionEditThemeButton.png": "e9b76ac4b7cd7ed4f572370567e07c36",
"assets/assets/help/en/images/RefineMusic.png": "f3c06bdc5317b0969c5afa872ff9048c",
"assets/assets/help/en/images/PropositionEditionExplorationButton.png": "7c020d5616bf034d97a4fdd339acc5f6",
"assets/assets/help/en/images/CatalogSearch.png": "b135c72433761f44454e40e53bcfc44e",
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
"assets/assets/help/en/images/SessionEdition.png": "f07cb1d87f1c6f686e09f67af6ddec8c",
"assets/assets/help/en/images/PlayButton.png": "75d2bf61f735d3aa92e77f2b8e27e0a8",
"assets/assets/help/en/images/SessionPrint.png": "477cdc00c1a75421d938c425810ece69",
"assets/assets/help/en/images/SessionEditionTitleEditor.png": "ac8ef835490b0476010e75792159b43f",
"assets/assets/help/en/images/SessionExplorationExportToCSVButton.png": "62482d59bdbed6fb9503d08bf64ba2fb",
"assets/assets/help/en/images/AnimateEditEditOnCurve.png": "dca74a26eae74fdff2bb3eec1ae84971",
"assets/assets/help/en/images/CatalogExerciseButton.png": "68a8f99142a69b62d517f2138772cd9b",
"assets/assets/help/en/images/SessionExplorationLoadSessionButton.png": "4742b62747dee4355813aae2ccd52a2d",
"assets/assets/help/en/images/SessionImportConflictResolution.png": "bebc63ddd3da6ec99a10765fffeddedd",
"assets/assets/help/en/images/PropositionEditionInstructions.png": "461fb66fcef6e8c8e1a5a135530e5fdf",
"assets/assets/help/en/images/SessionSaveOrShareDialog.png": "5e0958b5feb244c481af2b123d9254c9",
"assets/assets/help/en/images/CreateNewSession.png": "2a8e47d0068a0965aebc4a33564ef40c",
"assets/assets/help/en/images/PropositionEditionRefineButton.png": "625769eca28347558ee98b4967a82cf8",
"assets/assets/help/en/images/SessionEditionOnCurveKeyButton.png": "6b28a6ca6e81af45aa6b0e972b81b340",
"assets/assets/help/en/images/SessionEditionShareSessionButton.png": "03b18105cc2264f01acda54e7b3ba7fa",
"assets/assets/help/en/images/SessionView.png": "83aff026bbbe1baaa6718e759c12b35c",
"assets/assets/help/en/images/SessionEditionOnCurve.png": "655ff8175061195b1a24bf19b46049e4",
"assets/assets/help/en/images/SessionEditionAddPropositionButton.png": "a645d8866f364e8820dedd9b159db8e5",
"assets/assets/help/en/images/SessionExplorationEditSessionButton.png": "f63f75566f752fb50b6d0e268035a4c6",
"assets/assets/help/en/images/SessionInformation.png": "14f575e798db81d4494530f2bcced4b4",
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
"assets/assets/help/en/images/SessionAnimation.png": "99dbe492075cbde23e9459e533cadc79",
"assets/assets/help/en/images/SessionLine.png": "95fb55aee92d5b696e9c984841e13bc5",
"assets/assets/help/fr/troubleshooting.md": "ced78780c9a17d5a019de0bd73e907aa",
"assets/assets/help/fr/gettingstarted.md": "ed1f349f0df7051f957c08b38c10548d",
"assets/assets/help/fr/license.md": "b33296109e2e7e5cf4c5e2e22abf9008",
"assets/assets/help/fr/features.md": "9c9b866e358820e991cf1619d5e8dfb0",
"assets/assets/help/fr/images/SessionPrintIcons.png": "bc515be7a095ba86010b74138fe19a0f",
"assets/assets/help/fr/images/SessionExplorationAnimateSessionButton.png": "75d2bf61f735d3aa92e77f2b8e27e0a8",
"assets/assets/help/fr/images/CatalogExplorationByExercise.png": "f8e5f6c1f16aa08a16ac9a58bc4a1c9a",
"assets/assets/help/fr/images/CatalogExplorationByMusic.png": "59c5ec5f70d5e19f429bb7c7301c1844",
"assets/assets/help/fr/images/SessionEditionMusicBeeingPlayed.png": "2dbe702276c25d9505c31e90a85b87b9",
"assets/assets/help/fr/images/SessionEditionEditThemeButton.png": "e9b76ac4b7cd7ed4f572370567e07c36",
"assets/assets/help/fr/images/RefineMusic.png": "f97a385ae77dfad2426a3a039862c97d",
"assets/assets/help/fr/images/PropositionEditionExplorationButton.png": "7c020d5616bf034d97a4fdd339acc5f6",
"assets/assets/help/fr/images/CatalogSearch.png": "a00f0c295f3c1f8d4b32ffc9180a42f5",
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
"assets/assets/help/fr/images/SessionEdition.png": "398a562661ad6a0acd0819bf031e47f0",
"assets/assets/help/fr/images/PlayButton.png": "75d2bf61f735d3aa92e77f2b8e27e0a8",
"assets/assets/help/fr/images/SessionPrint.png": "2e7c6d369a24b99bcb0c693a024399a6",
"assets/assets/help/fr/images/SessionEditionTitleEditor.png": "1a70401b1088a4674c67745394bdafab",
"assets/assets/help/fr/images/SessionExplorationExportToCSVButton.png": "62482d59bdbed6fb9503d08bf64ba2fb",
"assets/assets/help/fr/images/AnimateEditEditOnCurve.png": "dca74a26eae74fdff2bb3eec1ae84971",
"assets/assets/help/fr/images/CatalogExerciseButton.png": "db9261e42fa7b10a0a514783a2b29784",
"assets/assets/help/fr/images/SessionExplorationLoadSessionButton.png": "4742b62747dee4355813aae2ccd52a2d",
"assets/assets/help/fr/images/SessionImportConflictResolution.png": "2d2c80abb11b2ee7d2edf4d1fb3b0ae4",
"assets/assets/help/fr/images/PropositionEditionInstructions.png": "561006b0c9cef907806949f3d12453dd",
"assets/assets/help/fr/images/SessionSaveOrShareDialog.png": "fdcf8dcd03091bc13299b61a6a304bc9",
"assets/assets/help/fr/images/CreateNewSession.png": "dac559779f90cffd67bfefca6a09b14a",
"assets/assets/help/fr/images/PropositionEditionRefineButton.png": "625769eca28347558ee98b4967a82cf8",
"assets/assets/help/fr/images/SessionEditionOnCurveKeyButton.png": "6b28a6ca6e81af45aa6b0e972b81b340",
"assets/assets/help/fr/images/SessionEditionShareSessionButton.png": "03b18105cc2264f01acda54e7b3ba7fa",
"assets/assets/help/fr/images/SessionView.png": "fe71e120cd8a8daf41fd673c47872f64",
"assets/assets/help/fr/images/SessionEditionOnCurve.png": "4251518998e30d09f8ae893ee243aa81",
"assets/assets/help/fr/images/SessionEditionAddPropositionButton.png": "a645d8866f364e8820dedd9b159db8e5",
"assets/assets/help/fr/images/SessionExplorationEditSessionButton.png": "f63f75566f752fb50b6d0e268035a4c6",
"assets/assets/help/fr/images/SessionInformation.png": "98f85b62a117868a216e179d40915644",
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
"assets/assets/help/fr/images/SessionAnimation.png": "7e012308ffd54caf228c17f8c5d8f68d",
"assets/assets/help/fr/images/SessionLine.png": "16f1d0e4d56882fe2e0692ff2d44e382",
"assets/assets/help/es/troubleshooting.md": "c66e2f17603d399ecf8391708792f246",
"assets/assets/help/es/gettingstarted.md": "917715c872a46cdb79c7381228b2ea0d",
"assets/assets/help/es/license.md": "42254d219a5e4ee3fd0ac29e2e0f9d88",
"assets/assets/help/es/features.md": "dcdd381fedba3de56c1254b730a0e734",
"assets/assets/help/es/images/SessionPrintIcons.png": "bc515be7a095ba86010b74138fe19a0f",
"assets/assets/help/es/images/SessionExplorationAnimateSessionButton.png": "75d2bf61f735d3aa92e77f2b8e27e0a8",
"assets/assets/help/es/images/CatalogExplorationByExercise.png": "dbb1637731f558cebd395ca86c162c97",
"assets/assets/help/es/images/CatalogExplorationByMusic.png": "ddf652be78e9181905c22c28c31414d3",
"assets/assets/help/es/images/SessionEditionMusicBeeingPlayed.png": "2dbe702276c25d9505c31e90a85b87b9",
"assets/assets/help/es/images/SessionEditionEditThemeButton.png": "e9b76ac4b7cd7ed4f572370567e07c36",
"assets/assets/help/es/images/RefineMusic.png": "5219bf6d488e93f0d96669eab3f8e3cb",
"assets/assets/help/es/images/PropositionEditionExplorationButton.png": "7c020d5616bf034d97a4fdd339acc5f6",
"assets/assets/help/es/images/CatalogSearch.png": "d0fd2b4e939f3c5a48507f56a0ae11c3",
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
"assets/assets/help/es/images/SessionEdition.png": "c0f9bfbb13b464c6a6d4283fe5b26812",
"assets/assets/help/es/images/PlayButton.png": "75d2bf61f735d3aa92e77f2b8e27e0a8",
"assets/assets/help/es/images/SessionPrint.png": "abfba08962887f18dd19392c82713d85",
"assets/assets/help/es/images/SessionEditionTitleEditor.png": "5f956e0cb5d601690df1760bcce9ef66",
"assets/assets/help/es/images/SessionExplorationExportToCSVButton.png": "62482d59bdbed6fb9503d08bf64ba2fb",
"assets/assets/help/es/images/AnimateEditEditOnCurve.png": "dca74a26eae74fdff2bb3eec1ae84971",
"assets/assets/help/es/images/CatalogExerciseButton.png": "7113fc8cba9ba7487e0a2abbc6293d10",
"assets/assets/help/es/images/SessionExplorationLoadSessionButton.png": "4742b62747dee4355813aae2ccd52a2d",
"assets/assets/help/es/images/SessionImportConflictResolution.png": "99bf981cb321b3b0ec2a3d44d5f5c544",
"assets/assets/help/es/images/PropositionEditionInstructions.png": "bb4885d416129d46eebd375f12400e41",
"assets/assets/help/es/images/SessionSaveOrShareDialog.png": "0addc3718c4dd84f9bc7de7f295e20bb",
"assets/assets/help/es/images/CreateNewSession.png": "c1a4af38c2a883fa580b71235994fafa",
"assets/assets/help/es/images/PropositionEditionRefineButton.png": "625769eca28347558ee98b4967a82cf8",
"assets/assets/help/es/images/SessionEditionOnCurveKeyButton.png": "6b28a6ca6e81af45aa6b0e972b81b340",
"assets/assets/help/es/images/SessionEditionShareSessionButton.png": "03b18105cc2264f01acda54e7b3ba7fa",
"assets/assets/help/es/images/SessionView.png": "5b9662a668884e9a2d3a8b48249d0ea4",
"assets/assets/help/es/images/SessionEditionOnCurve.png": "aa77f59fa5c43f5c0711803d1bd3a514",
"assets/assets/help/es/images/SessionEditionAddPropositionButton.png": "a645d8866f364e8820dedd9b159db8e5",
"assets/assets/help/es/images/SessionExplorationEditSessionButton.png": "f63f75566f752fb50b6d0e268035a4c6",
"assets/assets/help/es/images/SessionInformation.png": "ecfd5854a17738310a54042868f16519",
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
"assets/assets/help/es/images/SessionAnimation.png": "464a2e0c137445d8d0168a120aa9bb38",
"assets/assets/help/es/images/SessionLine.png": "9c5f5bab786fca7d8997e5eeca1b344f",
"assets/assets/help/pt/troubleshooting.md": "acdad9251b452d29a0375bf52541ee35",
"assets/assets/help/pt/gettingstarted.md": "354f7a4b300e900edace6d12779819c6",
"assets/assets/help/pt/license.md": "412c3f0d792d79b09873f9d1ad1dae74",
"assets/assets/help/pt/features.md": "986a71671a9bc7abbfda5c9f8e487d46",
"assets/assets/help/pt/images/SessionPrintIcons.png": "bc515be7a095ba86010b74138fe19a0f",
"assets/assets/help/pt/images/SessionExplorationAnimateSessionButton.png": "75d2bf61f735d3aa92e77f2b8e27e0a8",
"assets/assets/help/pt/images/CatalogExplorationByExercise.png": "b259041395f3c9fc9efd4ed081d3ad9b",
"assets/assets/help/pt/images/CatalogExplorationByMusic.png": "165c033f3df9893603469038b30fc90d",
"assets/assets/help/pt/images/SessionEditionMusicBeeingPlayed.png": "2dbe702276c25d9505c31e90a85b87b9",
"assets/assets/help/pt/images/SessionEditionEditThemeButton.png": "e9b76ac4b7cd7ed4f572370567e07c36",
"assets/assets/help/pt/images/RefineMusic.png": "9e6a706c5a0737bb0e96bc1d0098a737",
"assets/assets/help/pt/images/PropositionEditionExplorationButton.png": "7c020d5616bf034d97a4fdd339acc5f6",
"assets/assets/help/pt/images/CatalogSearch.png": "f32f338d29d2caaba0398a04a0598a6a",
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
"assets/assets/help/pt/images/SessionEdition.png": "487f4fd752310e45ac5ce37ead95991d",
"assets/assets/help/pt/images/PlayButton.png": "75d2bf61f735d3aa92e77f2b8e27e0a8",
"assets/assets/help/pt/images/SessionPrint.png": "393c2cfca57ec8b284cc6fbe7499fcca",
"assets/assets/help/pt/images/SessionEditionTitleEditor.png": "ff54322dd3b1d33228184c7e50f6a4d7",
"assets/assets/help/pt/images/SessionExplorationExportToCSVButton.png": "62482d59bdbed6fb9503d08bf64ba2fb",
"assets/assets/help/pt/images/AnimateEditEditOnCurve.png": "dca74a26eae74fdff2bb3eec1ae84971",
"assets/assets/help/pt/images/CatalogExerciseButton.png": "423f642a00dc10a305478591d15b1282",
"assets/assets/help/pt/images/SessionExplorationLoadSessionButton.png": "4742b62747dee4355813aae2ccd52a2d",
"assets/assets/help/pt/images/SessionImportConflictResolution.png": "72e2af498f1e7446c9214c86d03c4ee4",
"assets/assets/help/pt/images/PropositionEditionInstructions.png": "fc458613aa2b5d6c600dd4881beaa3e2",
"assets/assets/help/pt/images/SessionSaveOrShareDialog.png": "c20df1f614a17f958c1e16386d3e07c0",
"assets/assets/help/pt/images/CreateNewSession.png": "296f5370ce3e8fc8305c62dc932dbaca",
"assets/assets/help/pt/images/PropositionEditionRefineButton.png": "625769eca28347558ee98b4967a82cf8",
"assets/assets/help/pt/images/SessionEditionOnCurveKeyButton.png": "6b28a6ca6e81af45aa6b0e972b81b340",
"assets/assets/help/pt/images/SessionEditionShareSessionButton.png": "03b18105cc2264f01acda54e7b3ba7fa",
"assets/assets/help/pt/images/SessionView.png": "3c2ff24dc81de07045bc4478e0a41f20",
"assets/assets/help/pt/images/SessionEditionOnCurve.png": "919ef63c93d1fb2841b8931898a6241f",
"assets/assets/help/pt/images/SessionEditionAddPropositionButton.png": "a645d8866f364e8820dedd9b159db8e5",
"assets/assets/help/pt/images/SessionExplorationEditSessionButton.png": "f63f75566f752fb50b6d0e268035a4c6",
"assets/assets/help/pt/images/SessionInformation.png": "4ab5bc365e4c5538424ffdf50aabeb0f",
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
"assets/assets/help/pt/images/SessionAnimation.png": "95ce46709e38aa0714d51aed87c83494",
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
"assets/AssetManifest.bin": "1d3eef060190b7ea9c2ab8528ae5efd4",
"assets/AssetManifest.json": "b74491e77687640dc5aea8f3e514c6f1",
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
"flutter_bootstrap.js": "0dfd07c4558834c154f8978c4e9e783d",
"version.json": "936b4d6ec195431d71169e18948d4c8e",
"main.dart.js": "9c40015422da0587c3ac7250404decba"};
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
