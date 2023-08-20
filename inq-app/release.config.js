module.exports = {
    branches: ["main", "feature/workflow"],
    repositoryUrl: "https://github.com/ThaiQui/Github-Action-Node",
    plugins: [
        "@semantic-release/commit-analyzer",
        "@semantic-release/release-notes-generator",
        // ["@semantic-release/github", {
        //     assets: [
        //         {path: "build.zip", label: "Build"},
        //         {path: "coverage.zip", label: "Coverage"}
        //     ]
        // }],
    ]
}
