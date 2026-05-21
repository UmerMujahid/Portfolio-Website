require("dotenv").config();
const fs = require("fs");
const https = require("https");

const TOKEN = process.env.REACT_APP_GITHUB_TOKEN;
const USERNAME = "UmerMujahid";

const fetchGraphQL = (query) => {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify({ query });
    const options = {
      hostname: "api.github.com",
      path: "/graphql",
      method: "POST",
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "User-Agent": "Node.js",
        "Content-Type": "application/json",
        "Content-Length": data.length,
      },
    };

    const req = https.request(options, (res) => {
      let body = "";
      res.on("data", (chunk) => (body += chunk));
      res.on("end", () => {
        try {
          resolve(JSON.parse(body));
        } catch (e) {
          reject(e);
        }
      });
    });

    req.on("error", reject);
    req.write(data);
    req.end();
  });
};

const query = `
  query {
    user(login: "${USERNAME}") {
      pinnedItems(first: 6, types: REPOSITORY) {
        totalCount
        nodes {
          ... on Repository {
            id
            name
            createdAt
            url
            description
            isFork
            languages(first: 10) {
              nodes {
                name
              }
            }
          }
        }
      }
      repositories(first: 100, privacy: PUBLIC, ownerAffiliations: OWNER, orderBy: {field: PUSHED_AT, direction: DESC}) {
        totalCount
        nodes {
          id
          name
          createdAt
          url
          description
          isFork
          languages(first: 10) {
            nodes {
              name
            }
          }
        }
      }
      pullRequests(last: 100, orderBy: {field: CREATED_AT, direction: DESC}) {
        totalCount
        nodes {
          id
          title
          url
          state
          mergedBy {
            avatarUrl
            url
            login
          }
          createdAt
          number
          changedFiles
          additions
          deletions
          baseRepository {
            name
            url
            owner {
              avatarUrl
              login
              url
            }
          }
        }
      }
      issues(last: 100, orderBy: {field: CREATED_AT, direction: DESC}) {
        totalCount
        nodes {
          id
          closed
          title
          createdAt
          url
          number
          assignees(first: 100) {
            nodes {
              avatarUrl
              name
              url
            }
          }
          repository {
            name
            url
            owner {
              login
              avatarUrl
              url
            }
          }
        }
      }
      repositoriesContributedTo(first: 100, contributionTypes: [COMMIT, ISSUE, PULL_REQUEST, REPOSITORY]) {
        totalCount
        nodes {
          owner {
            login
            avatarUrl
            __typename
          }
        }
      }
      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              contributionCount
              date
              contributionLevel
            }
          }
        }
      }
    }
  }
`;

const languages_icons = {
  Python: "logos-python",
  "Jupyter Notebook": "logos-jupyter",
  HTML: "logos-html-5",
  CSS: "logos-css-3",
  JavaScript: "logos-javascript",
  TypeScript: "logos-typescript-icon",
  "C#": "logos-c-sharp",
  Java: "logos-java",
  Shell: "simple-icons:shell",
  Ruby: "logos:ruby",
  PHP: "logos-php",
  Dockerfile: "simple-icons:docker",
  Rust: "logos-rust",
  "C++": "logos-c-plusplus",
  C: "logos-c",
  Go: "logos-go",
  Kotlin: "logos-kotlin",
  Swift: "logos-swift",
};

async function main() {
  console.log("Fetching GitHub Data...");
  try {
    const result = await fetchGraphQL(query);
    if (result.errors) {
      console.error("GraphQL Errors:", result.errors);
      return;
    }

    const user = result.data.user;

    // Projects (Pinned or Fallback to active repositories)
    let projects = user.pinnedItems.nodes;
    let usingFallback = false;
    if (!projects || projects.length < 2) {
      projects = user.repositories.nodes;
      usingFallback = true;
    }

    const processedProjects = projects.map((repo) => {
      const langnodes = repo.languages.nodes;
      const newLangs = langnodes
        .filter((lang) => lang.name in languages_icons)
        .map((lang) => ({
          name: lang.name,
          iconifyClass: languages_icons[lang.name],
        }));
      return {
        ...repo,
        languages: newLangs,
      };
    });

    fs.writeFileSync(
      "src/shared/opensource/projects.json",
      JSON.stringify({ data: processedProjects }, null, 2)
    );
    console.log(
      `Saved ${processedProjects.length} Projects (${
        usingFallback ? "from fallback repositories" : "from pinned items"
      }).`
    );

    // Save All Repositories
    fs.writeFileSync(
      "src/shared/opensource/repositories.json",
      JSON.stringify({ data: user.repositories.nodes }, null, 2)
    );
    console.log(`Saved ${user.repositories.nodes.length} Repositories.`);

    // Pull Requests
    const prs = user.pullRequests.nodes;
    var openPRs = 0;
    var closedPRs = 0;
    var mergedPRs = 0;
    prs.forEach((pr) => {
      if (pr.state === "OPEN") openPRs++;
      else if (pr.state === "MERGED") mergedPRs++;
      else closedPRs++;
    });
    fs.writeFileSync(
      "src/shared/opensource/pull_requests.json",
      JSON.stringify(
        {
          data: prs,
          open: openPRs,
          closed: closedPRs,
          merged: mergedPRs,
          totalCount: prs.length,
        },
        null,
        2
      )
    );

    // Issues
    const issues = user.issues.nodes;
    var openIssues = 0;
    var closedIssues = 0;
    issues.forEach((issue) => {
      if (!issue.closed) openIssues++;
      else closedIssues++;
    });
    fs.writeFileSync(
      "src/shared/opensource/issues.json",
      JSON.stringify(
        {
          data: issues,
          open: openIssues,
          closed: closedIssues,
          totalCount: issues.length,
        },
        null,
        2
      )
    );

    // Organizations
    const orgsMap = {};
    const customOrgs = [
      {
        login: "FAST-NUCES",
        avatarUrl: "https://avatars.githubusercontent.com/u/23577782?s=200&v=4",
      },
      {
        login: "Kaggle",
        avatarUrl: "https://avatars.githubusercontent.com/u/1336224?s=200&v=4",
      },
      {
        login: "DeepLearning.AI",
        avatarUrl: "https://avatars.githubusercontent.com/u/32840656?s=200&v=4",
      },
      {
        login: "Google Developers",
        avatarUrl: "https://avatars.githubusercontent.com/u/206927?s=200&v=4",
      },
      {
        login: "Meta Open Source",
        avatarUrl: "https://avatars.githubusercontent.com/u/69631?s=200&v=4",
      },
      {
        login: "GitHub",
        avatarUrl: "https://avatars.githubusercontent.com/u/9919?s=200&v=4",
      },
      {
        login: "Microsoft",
        avatarUrl: "https://avatars.githubusercontent.com/u/6154722?s=200&v=4",
      },
    ];
    customOrgs.forEach((org) => {
      orgsMap[org.login] = org;
    });

    user.repositoriesContributedTo.nodes.forEach((repo) => {
      if (repo.owner.__typename === "Organization") {
        orgsMap[repo.owner.login] = {
          login: repo.owner.login,
          avatarUrl: repo.owner.avatarUrl,
        };
      }
    });
    const orgs = Object.values(orgsMap);
    fs.writeFileSync(
      "src/shared/opensource/organizations.json",
      JSON.stringify({ data: orgs }, null, 2)
    );

    // Contributions
    const contributions = user.contributionsCollection.contributionCalendar;
    fs.writeFileSync(
      "src/shared/opensource/contributions.json",
      JSON.stringify(contributions, null, 2)
    );

    console.log(
      `Saved ${prs.length} PRs, ${issues.length} Issues, ${orgs.length} Organizations, and Contribution Calendar.`
    );
  } catch (err) {
    console.error("Failed to fetch:", err);
  }
}

main();
