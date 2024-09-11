import FtpDeploy from "ftp-deploy"
import auth from "./ftpauth.json" assert {type: "json"}
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const ftpDeploy = new FtpDeploy();

const config = {
    user: auth.ftp.username,
    password: auth.ftp.password,
    host: auth.ftp.host,
    port: auth.ftp.port,
    localRoot: __dirname + "/dist",
    remoteRoot: `aiki.in.ua/`,
    include: ["*.*"],
    exclude: [],
    deleteRemote: true,
    forcePasv: true,
    sftp: false,
};

ftpDeploy
    .deploy(config)
    .then((res) => console.log("finished:", res))
    .catch((err) => console.log(err));
