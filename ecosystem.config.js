module.exports = {
  apps: [
    { 
      name: "VIP-Max", script: "botpremium.py", interpreter: "python3",
      env: { 
        BOT_NAME: "PeaxelMax", 
        API_KEY: process.env.API_MAX, 
        PRIVATE_KEY: process.env.PRIV_MAX 
      }
    },
    { 
      name: "VIP-Lite", script: "botpremium.py", interpreter: "python3",
      env: { 
        BOT_NAME: "PeaxelLite", 
        API_KEY: process.env.API_LITE, 
        PRIVATE_KEY: process.env.PRIV_LITE 
      }
    },
    { 
      name: "VIP-Turbo", script: "botpremium.py", interpreter: "python3",
      env: { 
        BOT_NAME: "PeaxelTurbo", 
        API_KEY: process.env.API_TURBO, 
        PRIVATE_KEY: process.env.PRIV_TURBO 
      }
    },
    { 
      name: "VIP-Dex", script: "botpremium.py", interpreter: "python3",
      env: { 
        BOT_NAME: "PeaxelDex", 
        API_KEY: process.env.API_DEX, 
        PRIVATE_KEY: process.env.PRIV_DEX 
      }
    },
    { 
      name: "VIP-Solar", script: "botpremium.py", interpreter: "python3",
      env: { 
        BOT_NAME: "PeaxelSolar", 
        API_KEY: process.env.API_SOLAR, 
        PRIVATE_KEY: process.env.PRIV_SOLAR 
      }
    }
  ]
};