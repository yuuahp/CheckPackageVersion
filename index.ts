import { Octokit } from "@octokit/core"
import config from "./config";

const octokit = new Octokit({ auth: config.token });

async function getLatestVersion(type: string, name: string) {
    const latest = (await octokit.request('GET /user/packages/{package_type}/{package_name}/versions', {
        package_type: type as "maven" | "npm" | "rubygems" | "docker" | "nuget" | "container",
        package_name: name
    })).data[0]

    log(`${name} の最新バージョンが見つかりました!`)
    log(`============`)
    log(`Version: ${latest.name}`)
    log(`URL: ${latest.package_html_url}`)
    log(`Update: ${latest.updated_at}`)
    log(`============`)
}

function log(message: string) {
    console.log(`[CPV] ${message}`)
}

getLatestVersion(config.type, config.name)