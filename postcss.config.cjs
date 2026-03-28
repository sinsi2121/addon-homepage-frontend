// postcss.config.cjs
module.exports = {
plugins: {
tailwindcss: {},
autoprefixer: {},
},
};

Tailwind CSSやAutoprefixerを使わない場合は、こちら：

// postcss.config.cjs
module.exports = {
plugins: [],
};