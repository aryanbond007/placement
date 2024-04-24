const fs = require('fs');

const path = require('path');
require('dotenv').config();



const development = {
    name: "development",
    // asset_path:  process.env.PLACEMENT_CELL_ASSET_PATH,
    asset_path:  process.env.DEVELOPMENT_ASSET_PATH,
    session_cookie_key: process.env.SESSION_COOKIE_KEY,
    google_client_ID: process.env.GOOGLE_CLIENT_ID,
    google_client_Secret: process.env.GOOGLE_CLIENT_SECRET,
    google_callbackURL: process.env.DEVELOPMENT_GOOGLE_CALLBACK_URL,
  
    
}


module.exports = eval(process.env.PLACEMENT_CELL_ENVIRONMENT) == undefined ? development : eval(process.env.PLACEMENT_CELL_ENVIRONMENT);