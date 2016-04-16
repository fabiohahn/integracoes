module.exports = {
	env: 'production',
	clientID: process.env.CLIENT_ID,
	clientSecret: process.env.CLIENT_SECRET,
	port: process.env.OPENSHIFT_NODEJS_PORT,
	address: process.env.OPENSHIFT_NODEJS_IP,
	domain: process.env.OPENSHIFT_APP_DNS
};