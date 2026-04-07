module.exports = function (api) {
    api.cache(true);

    const path = require("path");

    return {
        presets: ["babel-preset-expo"],
        plugins: [
            [
                "module-resolver",
                {
                    root: ["."],
                    alias: {
                        "@": path.resolve(__dirname, "../.."),
                        "@noblecalculator/calculators-core": path.resolve(__dirname, "../../packages/calculators-core/src"),
                        "@noblecalculator/shared-format": path.resolve(__dirname, "../../packages/shared-format/src"),
                    },
                },
            ],
        ],
    };
};