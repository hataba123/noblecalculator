module.exports = function (api) {
    api.cache(true);

    return {
        presets: ["babel-preset-expo"],
        plugins: [
            [
                "module-resolver",
                {
                    root: ["."],
                    alias: {
                        "@": "../../",
                        "@noblecalculator/calculators-core": "../../packages/calculators-core/src",
                        "@noblecalculator/shared-format": "../../packages/shared-format/src",
                        react: "./node_modules/react",
                        "react-native": "./node_modules/react-native",
                        "react-native-gesture-handler": "./node_modules/react-native-gesture-handler",
                        "react-native-safe-area-context": "./node_modules/react-native-safe-area-context",
                        "react-native-screens": "./node_modules/react-native-screens",
                        "@react-navigation/native": "./node_modules/@react-navigation/native",
                        "@react-navigation/native-stack": "./node_modules/@react-navigation/native-stack",
                        "expo-linking": "./node_modules/expo-linking",
                        "expo-status-bar": "./node_modules/expo-status-bar",
                    },
                },
            ],
        ],
    };
};