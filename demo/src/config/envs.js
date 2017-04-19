let envs = {
  env: process.env.NODE_ENV,
  pro: process.env.NODE_ENV === 'production',
  hom: process.env.NODE_ENV === 'hom',
  dev: process.env.NODE_ENV === 'development'
}

export default envs
