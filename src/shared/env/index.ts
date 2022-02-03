export default {
  port:process.env.PORT || 3003 as number ,
  host:process.env.HOST || '0.0.0.0',
  jwt_secret:process.env.JWT_SECRET || 'secret_key',
  bcrypt_hash:process.env.BCRYPT_HASH,
  api_url: process.env.API_URL,
  api_secret_key: process.env.API_SECRET_KEY,
  api_acess_key: process.env.API_ACESS_KEY,
}
