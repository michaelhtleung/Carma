import React from "react";
import * as tf from "@tensorflow/tfjs";
import { loadGraphModel } from "@tensorflow/tfjs-converter";

const MODEL_URL = "https://storage.googleapis.com/carma-models/model-export/icn/tf_js-half_size_20210821095401-2021-08-22T03%3A26%3A39.494359Z/model.json";

 export async function ModelUtil(screenshot) {
    const model = await loadGraphModel(MODEL_URL);
    const output = model.execute(tf.browser.fromPixels(screenshot));
    console.log(output);
}