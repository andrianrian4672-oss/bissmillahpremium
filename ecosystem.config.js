module.exports = {
  apps: [
    { 
      name: "VIP-Max", script: "botpremium.py", interpreter: "python3",
      env: { 
        BOT_NAME: "Peaxel_Maxx", 
        API_KEY: process.env.API_MAX, 
        PRIVATE_KEY: process.env.PRIV_MAX 
      }
    },
    { 
      name: "VIP-Max", script: "botpremium.py", interpreter: "python3",
      env: { 
        BOT_NAME: "Peaxel_Maxx", 
        API_KEY: process.env.API_PREMIUM, 
        PRIVATE_KEY: process.env.PRIV_PREMIUM 
      }
    },
    {
      name: "Radar-Tele", script: "radartele.py", interpreter: "python3",
      env: { 
        TELEGRAM_TOKEN: process.env.TELEGRAM_TOKEN,
        TELEGRAM_CHAT_ID: process.env.TELEGRAM_CHAT_ID
      }
    }
  ]
};


