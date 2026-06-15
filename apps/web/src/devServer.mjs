import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "../public");
const port = 5174;

const contentTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
};

async function fileExists(filePath) {
  try {
    await stat(filePath);
    return true;
  } catch {
    return false;
  }
}

async function checkFoundation() {
  const requiredFiles = [
    "index.html",
    "styles.css",
    "app.js",
  ].map((fileName) => path.join(rootDir, fileName));

  const missingFiles = [];

  for (const filePath of requiredFiles) {
    if (!(await fileExists(filePath))) {
      missingFiles.push(path.relative(process.cwd(), filePath));
    }
  }

  if (missingFiles.length > 0) {
    console.error("Missing required cockpit shell files:");
    for (const missingFile of missingFiles) {
      console.error(`- ${missingFile}`);
    }
    process.exitCode = 1;
    return false;
  }

  console.log("Frontend foundation files are present.");
  return true;
}

async function getAsset(filePath) {
  const extension = path.extname(filePath).toLowerCase();
  const contentType = contentTypes[extension] ?? "application/octet-stream";

  try {
    const body = await readFile(filePath);
    return { body, contentType, statusCode: 200 };
  } catch {
    return null;
  }
}

async function handler(request, response) {
  const requestUrl = new URL(request.url, "http://localhost");
  const requestedPath = requestUrl.pathname === "/" ? "/index.html" : requestUrl.pathname;
  const assetPath = path.normalize(path.join(rootDir, requestedPath));

  if (!assetPath.startsWith(rootDir)) {
    response.writeHead(403, { "content-type": "text/plain; charset=utf-8" });
    response.end("Forbidden");
    return;
  }

  const asset = await getAsset(assetPath);

  if (!asset) {
    response.writeHead(404, { "content-type": "text/plain; charset=utf-8" });
    response.end("Not found");
    return;
  }

  response.writeHead(asset.statusCode, { "content-type": asset.contentType });
  response.end(asset.body);
}

async function main() {
  if (process.argv.includes("--check")) {
    const ok = await checkFoundation();
    if (!ok) {
      process.exitCode = 1;
    }
    return;
  }

  const server = createServer((request, response) => {
    void handler(request, response);
  });

  server.listen(port, () => {
    console.log(`Health Checker cockpit shell running at http://localhost:${port}`);
  });
}

void main();
