exports.BASE_DOMAIN = "discordapp.com";
exports.BASE = `https://${exports.BASE_DOMAIN}`;
exports.WEBSOCKET_HUB = `wss://${exports.BASE_DOMAIN}/hub`;

exports.API = `${exports.BASE}/api`;
exports.AUTH = `${exports.API}/auth`;
exports.LOGIN = `${exports.AUTH}/login`;
exports.LOGOUT = `${exports.AUTH}/logout`;
exports.USERS = `${exports.API}/users`;
exports.SERVERS = `${exports.API}/guilds`;
exports.CHANNELS = `${exports.API}/channels`;