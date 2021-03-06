"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const free_swagger_client_1 = require("free-swagger-client");
const rc_1 = require("./rc");
const os_1 = require("os");
const path_1 = __importDefault(require("path"));
exports.DEFAULT_CUSTOM_IMPORT_CODE_TS = `import axios,{ AxiosResponse } from "axios";`;
exports.DEFAULT_CUSTOM_IMPORT_CODE_JS = `import axios from "axios";`;
exports.DEFAULT_HEAD_CODE_TS = `// generated by free-swagger ${os_1.EOL}// @ts-nocheck ${os_1.EOL}/* eslint-disable */${os_1.EOL}`;
exports.DEFAULT_HEAD_CODE_JS = `// generated by free-swagger ${os_1.EOL}/* eslint-disable */${os_1.EOL}`;
const getDefaultConfig = (config) => ({
    root: path_1.default.resolve(process.cwd(), "src/api"),
    cookie: "",
    customImportCode: config.lang === "ts"
        ? exports.DEFAULT_CUSTOM_IMPORT_CODE_TS
        : exports.DEFAULT_CUSTOM_IMPORT_CODE_JS,
    lang: "js",
    templateFunction: eval(free_swagger_client_1.jsTemplate),
    chooseAll: false
});
exports.mergeDefaultConfig = async (config) => {
    let mergedConfig = {};
    if (typeof config === "string") {
        mergedConfig.source = config;
        rc_1.rc.recordHash(mergedConfig.source);
    }
    else {
        mergedConfig = config;
    }
    let templateFunction;
    if (mergedConfig.templateFunction) {
        templateFunction = mergedConfig.templateFunction;
    }
    else if (!mergedConfig.lang) {
        templateFunction = eval(free_swagger_client_1.jsTemplate);
    }
    else {
        templateFunction =
            mergedConfig.lang === "ts" ? eval(free_swagger_client_1.tsTemplate) : eval(free_swagger_client_1.jsTemplate);
    }
    return {
        ...getDefaultConfig(mergedConfig),
        templateFunction,
        ...mergedConfig
    };
};
