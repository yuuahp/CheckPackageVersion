import { Octokit } from "@octokit/core"
import config from "./config";
import * as fs from 'fs';

const octokit = new Octokit({ auth: config.token });

async function getLatestVersion(type: string, groupId: string, name: string) {
    const latest = (await octokit.request('GET /user/packages/{package_type}/{package_name}/versions', {
        package_type: type as "maven" | "npm" | "rubygems" | "docker" | "nuget" | "container",
        package_name: `${groupId}.${name}`
    })).data[0]

    log(`${name} の最新バージョンが見つかりました!`)
    log(`============`)
    log(`Version: ${latest.name}`)
    log(`URL: ${latest.package_html_url}`)
    log(`Update: ${latest.updated_at}`)
    log(`============`)

    if (config.replaceVersion) 
        replaceVersion(groupId, name, latest.name, config.buildFilePath)
}

function replaceVersion(groupId: string, packageName: string, version: string, path: string) {
    const buildFile = fs.readFileSync(path, "utf8");
    const replacedBuildFile = buildFile
        .replace(
            new RegExp(`implementation\\("${groupId.replace("\.", "\\.")}:${packageName}:.*"\\)`),
            `implementation\("${groupId}:${packageName}:${version}"\)`
        )
    fs.writeFileSync(path, replacedBuildFile)
    log(`${path} のバージョンを書き換えました!`)
}

function log(message: string) {
    console.log(`[CPV] ${message}`)
}

getLatestVersion(config.type, config.groupId, config.name)