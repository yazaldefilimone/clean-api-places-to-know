export default {
  port:process.env.PORT || 3003 as number ,
  host:process.env.HOST || '0.0.0.0',
  jwt_secret:process.env.JWT_SECRET,
  bcrypt_hash:process.env.BCRYPT_HASH,
}
