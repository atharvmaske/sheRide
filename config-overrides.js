module.exports = function override(config, env) {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      http: false,
      https: false,
      zlib: false,
      util: false,
    };
    return config;
  };
  