const prod = process.env.NODE_ENV === "production";

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: path.resolve(__dirname, "src", "index.tsx"),
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js",
	},
	mode: prod ? "production" : "development",
	module: {
		rules: [
			{
				test: /\.[jt]sx?$/,
				use: ["babel-loader"], // here if we use ts-loader ,then in noEmit set to true in tsconfig.json
				exclude: /node_modules/,
			},
			{
				test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
				type: "asset/resource",
			},
			{
				test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
				type: "asset/inline",
			},
		],
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js", ".jsx"],
	},
	devtool: prod ? undefined : "source-map", // for showing sourceMaps in developer tools
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, "./src/index.html"),
		})
	],
	devServer: {
		static: path.join(__dirname, "./src"),
		port: 3001,
		hot: "only",
		compress: true,
		open: true,
	},
};
