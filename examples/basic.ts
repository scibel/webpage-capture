/* tslint:disable:no-console */

import * as path from "path";
import { WebpageCapture } from "../lib";

const capture = new WebpageCapture({
  outputDir: path.resolve(__dirname, "./output"),
});

(async () => {
  try {
    await capture.capture("https://github.com/b4dnewz");
  } catch (e) {
    console.error(e);
  } finally {
    await capture.close();
  }
})();
