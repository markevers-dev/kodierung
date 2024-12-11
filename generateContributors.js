const fetch = require("node-fetch");
const fs = require("fs");

const repoOwner = "markevers-dev";
const repoName = "kodierung";

async function getContributors() {
  const response = await fetch(
    `https://api.github.com/repos/${repoOwner}/${repoName}/contributors`
  );

  if (!response.ok) {
    throw new Error(`GitHub API returned an error: ${response.statusText}`);
  }

  const contributors = await response.json();
  return contributors.map(
    (contributor) => `![${contributor.login}](${contributor.avatar_url}&s=64) [@${contributor.login}](${contributor.html_url})`
  );
}

async function updateReadme() {
  try {
    const contributorsMarkdown = await getContributors();
    const readmeContent = fs.readFileSync("README.md", "utf8");
    const updatedReadme = readmeContent.replace(
      /<!-- CONTRIBUTORS_START -->[\s\S]*<!-- CONTRIBUTORS_END -->/,
      `<!-- CONTRIBUTORS_START -->\n${contributorsMarkdown.join("\n")}\n<!-- CONTRIBUTORS_END -->`
    );
    fs.writeFileSync("README.md", updatedReadme, "utf8");
    console.log("README updated with contributors!");
  } catch (error) {
    console.error("Error fetching contributors:", error);
  }
}

updateReadme();
