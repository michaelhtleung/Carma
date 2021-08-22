import React from "react";
import * as tf from "@tensorflow/tfjs";
import { loadGraphModel } from "@tensorflow/tfjs-converter";

const MODEL_URL = "https://storage.googleapis.com/carma-models/model-export/icn/tf_js-half_size_20210821095401-2021-08-22T03%3A26%3A39.494359Z/model.json";
const PREPROCESS_DIVISOR = tf.scalar(255 / 2);

 export async function ModelUtil(screenshot_dom_id) {
    let element = document.getElementById(screenshot_dom_id);
    const model = await loadGraphModel(MODEL_URL);
    let input = tf.browser.fromPixels(element);
    input = input.expandDims(0);
    input = tf.div(
        tf.sub(input.asType('float32'), PREPROCESS_DIVISOR),
        PREPROCESS_DIVISOR);
    console.log("input:")
    console.log(input.dataSync());
    const output = model.execute(input);
    console.log("output:")
    console.log(output.dataSync());
}